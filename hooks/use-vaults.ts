"use client";

import { useQuery } from "@tanstack/react-query";
import { createPublicClient, erc20Abi, http, type Address } from "viem";
import { getVaultConfigByAddress, getVaultConfigsByChain, VAULT_CONFIGS, type VaultConfig } from "@/config/vaults";
import {
  VaultDetailDocument,
  VaultsDashboardDocument,
  type VaultDetailQuery,
  type VaultsDashboardQuery
} from "@/graphql/generated/graphql";
import { feeManagerAbi, strategyManagerAbi, vaultAbi } from "@/lib/abis";
import { fetchGraphQL } from "@/lib/graphql-client";
import { queryKeys } from "@/lib/query-keys";

const zeroAddress = "0x0000000000000000000000000000000000000000";
export const liveEpochWindowSize = 24;

type RedeemEpochSnapshot = {
  epochId: string;
  totalPendingShares: string;
  openedAt: string;
  reportId: string;
  settledAssetsPerShare: string;
  pricedAt: string;
  pricedAssets: string;
  pricedNetShares: string;
  redeemFeeRate: string;
  protocolFeeRate: string;
  closedAt: string;
  settledAt: string;
  status: "Open" | "Closed" | "Priced" | "Settled";
  isEmpty: boolean;
};

type DepositEpochSnapshot = {
  epochId: string;
  totalPendingAssets: string;
  openedAt: string;
  reportId: string;
  settledAssetsPerShare: string;
  entryFeeRate: string;
  protocolFeeRate: string;
  closedAt: string;
  settledAt: string;
  status: "Open" | "Closed" | "Settled";
  isEmpty: boolean;
};

export type VaultContract = {
  paused: boolean;
  totalAssets: string;
  activeNavAssets: string;
  trustedAssetsPerShare: string;
  vaultIdleBalance: string;
  availableIdleAssetsForStrategy: string;
  strategyAllocation: string;
  maxTotalAssets: string;
  maxPendingDepositAssets: string;
  minDepositAssets: string;
  minRedeemShares: string;
  pendingRedeemShares: string;
  estimatedPendingRedeemAssets: string;
  totalPendingDepositAssets: string;
  depositEpochDuration: string;
  redeemEpochDuration: string;
  totalClaimableRedeemAssets: string;
  totalClaimableRedeemNetShares: string;
  totalSupply: string;
  activeShareSupply: string;
  cachedActiveNav: {
    assets: string;
    reportId: string;
    oracle: string;
  };
  currentDepositEpochId: string | null;
  depositEpochs: DepositEpochSnapshot[];
  currentRedeemEpochId: string;
  currentRedeemEpoch: RedeemEpochSnapshot;
  lastRedeemEpoch: RedeemEpochSnapshot | null;
  redeemEpochs: RedeemEpochSnapshot[];
  latestUnsettledRedeemEpochId: string;
  asset: string;
  strategyManager: string;
  feeManager: {
    address: string;
    vault: string;
    feeRecipient: string;
    protocolFeeRecipient: string;
    entryFeeRate: string;
    exitFeeRate: string;
    performanceFeeRate: string;
    entryProtocolShareRate: string;
    exitProtocolShareRate: string;
    managementProtocolShareRate: string;
    performanceProtocolShareRate: string;
    managementFeeRate: string;
    lastManagementFeeAccruedAt: string;
    highWaterMarkAssetsPerShare: string;
    feesInitialized: boolean;
  } | null;
};

function estimatePendingRedeemAssets(pendingShares: bigint, trustedAssetsPerShare: bigint, assetDecimals: number) {
  const assetUnit = BigInt(10) ** BigInt(assetDecimals);
  const shareUnit = BigInt(10) ** BigInt(18);
  const priceUnit = BigInt(10) ** BigInt(18);

  return (pendingShares * trustedAssetsPerShare * assetUnit) / (shareUnit * priceUnit);
}

