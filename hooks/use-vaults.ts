"use client";

import { useQueries, useQuery } from "@tanstack/react-query";
import { createPublicClient, http, parseAbi, type Address } from "viem";
import {
  VaultDetailDocument,
  VaultsDashboardDocument,
  type VaultDetailQuery,
  type VaultsDashboardQuery
} from "@/graphql/generated/graphql";
import { fetchGraphQL } from "@/lib/graphql-client";
import { queryKeys } from "@/lib/query-keys";
import { base } from "viem/chains";

const chainRpcUrl = process.env.NEXT_PUBLIC_CHAIN_RPC_URL ?? "https://mainnet.base.org";
const zeroAddress = "0x0000000000000000000000000000000000000000";

const publicClient = createPublicClient({
  chain: base,
  transport: http(chainRpcUrl)
});

const vaultHealthAbi = parseAbi([
  "function totalAssets() view returns (uint256)",
  "function activeNavAssets() view returns (uint256)",
  "function trustedAssetsPerShare() view returns (uint256)",
  "function availableIdleAssetsForStrategy() view returns (uint256)",
  "function totalPendingDepositAssets() view returns (uint256)",
  "function totalClaimableRedeemAssets() view returns (uint256)",
  "function totalClaimableRedeemNetShares() view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function activeShareSupply() view returns (uint256)",
  "function cachedActiveNav() view returns (uint256 assets, uint256 reportId, address oracle)",
  "function currentRedeemEpochId() view returns (uint256)",
  "function redeemEpoch(uint256 epochId) view returns ((uint256 totalPendingShares, uint256 openedAt, uint256 reportId, uint256 settledAssetsPerShare, uint32 redeemFeeRate, uint32 protocolFeeRate, uint256 closedAt, uint256 settledAt, uint8 status))",
  "function asset() view returns (address)",
  "function strategyManager() view returns (address)",
  "function feeManager() view returns (address)"
]);

const erc20Abi = parseAbi([
  "function balanceOf(address account) view returns (uint256)",
  "function decimals() view returns (uint8)"
]);
const strategyManagerAbi = parseAbi(["function totalStrategyDebt() view returns (uint256)"]);
const feeManagerAbi = parseAbi([
  "function vault() view returns (address)",
  "function feeRecipient() view returns (address)",
  "function protocolFeeRecipient() view returns (address)",
  "function depositFeeRate() view returns (uint32)",
  "function redeemFeeRate() view returns (uint32)",
  "function performanceFeeRate() view returns (uint32)",
  "function protocolFeeRate() view returns (uint32)",
  "function managementFeeRate() view returns (uint32)",
  "function lastManagementFeeAccruedAt() view returns (uint256)",
  "function highWaterMarkAssetsPerShare() view returns (uint256)",
  "function feesInitialized() view returns (bool)"
]);