type RedeemEpochContract = {
  totalPendingShares: bigint;
  openedAt: bigint;
  reportId: bigint;
  settledAssetsPerShare: bigint;
  pricedAt: bigint;
  pricedAssets: bigint;
  pricedNetShares: bigint;
  exitFeeRate: number;
  exitProtocolShareRate: number;
  closedAt: bigint;
  settledAt: bigint;
  status: number;
};

type DepositEpochContract = {
  totalPendingAssets: bigint;
  openedAt: bigint;
  reportId: bigint;
  settledAssetsPerShare: bigint;
  entryFeeRate: number;
  entryProtocolShareRate: number;
  closedAt: bigint;
  settledAt: bigint;
  status: number;
};

type FeeManagerData = [
  vault: Address,
  feeRecipient: Address,
  protocolFeeRecipient: Address,
  entryFeeRate: bigint,
  exitFeeRate: bigint,
  performanceFeeRate: bigint,
  entryProtocolShareRate: bigint,
  exitProtocolShareRate: bigint,
  managementProtocolShareRate: bigint,
  performanceProtocolShareRate: bigint,
  managementFeeRate: bigint,
  lastManagementFeeAccruedAt: bigint,
  highWaterMarkAssetsPerShare: bigint,
  feesInitialized: boolean
];

export type ConfiguredVaultRow = VaultsDashboardQuery["vaults"][number] & {
  configuredChain: VaultConfig["chain"];
};

export type ConfiguredVaultsDashboard = Omit<VaultsDashboardQuery, "vaults"> & {
  vaults: ConfiguredVaultRow[];
};

function createVaultPublicClient(vaultConfig: VaultConfig) {
  return createPublicClient({
    chain: vaultConfig.chain,
    transport: http(vaultConfig.rpcUrl)
  });
}

type MulticallResult<TResult> =
  | {
      status: "success";
      result: TResult;
    }
  | {
      status: "failure";
      error: Error;
    };

function requireMulticallResult<TResult>(result: MulticallResult<TResult>, functionName: string) {
  if (result.status === "success") return result.result;
  throw new Error(`${functionName} failed: ${result.error.message}`);
}

function optionalMulticallResult<TResult>(result: MulticallResult<TResult>, fallback: TResult) {
  return result.status === "success" ? result.result : fallback;
}

function latestEpochIds(currentEpochId: bigint, limit = liveEpochWindowSize) {
  const epochIds: bigint[] = [];
  let epochId = currentEpochId;

  while (epochId >= BigInt(1) && epochIds.length < limit) {
    epochIds.push(epochId);
    epochId -= BigInt(1);
  }

  return epochIds;
}

function formatDepositEpochStatus(status: number) {
  if (status === 1) return "Closed";
  if (status === 2) return "Settled";
  return "Open";
}

function formatRedeemEpochStatus(status: number) {
  if (status === 1) return "Closed";
  if (status === 2) return "Priced";
  if (status === 3) return "Settled";
  return "Open";
}

function isEmptyDepositEpoch(epoch: DepositEpochContract) {
  return (
    epoch.totalPendingAssets === BigInt(0) &&
    epoch.openedAt === BigInt(0) &&
    epoch.reportId === BigInt(0) &&
    epoch.settledAssetsPerShare === BigInt(0) &&
    epoch.closedAt === BigInt(0) &&
    epoch.settledAt === BigInt(0) &&
    epoch.status === 0
  );
}

function isEmptyRedeemEpoch(epoch: RedeemEpochContract) {
  return (
    epoch.totalPendingShares === BigInt(0) &&
    epoch.openedAt === BigInt(0) &&
    epoch.reportId === BigInt(0) &&
    epoch.settledAssetsPerShare === BigInt(0) &&
    epoch.pricedAt === BigInt(0) &&
    epoch.pricedAssets === BigInt(0) &&
    epoch.pricedNetShares === BigInt(0) &&
    epoch.closedAt === BigInt(0) &&
    epoch.settledAt === BigInt(0) &&
    epoch.status === 0
  );
}

function serializeDepositEpoch(epochId: bigint, epoch: DepositEpochContract): DepositEpochSnapshot {
  return {
    epochId: epochId.toString(),
    totalPendingAssets: epoch.totalPendingAssets.toString(),
    openedAt: epoch.openedAt.toString(),
    reportId: epoch.reportId.toString(),
    settledAssetsPerShare: epoch.settledAssetsPerShare.toString(),
    entryFeeRate: epoch.entryFeeRate.toString(),
    protocolFeeRate: epoch.entryProtocolShareRate.toString(),
    closedAt: epoch.closedAt.toString(),
    settledAt: epoch.settledAt.toString(),
    status: formatDepositEpochStatus(epoch.status),
    isEmpty: isEmptyDepositEpoch(epoch)
  };
}

function serializeRedeemEpoch(epochId: bigint, epoch: RedeemEpochContract): RedeemEpochSnapshot {
  return {
    epochId: epochId.toString(),
    totalPendingShares: epoch.totalPendingShares.toString(),
    openedAt: epoch.openedAt.toString(),
    reportId: epoch.reportId.toString(),
    settledAssetsPerShare: epoch.settledAssetsPerShare.toString(),
    pricedAt: epoch.pricedAt.toString(),
    pricedAssets: epoch.pricedAssets.toString(),
    pricedNetShares: epoch.pricedNetShares.toString(),
    redeemFeeRate: epoch.exitFeeRate.toString(),
    protocolFeeRate: epoch.exitProtocolShareRate.toString(),
    closedAt: epoch.closedAt.toString(),
    settledAt: epoch.settledAt.toString(),
    status: formatRedeemEpochStatus(epoch.status),
    isEmpty: isEmptyRedeemEpoch(epoch)
  };
}