export type VaultHealth = {
  totalAssets: string;
  activeNavAssets: string;
  trustedAssetsPerShare: string;
  vaultIdleBalance: string;
  availableIdleAssetsForStrategy: string;
  strategyDebt: string;
  pendingRedeemShares: string;
  estimatedPendingRedeemAssets: string;
  totalPendingDepositAssets: string;
  totalClaimableRedeemAssets: string;
  totalClaimableRedeemNetShares: string;
  totalSupply: string;
  activeShareSupply: string;
  cachedActiveNav: {
    assets: string;
    reportId: string;
    oracle: string;
  };
  currentRedeemEpochId: string;
  asset: string;
  strategyManager: string;
  feeManager: {
    address: string;
    vault: string;
    feeRecipient: string;
    protocolFeeRecipient: string;
    depositFeeRate: string;
    redeemFeeRate: string;
    performanceFeeRate: string;
    protocolFeeRate: string;
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

async function fetchVaultHealth(address: string): Promise<VaultHealth> {
  const vaultAddress = address.toLowerCase() as Address;
  const vaultContract = {
    address: vaultAddress,
    abi: vaultHealthAbi
  } as const;
  const [
    totalAssets,
    activeNavAssets,
    trustedAssetsPerShare,
    availableIdleAssetsForStrategy,
    totalPendingDepositAssets,
    totalClaimableRedeemAssets,
    totalClaimableRedeemNetShares,
    totalSupply,
    activeShareSupply,
    cachedActiveNav,
    currentRedeemEpochId,
    asset,
    strategyManager,
    feeManager
  ] = await publicClient.multicall({
    allowFailure: false,
    contracts: [
      { ...vaultContract, functionName: "totalAssets" },
      { ...vaultContract, functionName: "activeNavAssets" },
      { ...vaultContract, functionName: "trustedAssetsPerShare" },
      { ...vaultContract, functionName: "availableIdleAssetsForStrategy" },
      { ...vaultContract, functionName: "totalPendingDepositAssets" },
      { ...vaultContract, functionName: "totalClaimableRedeemAssets" },
      { ...vaultContract, functionName: "totalClaimableRedeemNetShares" },
      { ...vaultContract, functionName: "totalSupply" },
      { ...vaultContract, functionName: "activeShareSupply" },
      { ...vaultContract, functionName: "cachedActiveNav" },
      { ...vaultContract, functionName: "currentRedeemEpochId" },
      { ...vaultContract, functionName: "asset" },
      { ...vaultContract, functionName: "strategyManager" },
      { ...vaultContract, functionName: "feeManager" }
    ]
  });
  const hasStrategyManager = strategyManager.toLowerCase() !== zeroAddress;
  const hasFeeManager = feeManager.toLowerCase() !== zeroAddress;
  const [redeemEpoch, vaultIdleBalance, assetDecimals] = await publicClient.multicall({
    allowFailure: false,
    contracts: [
      { ...vaultContract, functionName: "redeemEpoch", args: [currentRedeemEpochId] },
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
      }
    ]
  });
  const pendingRedeemShares = redeemEpoch.totalPendingShares;
  const estimatedPendingRedeemAssets = estimatePendingRedeemAssets(
    pendingRedeemShares,
    trustedAssetsPerShare,
    assetDecimals
  );
  const [strategyDebt = BigInt(0)] = hasStrategyManager
    ? await publicClient.multicall({
        allowFailure: false,
        contracts: [
          {
            address: strategyManager,
            abi: strategyManagerAbi,
            functionName: "totalStrategyDebt"
          }
        ]
      })
    : [BigInt(0)];
  const feeManagerData = hasFeeManager
    ? await publicClient.multicall({
        allowFailure: false,
        contracts: [
          { address: feeManager, abi: feeManagerAbi, functionName: "vault" },
          { address: feeManager, abi: feeManagerAbi, functionName: "feeRecipient" },
          { address: feeManager, abi: feeManagerAbi, functionName: "protocolFeeRecipient" },
          { address: feeManager, abi: feeManagerAbi, functionName: "depositFeeRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "redeemFeeRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "performanceFeeRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "protocolFeeRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "managementFeeRate" },
          { address: feeManager, abi: feeManagerAbi, functionName: "lastManagementFeeAccruedAt" },
          { address: feeManager, abi: feeManagerAbi, functionName: "highWaterMarkAssetsPerShare" },
          { address: feeManager, abi: feeManagerAbi, functionName: "feesInitialized" }
        ]
      })
    : null;

  return {
    totalAssets: totalAssets.toString(),
    activeNavAssets: activeNavAssets.toString(),
    trustedAssetsPerShare: trustedAssetsPerShare.toString(),
    availableIdleAssetsForStrategy: availableIdleAssetsForStrategy.toString(),
    pendingRedeemShares: pendingRedeemShares.toString(),
    estimatedPendingRedeemAssets: estimatedPendingRedeemAssets.toString(),
    totalPendingDepositAssets: totalPendingDepositAssets.toString(),
    totalClaimableRedeemAssets: totalClaimableRedeemAssets.toString(),
    totalClaimableRedeemNetShares: totalClaimableRedeemNetShares.toString(),
    totalSupply: totalSupply.toString(),
    activeShareSupply: activeShareSupply.toString(),
    cachedActiveNav: {
      assets: cachedActiveNav[0].toString(),
      reportId: cachedActiveNav[1].toString(),
      oracle: cachedActiveNav[2]
    },
    currentRedeemEpochId: currentRedeemEpochId.toString(),
    asset,
    strategyManager,
    feeManager: feeManagerData
      ? {
          address: feeManager,
          vault: feeManagerData[0],
          feeRecipient: feeManagerData[1],
          protocolFeeRecipient: feeManagerData[2],
          depositFeeRate: feeManagerData[3].toString(),
          redeemFeeRate: feeManagerData[4].toString(),
          performanceFeeRate: feeManagerData[5].toString(),
          protocolFeeRate: feeManagerData[6].toString(),
          managementFeeRate: feeManagerData[7].toString(),
          lastManagementFeeAccruedAt: feeManagerData[8].toString(),
          highWaterMarkAssetsPerShare: feeManagerData[9].toString(),
          feesInitialized: feeManagerData[10]
        }
      : null,
    vaultIdleBalance: vaultIdleBalance.toString(),
    strategyDebt: strategyDebt.toString()
  };
}

export function useVaultsDashboard() {
  return useQuery<VaultsDashboardQuery>({
    queryKey: queryKeys.vaults.list(),
    queryFn: () => fetchGraphQL(VaultsDashboardDocument, {}),
    refetchInterval: 15000
  });
}

export function useVaultHealth(address: string) {
  const normalizedAddress = address.toLowerCase();

  return useQuery<VaultHealth>({
    queryKey: queryKeys.vaults.health(normalizedAddress),
    queryFn: () => fetchVaultHealth(normalizedAddress),
    enabled: Boolean(address),
    refetchInterval: 15000,
    retry: 1
  });
}

export function useVaultsHealth(addresses: string[]) {
  return useQueries({
    queries: addresses.map((address) => {
      const normalizedAddress = address.toLowerCase();

      return {
        queryKey: queryKeys.vaults.health(normalizedAddress),
        queryFn: () => fetchVaultHealth(normalizedAddress),
        enabled: Boolean(address),
        refetchInterval: 15000,
        retry: 1
      };
    })
  });
}

export function useVaultDetail(address: string) {
  const normalizedAddress = address.toLowerCase();

  return useQuery<VaultDetailQuery>({
    queryKey: queryKeys.vaults.detail(normalizedAddress),
    queryFn: () =>
      fetchGraphQL(VaultDetailDocument, {
        id: normalizedAddress,
        vault: normalizedAddress
      }),
    enabled: Boolean(address),
    refetchInterval: 15000
  });
}