async function fetchVaultContract(address: string): Promise<VaultContract> {
  const vaultConfig = getVaultConfigByAddress(address);
  if (!vaultConfig) {
    throw new Error(`Vault ${address} is not configured.`);
  }

  const publicClient = createVaultPublicClient(vaultConfig);
  const vaultAddress = address.toLowerCase() as Address;
  const vaultContract = {
    address: vaultAddress,
    abi: vaultAbi
  } as const;
  const primaryContracts = [
    { ...vaultContract, functionName: "paused" },
    { ...vaultContract, functionName: "totalAssets" },
    { ...vaultContract, functionName: "activeNavAssets" },
    { ...vaultContract, functionName: "trustedAssetsPerShare" },
    { ...vaultContract, functionName: "availableIdleAssetsForStrategy" },
    { ...vaultContract, functionName: "maxTotalAssets" },
    { ...vaultContract, functionName: "maxPendingDepositAssets" },
    { ...vaultContract, functionName: "minDepositAssets" },
    { ...vaultContract, functionName: "minRedeemShares" },
    ...(vaultConfig.vaultType === "fullyAsync"
      ? [{ ...vaultContract, functionName: "totalPendingDepositAssets" }]
      : []),
    ...(vaultConfig.vaultType === "fullyAsync" ? [{ ...vaultContract, functionName: "depositEpochDuration" }] : []),
    ...(vaultConfig.vaultType === "fullyAsync" ? [{ ...vaultContract, functionName: "currentDepositEpochId" }] : []),
    { ...vaultContract, functionName: "redeemEpochDuration" },
    { ...vaultContract, functionName: "totalClaimableRedeemAssets" },
    { ...vaultContract, functionName: "totalClaimableRedeemNetShares" },
    { ...vaultContract, functionName: "totalSupply" },
    { ...vaultContract, functionName: "activeShareSupply" },
    { ...vaultContract, functionName: "cachedActiveNav" },
    { ...vaultContract, functionName: "currentRedeemEpochId" },
    { ...vaultContract, functionName: "asset" },
    { ...vaultContract, functionName: "strategyManager" },
    { ...vaultContract, functionName: "feeManager" }
  ] as Parameters<typeof publicClient.multicall>[0]["contracts"];

  const primaryResults = await publicClient.multicall({
    allowFailure: true,
    contracts: primaryContracts
  });
  let primaryResultIndex = 0;
  const paused = requireMulticallResult(primaryResults[primaryResultIndex++] as MulticallResult<boolean>, "paused");
  const totalAssets = requireMulticallResult(primaryResults[primaryResultIndex++] as MulticallResult<bigint>, "totalAssets");
  const activeNavAssets = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "activeNavAssets"
  );
  const trustedAssetsPerShare = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "trustedAssetsPerShare"
  );
  const availableIdleAssetsForStrategy = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "availableIdleAssetsForStrategy"
  );
  const maxTotalAssets = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "maxTotalAssets"
  );
  const maxPendingDepositAssets = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "maxPendingDepositAssets"
  );
  const minDepositAssets = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "minDepositAssets"
  );
  const minRedeemShares = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "minRedeemShares"
  );
  const totalPendingDepositAssets =
    vaultConfig.vaultType === "fullyAsync"
      ? optionalMulticallResult(primaryResults[primaryResultIndex++] as MulticallResult<bigint>, BigInt(0))
      : BigInt(0);
  const depositEpochDuration =
    vaultConfig.vaultType === "fullyAsync"
      ? requireMulticallResult(primaryResults[primaryResultIndex++] as MulticallResult<bigint>, "depositEpochDuration")
      : BigInt(0);
  const currentDepositEpochId =
    vaultConfig.vaultType === "fullyAsync"
      ? requireMulticallResult(primaryResults[primaryResultIndex++] as MulticallResult<bigint>, "currentDepositEpochId")
      : null;
  const redeemEpochDuration = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "redeemEpochDuration"
  );
  const totalClaimableRedeemAssets = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "totalClaimableRedeemAssets"
  );
  const totalClaimableRedeemNetShares = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "totalClaimableRedeemNetShares"
  );
  const totalSupply = requireMulticallResult(primaryResults[primaryResultIndex++] as MulticallResult<bigint>, "totalSupply");
  const activeShareSupply = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "activeShareSupply"
  );
  const cachedActiveNav = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<readonly [bigint, bigint, Address]>,
    "cachedActiveNav"
  );
  const currentRedeemEpochId = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<bigint>,
    "currentRedeemEpochId"
  );
  const asset = requireMulticallResult(primaryResults[primaryResultIndex++] as MulticallResult<Address>, "asset");
  const strategyManager = requireMulticallResult(
    primaryResults[primaryResultIndex++] as MulticallResult<Address>,
    "strategyManager"
  );
  const feeManager = requireMulticallResult(primaryResults[primaryResultIndex++] as MulticallResult<Address>, "feeManager");
  const hasStrategyManager = strategyManager.toLowerCase() !== zeroAddress;
  const hasFeeManager = feeManager.toLowerCase() !== zeroAddress;
  const depositEpochIds = currentDepositEpochId ? latestEpochIds(currentDepositEpochId) : [];
  const redeemEpochIds = latestEpochIds(currentRedeemEpochId);

  const secondaryContracts = [
    ...depositEpochIds.map((epochId) => ({ ...vaultContract, functionName: "depositEpoch", args: [epochId] })),
    ...redeemEpochIds.map((epochId) => ({ ...vaultContract, functionName: "redeemEpoch", args: [epochId] })),
    {
      address: asset,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [vaultAddress]
    },
    {
      address: asset,
      abi: erc20Abi,
      functionName: "decimals"
    },
    ...(hasStrategyManager
      ? [
          {
            address: strategyManager,
            abi: strategyManagerAbi,
            functionName: "totalAllocation"
          }
        ]
      : []),
    ...(hasFeeManager
      ? [
          { address: feeManager, abi: feeManagerAbi, functionName: "vault" },
          { address: feeManager, abi: feeManagerAbi, functionName: "feeRecipient" },
          { address: feeManager, abi: feeManagerAbi, functionName: "protocolFeeRecipient" },
          { address: feeManager, abi: feeManagerAbi, functionName: "entryFeeRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "exitFeeRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "performanceFeeRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "entryProtocolShareRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "exitProtocolShareRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "managementProtocolShareRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "performanceProtocolShareRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "managementFeeRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "lastManagementFeeAccruedAt" },
          { address: feeManager, abi: feeManagerAbi, functionName: "highWaterMarkAssetsPerShare" },
          { address: feeManager, abi: feeManagerAbi, functionName: "feesInitialized" }
        ]
      : [])
  ] as Parameters<typeof publicClient.multicall>[0]["contracts"];

  const secondaryResults = await publicClient.multicall({
    allowFailure: false,
    contracts: secondaryContracts
  });
  let secondaryResultIndex = 0;
  const depositEpochSnapshots = depositEpochIds
    .map((epochId) => serializeDepositEpoch(epochId, secondaryResults[secondaryResultIndex++] as DepositEpochContract))
    .filter((epoch) => !epoch.isEmpty);
  const redeemEpochSnapshots = redeemEpochIds
    .map((epochId) => serializeRedeemEpoch(epochId, secondaryResults[secondaryResultIndex++] as RedeemEpochContract))
    .filter((epoch) => !epoch.isEmpty);
  const vaultIdleBalance = secondaryResults[secondaryResultIndex++] as bigint;
  const assetDecimals = secondaryResults[secondaryResultIndex++] as number;
  const strategyAllocation = hasStrategyManager ? (secondaryResults[secondaryResultIndex++] as bigint) : BigInt(0);
  const feeManagerData = hasFeeManager
    ? (secondaryResults.slice(secondaryResultIndex, secondaryResultIndex + 14) as FeeManagerData)
    : null;

  const currentRedeemEpochSnapshot =
    redeemEpochSnapshots.find((epoch) => epoch.epochId === currentRedeemEpochId.toString()) ??
    serializeRedeemEpoch(currentRedeemEpochId, {
      totalPendingShares: BigInt(0),
      openedAt: BigInt(0),
      reportId: BigInt(0),
      settledAssetsPerShare: BigInt(0),
      pricedAt: BigInt(0),
      pricedAssets: BigInt(0),
      pricedNetShares: BigInt(0),
      exitFeeRate: 0,
      exitProtocolShareRate: 0,
      closedAt: BigInt(0),
      settledAt: BigInt(0),
      status: 0
    });
  const lastRedeemEpochSnapshot =
    redeemEpochSnapshots.find((epoch) => epoch.epochId !== currentRedeemEpochId.toString()) ?? null;
  const latestUnsettledRedeemEpoch =
    redeemEpochSnapshots.find((epoch) => epoch.status !== "Settled") ?? currentRedeemEpochSnapshot;
  const displayPendingRedeemShares = redeemEpochSnapshots
    .filter((epoch) => epoch.status !== "Settled")
    .reduce((total, epoch) => total + BigInt(epoch.totalPendingShares), BigInt(0));
  const estimatedPendingRedeemAssets = estimatePendingRedeemAssets(
    displayPendingRedeemShares,
    trustedAssetsPerShare,
    assetDecimals
  );

  return {
    paused,
    totalAssets: totalAssets.toString(),
    activeNavAssets: activeNavAssets.toString(),
    trustedAssetsPerShare: trustedAssetsPerShare.toString(),
    availableIdleAssetsForStrategy: availableIdleAssetsForStrategy.toString(),
    maxTotalAssets: maxTotalAssets.toString(),
    maxPendingDepositAssets: maxPendingDepositAssets.toString(),
    minDepositAssets: minDepositAssets.toString(),
    minRedeemShares: minRedeemShares.toString(),
    pendingRedeemShares: displayPendingRedeemShares.toString(),
    estimatedPendingRedeemAssets: estimatedPendingRedeemAssets.toString(),
    totalPendingDepositAssets: totalPendingDepositAssets.toString(),
    depositEpochDuration: depositEpochDuration.toString(),
    redeemEpochDuration: redeemEpochDuration.toString(),
    totalClaimableRedeemAssets: totalClaimableRedeemAssets.toString(),
    totalClaimableRedeemNetShares: totalClaimableRedeemNetShares.toString(),
    totalSupply: totalSupply.toString(),
    activeShareSupply: activeShareSupply.toString(),
    cachedActiveNav: {
      assets: cachedActiveNav[0].toString(),
      reportId: cachedActiveNav[1].toString(),
      oracle: cachedActiveNav[2]
    },
    currentDepositEpochId: currentDepositEpochId?.toString() ?? null,
    depositEpochs: depositEpochSnapshots,
    currentRedeemEpochId: currentRedeemEpochId.toString(),
    currentRedeemEpoch: currentRedeemEpochSnapshot,
    lastRedeemEpoch: lastRedeemEpochSnapshot,
    redeemEpochs: redeemEpochSnapshots,
    latestUnsettledRedeemEpochId: latestUnsettledRedeemEpoch.epochId,
    asset,
    strategyManager,
    feeManager: feeManagerData
      ? {
          address: feeManager,
          vault: feeManagerData[0],
          feeRecipient: feeManagerData[1],
          protocolFeeRecipient: feeManagerData[2],
          entryFeeRate: feeManagerData[3].toString(),
          exitFeeRate: feeManagerData[4].toString(),
          performanceFeeRate: feeManagerData[5].toString(),
          entryProtocolShareRate: feeManagerData[6].toString(),
          exitProtocolShareRate: feeManagerData[7].toString(),
          managementProtocolShareRate: feeManagerData[8].toString(),
          performanceProtocolShareRate: feeManagerData[9].toString(),
          managementFeeRate: feeManagerData[10].toString(),
          lastManagementFeeAccruedAt: feeManagerData[11].toString(),
          highWaterMarkAssetsPerShare: feeManagerData[12].toString(),
          feesInitialized: feeManagerData[13]
        }
      : null,
    vaultIdleBalance: vaultIdleBalance.toString(),
    strategyAllocation: strategyAllocation.toString()
  };
}

export function useVaultsDashboard() {
  return useQuery<ConfiguredVaultsDashboard>({
    queryKey: queryKeys.vaults.list(),
    queryFn: async () => {
      const groups = getVaultConfigsByChain();
      const results = await Promise.all(
        Object.values(groups).map(async (vaultConfigs) => {
          const data = await fetchGraphQL(
            VaultsDashboardDocument,
            { vaultIds: vaultConfigs.map((vault) => vault.address.toLowerCase()) },
            vaultConfigs[0].subgraphUrl
          );
          const vaultConfigByAddress = new Map(
            vaultConfigs.map((vault) => [vault.address.toLowerCase(), vault] as const)
          );

          return {
            ...data,
            vaults: data.vaults.map((vault) => ({
              ...vault,
              configuredChain: vaultConfigByAddress.get(vault.address.toLowerCase())?.chain ?? vaultConfigs[0].chain
            }))
          };
        })
      );

      return {
        vaults: results
          .flatMap((result) => result.vaults)
          .sort((a, b) => Number(b.registeredAtTimestamp) - Number(a.registeredAtTimestamp)),
        _meta: results.reduce<VaultsDashboardQuery["_meta"] | undefined>((latest, result) => {
          if (!latest) return result._meta;
          if (!result._meta) return latest;
          return Number(result._meta.block.number) > Number(latest.block.number) ? result._meta : latest;
        }, undefined)
      };
    },
    refetchInterval: 15000
  });
}

export function useVaultContract(address: string) {
  const normalizedAddress = address.toLowerCase();
  const vaultConfig = getVaultConfigByAddress(normalizedAddress);

  return useQuery<VaultContract>({
    queryKey: queryKeys.vaults.contract(normalizedAddress),
    queryFn: () => fetchVaultContract(normalizedAddress),
    enabled: Boolean(address && vaultConfig),
    refetchInterval: 15000,
    retry: 1
  });
}

export function useVaultDetail(address: string) {
  const normalizedAddress = address.toLowerCase();
  const vaultConfig = getVaultConfigByAddress(normalizedAddress);

  return useQuery<VaultDetailQuery>({
    queryKey: queryKeys.vaults.detail(normalizedAddress),
    queryFn: () =>
      fetchGraphQL(VaultDetailDocument, {
        id: normalizedAddress,
        vault: normalizedAddress
      }, vaultConfig?.subgraphUrl),
    enabled: Boolean(address && vaultConfig),
    refetchInterval: 15000
  });
}

export function useVaultConfig(address?: string) {
  return getVaultConfigByAddress(address);
}

export { VAULT_CONFIGS };
