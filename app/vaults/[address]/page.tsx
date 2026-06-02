"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle2,
  CirclePause,
  CirclePlay,
  FileText,
  LockKeyhole,
  Plus,
  Tag
} from "lucide-react";
import { useParams } from "next/navigation";
import { useWallets } from "@privy-io/react-auth";
import type { ColumnDef } from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import { createContext, FormEvent, ReactNode, useContext, useState } from "react";
import { toast } from "sonner";
import {
  createPublicClient,
  createWalletClient,
  custom,
  erc20Abi,
  http,
  isAddress,
  keccak256,
  parseUnits,
  stringToHex,
  zeroAddress,
  zeroHash,
  type Address,
  type Hex
} from "viem";
import { AuthGuard } from "@/components/auth-guard";
import { DataTable } from "@/components/data-table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import { PageContainer } from "@/components/page-container";
import { VaultAssetBackdrop, VaultIcon } from "@/components/vault-icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useVaultConfig, useVaultDetail, useVaultContract, type VaultContract } from "@/hooks/use-vaults";
import type { VaultDetailQuery } from "@/graphql/generated/graphql";
import { reportOracleAbi, strategyManagerAbi, vaultAbi } from "@/lib/abis";
import { formatAddress, formatBps, formatDate, formatInteger, formatSharePrice, formatTokenAmount } from "@/lib/format";
import { queryKeys } from "@/lib/query-keys";
import { cn } from "@/lib/utils";

type OperationType = "deposit" | "redeem";
type ExplorerEntity = "address" | "tx";
type DepositEpochRow = VaultContract["depositEpochs"][number] & {
  settledEpoch?: VaultDetailQuery["depositEpoches"][number];
};
type RedeemEpochRow = VaultContract["redeemEpochs"][number] & {
  settledEpoch?: VaultDetailQuery["redeemEpoches"][number];
};

const defaultBlockExplorerUrl = process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL ?? "https://etherscan.io";
const bytes32Pattern = /^0x[0-9a-fA-F]{64}$/;
const maxUint64 = (BigInt(1) << BigInt(64)) - BigInt(1);
const strategyConfigRole = keccak256(stringToHex("STRATEGY_CONFIG_ROLE"));
const strategyAllocatorRole = keccak256(stringToHex("STRATEGY_ALLOCATOR_ROLE"));
const ExplorerUrlContext = createContext(defaultBlockExplorerUrl);

function getExplorerUrl(value: string, entity: ExplorerEntity, explorerUrl: string) {
  return `${explorerUrl.replace(/\/$/, "")}/${entity}/${value}`;
}

function formatFeeRate(value?: string | number | null) {
  if (value === undefined || value === null) return "--";
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return String(value);

  return `${(numericValue / 10_000).toLocaleString("en-US", {
    maximumFractionDigits: 4
  })}%`;
}

function getEpochStatusBadgeClass(status: string) {
  if (status === "Open") return "border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300";
  if (status === "Closed") return "border-amber-500/30 bg-amber-500/15 text-amber-700 dark:text-amber-300";
  if (status === "Priced") return "border-sky-500/30 bg-sky-500/15 text-sky-700 dark:text-sky-300";
  if (status === "Settled") return "border-zinc-500/30 bg-zinc-500/15 text-zinc-700 dark:text-zinc-300";

  return "border-border text-foreground";
}

function getFlowStatusBadgeClass(isPaused?: boolean | null) {
  return isPaused
    ? "border-red-500/30 bg-red-500/15 text-red-700 dark:text-red-300"
    : "border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300";
}

function parseFormattedAssetUnits(value: string, decimals: number) {
  const normalizedValue = value.trim().replace(/,/g, "");
  if (!/^(?:\d+|\d*\.\d+)$/.test(normalizedValue)) return null;

  try {
    return parseUnits(normalizedValue, decimals);
  } catch {
    return null;
  }
}

function formatRoleName(name?: string | null, role?: string | null) {
  if (name) return name.replace(/_/g, " ");
  return formatAddress(role);
}

function formatAccessEventType(type: string) {
  return type.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ");
}

function ExplorerChip({
  value,
  entity = "address",
  label,
  className
}: {
  value?: string | null;
  entity?: ExplorerEntity;
  label?: string;
  className?: string;
}) {
  const explorerUrl = useContext(ExplorerUrlContext);

  if (!value) return <span className={cn("font-mono text-sm text-muted-foreground", className)}>--</span>;

  const displayValue = label ?? formatAddress(value);

  return (
    <span className={cn("inline-flex max-w-full items-center gap-0.5", className)}>
      <a
        className="inline-flex min-w-0 items-center rounded-md py-1 font-mono text-sm text-primary transition-opacity hover:opacity-80"
        href={getExplorerUrl(value, entity, explorerUrl)}
        rel="noreferrer"
        target="_blank"
        title={value}
      >
        <span className="whitespace-nowrap">{displayValue}</span>
      </a>
      <CopyButton
        className="size-4 ml-1 shrink-0"
        copiedLabel={`${entity === "tx" ? "Transaction hash" : "Address"} copied`}
        copyLabel={`Copy ${entity}`}
        value={value}
        size="icon"
        title={`Copy ${entity}`}
        variant="ghost"
        onCopied={() => toast.success(`${entity === "tx" ? "Transaction hash" : "Address"} copied`)}
      />
    </span>
  );
}

function InfoPairs({
  items
}: {
  items: {
    label: string;
    value: ReactNode;
    detail?: ReactNode;
    aside?: ReactNode;
    mono?: boolean;
    status?: "good" | "warning" | "neutral";
  }[];
}) {
  return (
    <div>
      {items.map((item) => (
        <div
          className="grid min-w-0 gap-2 border-b py-3 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[190px_minmax(0,1fr)] sm:items-start"
          key={item.label}
        >
          <div className="text-sm text-muted-foreground">{item.label}</div>
          <div
            className={cn(
              "min-w-0 break-words text-sm font-medium sm:text-right",
              item.mono && "font-mono text-sm",
              item.status === "good" && "text-primary",
              item.status === "warning" && "text-destructive"
            )}
          >
            <div className="flex min-w-0 flex-wrap items-center gap-2 sm:justify-end">
              <span className="min-w-0">{item.value}</span>
              {item.aside ? <span className="shrink-0">{item.aside}</span> : null}
            </div>
            {item.detail ? (
              <div className="mt-1 text-xs font-normal leading-relaxed text-muted-foreground sm:text-right">
                {item.detail}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

function MetricPanel({
  label,
  value,
  detail,
  featured
}: {
  label: string;
  value: ReactNode;
  detail: ReactNode;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "min-w-0 border-b border-border/70 p-5 md:border-b-0 md:border-r md:last:border-r-0",
        featured && "bg-[linear-gradient(135deg,rgba(57,152,255,0.28),rgba(16,185,129,0.14))] text-primary-foreground"
      )}
    >
      <p className={cn("text-sm", featured ? "text-primary-foreground/75" : "text-muted-foreground")}>{label}</p>
      <p className="mt-2 break-words text-3xl font-semibold tracking-normal">{value}</p>
      <p className={cn("mt-2 text-xs", featured ? "text-primary-foreground/75" : "text-muted-foreground")}>{detail}</p>
    </div>
  );
}

function AccountingMetric({
  label,
  value,
  detail,
  status
}: {
  label: string;
  value: ReactNode;
  detail: ReactNode;
  status?: ReactNode;
}) {
  return (
    <div className="min-w-0 rounded-lg border border-border/80 bg-surface p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <div className="mt-2 flex min-w-0 items-start justify-between gap-3">
        <p className="min-w-0 break-words text-2xl font-semibold tracking-normal">{value}</p>
        {status ? <div className="shrink-0 pt-1">{status}</div> : null}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{detail}</p>
    </div>
  );
}

function AccountingLine({ label, value, inset }: { label: string; value: ReactNode; inset?: boolean }) {
  return (
    <div className={cn("flex min-w-0 items-center justify-between gap-4 py-2 text-sm", inset && "pl-5")}>
      <span
        className={cn(
          "min-w-0 text-muted-foreground",
          inset && "relative before:absolute before:-left-4 before:top-1/2 before:h-px before:w-2 before:bg-border"
        )}
      >
        {label}
      </span>
      <span className="min-w-0 break-words text-right font-medium">{value}</span>
    </div>
  );
}

function getIdleReserveStatus(vaultContract?: VaultContract) {
  if (!vaultContract) return { label: "Live data", variant: "secondary" as const };

  const idle = BigInt(vaultContract.vaultIdleBalance);
  const claimable = BigInt(vaultContract.totalClaimableRedeemAssets);

  if (idle < claimable) return { label: "Blocked", variant: "destructive" as const };
  if (idle === claimable) return { label: "Reserved", variant: "secondary" as const };
  return { label: "Healthy", variant: "default" as const };
}

export default function VaultDetailPage() {
  const params = useParams<{ address: string }>();
  const address = params.address;
  const vaultConfig = useVaultConfig(address);
  const queryClient = useQueryClient();
  const { wallets } = useWallets();
  const { data, isLoading, error } = useVaultDetail(address);
  const { data: vaultContract } = useVaultContract(address);
  const publicClient = vaultConfig
    ? createPublicClient({
        chain: vaultConfig.chain,
        transport: http(vaultConfig.rpcUrl)
      })
    : null;
  const vault = data?.vault;
  const [strategyAddress, setStrategyAddress] = useState("");
  const [isAddingStrategy, setIsAddingStrategy] = useState(false);
  const [allocateStrategyAddress, setAllocateStrategyAddress] = useState("");
  const [allocateAssets, setAllocateAssets] = useState("");
  const [isAllocatingStrategy, setIsAllocatingStrategy] = useState(false);
  const [returnStrategyAddress, setReturnStrategyAddress] = useState("");
  const [returnAssets, setReturnAssets] = useState("");
  const [isReturningStrategy, setIsReturningStrategy] = useState(false);
  const [closingEpochKey, setClosingEpochKey] = useState<string | null>(null);
  const [pricingEpochKey, setPricingEpochKey] = useState<string | null>(null);
  const [settlingEpochKey, setSettlingEpochKey] = useState<string | null>(null);
  const [reportExternalValueAssets, setReportExternalValueAssets] = useState("");
  const [reportComputedAt, setReportComputedAt] = useState(() => Math.floor(Date.now() / 1000).toString());
  const [reportMetadataHash, setReportMetadataHash] = useState("");
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [isTogglingPause, setIsTogglingPause] = useState(false);
  const [minDepositAssets, setMinDepositAssets] = useState("");
  const [minRedeemShares, setMinRedeemShares] = useState("");
  const [isUpdatingLimits, setIsUpdatingLimits] = useState(false);

  const assetSymbol = vault?.asset.symbol ?? "asset";
  const assetDecimals = vault?.asset.decimals ?? 18;
  const idleReserveStatus = getIdleReserveStatus(vaultContract);
  const supportsAsyncDeposits = vault?.vaultTypeName.toLowerCase().includes("async deposit") ?? false;
  const formatAssetAmount = (value?: string | number | null) =>
    value === undefined || value === null ? "--" : `${formatTokenAmount(value, assetDecimals)} ${assetSymbol}`;
  const strategyManagerAddress = vaultContract?.strategyManager ?? vault?.strategyManager.address ?? "";
  const hasStrategyManager = isAddress(strategyManagerAddress) && strategyManagerAddress.toLowerCase() !== zeroAddress;

  async function requireStrategyManagerRole(role: Hex, account: Address, message: string) {
    if (!publicClient || !hasStrategyManager) return false;

    const hasRole = await publicClient.readContract({
      address: strategyManagerAddress as Address,
      abi: strategyManagerAbi,
      functionName: "hasRole",
      args: [role, account]
    });

    if (!hasRole) {
      toast.error(message);
      return false;
    }

    return true;
  }

  async function handleToggleVaultPause() {
    if (!vault || !vaultConfig || vaultContract === undefined) return;

    const wallet = wallets[0];
    if (!wallet) {
      toast.error("Connect a wallet before changing the vault pause state.");
      return;
    }

    const functionName = vaultContract.paused ? "unpause" : "pause";

    try {
      setIsTogglingPause(true);
      await wallet.switchChain(vaultConfig.chain.id);
      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: wallet.address as Address,
        chain: vaultConfig.chain,
        transport: custom(provider)
      });
      const hash = await walletClient.writeContract({
        address: vault.address as Address,
        abi: vaultAbi,
        functionName
      });

      toast.success(`Vault ${vaultContract.paused ? "unpause" : "pause"} transaction submitted.`, {
        description: hash
      });
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.detail(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.contract(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.list() })
      ]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Vault pause transaction failed.");
    } finally {
      setIsTogglingPause(false);
    }
  }

  async function handleLimitsSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!vault || !vaultConfig || !vaultContract) return;

    const parsedMinDepositAssets =
      minDepositAssets.trim() === "" ? BigInt(vaultContract.minDepositAssets) : parseFormattedAssetUnits(minDepositAssets, assetDecimals);
    if (parsedMinDepositAssets === null) {
      toast.error(`Enter minimum deposit as a ${assetSymbol} amount.`);
      return;
    }

    const parsedMinRedeemShares =
      minRedeemShares.trim() === "" ? BigInt(vaultContract.minRedeemShares) : parseFormattedAssetUnits(minRedeemShares, 18);
    if (parsedMinRedeemShares === null) {
      toast.error(`Enter minimum redeem as a ${vault.symbol} share amount.`);
      return;
    }

    if (parsedMinDepositAssets < BigInt(0) || parsedMinRedeemShares < BigInt(0)) {
      toast.error("Minimum limits cannot be negative.");
      return;
    }

    const wallet = wallets[0];
    if (!wallet) {
      toast.error("Connect a wallet before updating vault limits.");
      return;
    }

    try {
      setIsUpdatingLimits(true);
      await wallet.switchChain(vaultConfig.chain.id);
      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: wallet.address as Address,
        chain: vaultConfig.chain,
        transport: custom(provider)
      });
      const hash = await walletClient.writeContract({
        address: vault.address as Address,
        abi: vaultAbi,
        functionName: "setLimits",
        args: [
          BigInt(vaultContract.maxTotalAssets),
          BigInt(vaultContract.maxPendingDepositAssets),
          parsedMinDepositAssets,
          parsedMinRedeemShares
        ]
      });

      toast.success("Limit update transaction submitted.", {
        description: hash
      });
      setMinDepositAssets("");
      setMinRedeemShares("");
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.detail(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.contract(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.list() })
      ]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Limit update transaction failed.");
    } finally {
      setIsUpdatingLimits(false);
    }
  }

  async function handleAddStrategySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!vault || !vaultConfig) return;

    const normalizedStrategyAddress = strategyAddress.trim();
    if (!isAddress(normalizedStrategyAddress)) {
      toast.error("Enter a valid strategy address.");
      return;
    }

    if (!hasStrategyManager) {
      toast.error("Strategy manager is not configured on this vault.");
      return;
    }

    const wallet = wallets[0];
    if (!wallet) {
      toast.error("Connect a wallet before adding a strategy.");
      return;
    }

    try {
      setIsAddingStrategy(true);
      await wallet.switchChain(vaultConfig.chain.id);
      const walletAddress = wallet.address as Address;
      const hasConfigRole = await requireStrategyManagerRole(
        strategyConfigRole,
        walletAddress,
        "Connected wallet needs STRATEGY_CONFIG_ROLE on the strategy manager."
      );
      if (!hasConfigRole) return;

      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: walletAddress,
        chain: vaultConfig.chain,
        transport: custom(provider)
      });
      const hash = await walletClient.writeContract({
        address: strategyManagerAddress as Address,
        abi: strategyManagerAbi,
        functionName: "addStrategy",
        args: [normalizedStrategyAddress as Address]
      });

      toast.success("Add strategy transaction submitted.", {
        description: hash
      });
      setStrategyAddress("");
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.detail(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.contract(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.list() })
      ]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Add strategy transaction failed.");
    } finally {
      setIsAddingStrategy(false);
    }
  }

  async function handleAllocateSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!vault || !vaultConfig) return;

    const normalizedStrategyAddress = allocateStrategyAddress.trim();
    if (!isAddress(normalizedStrategyAddress)) {
      toast.error("Enter a valid strategy address.");
      return;
    }

    if (!hasStrategyManager) {
      toast.error("Strategy manager is not configured on this vault.");
      return;
    }

    const parsedAssets = parseFormattedAssetUnits(allocateAssets, assetDecimals);
    if (parsedAssets === null) {
      toast.error(`Enter assets as a ${assetSymbol} amount.`);
      return;
    }
    const assets = parsedAssets;

    if (assets <= BigInt(0)) {
      toast.error("Assets must be greater than zero.");
      return;
    }

    if (vaultContract && assets > BigInt(vaultContract.availableIdleAssetsForStrategy)) {
      toast.error("Assets exceed available idle funds.");
      return;
    }

    const wallet = wallets[0];
    if (!wallet) {
      toast.error("Connect a wallet before transferring funds.");
      return;
    }

    try {
      setIsAllocatingStrategy(true);
      await wallet.switchChain(vaultConfig.chain.id);
      const walletAddress = wallet.address as Address;
      const hasAllocatorRole = await requireStrategyManagerRole(
        strategyAllocatorRole,
        walletAddress,
        "Connected wallet needs STRATEGY_ALLOCATOR_ROLE on the strategy manager."
      );
      if (!hasAllocatorRole) return;

      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: walletAddress,
        chain: vaultConfig.chain,
        transport: custom(provider)
      });
      const hash = await walletClient.writeContract({
        address: strategyManagerAddress as Address,
        abi: strategyManagerAbi,
        functionName: "allocate",
        args: [normalizedStrategyAddress as Address, assets]
      });

      toast.success("Transfer to strategy transaction submitted.", {
        description: hash
      });
      setAllocateStrategyAddress("");
      setAllocateAssets("");
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.detail(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.contract(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.list() })
      ]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Transfer to strategy transaction failed.");
    } finally {
      setIsAllocatingStrategy(false);
    }
  }

  async function handleReturnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!vault || !vaultConfig || !publicClient) return;

    const normalizedStrategyAddress = returnStrategyAddress.trim();
    if (!isAddress(normalizedStrategyAddress)) {
      toast.error("Enter a valid strategy address.");
      return;
    }

    if (!hasStrategyManager) {
      toast.error("Strategy manager is not configured on this vault.");
      return;
    }

    const parsedAssets = parseFormattedAssetUnits(returnAssets, assetDecimals);
    if (parsedAssets === null) {
      toast.error(`Enter assets as a ${assetSymbol} amount.`);
      return;
    }
    const assets = parsedAssets;

    if (assets <= BigInt(0)) {
      toast.error("Assets must be greater than zero.");
      return;
    }

    const totalStrategyAllocation = BigInt(vaultContract?.strategyAllocation ?? vault.strategyManager.totalAllocation);
    if (assets > totalStrategyAllocation) {
      toast.error("Assets exceed total strategy allocation.");
      return;
    }

    const wallet = wallets[0];
    if (!wallet) {
      toast.error("Connect a wallet before returning funds.");
      return;
    }

    const walletAddress = wallet.address as Address;
    const managerAddress = strategyManagerAddress as Address;
    const assetAddress = (vaultContract?.asset ?? vault.asset.address) as Address;

    try {
      setIsReturningStrategy(true);
      await wallet.switchChain(vaultConfig.chain.id);
      const hasAllocatorRole = await requireStrategyManagerRole(
        strategyAllocatorRole,
        walletAddress,
        "Connected wallet needs STRATEGY_ALLOCATOR_ROLE on the strategy manager."
      );
      if (!hasAllocatorRole) return;

      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: walletAddress,
        chain: vaultConfig.chain,
        transport: custom(provider)
      });

      const allowance = await publicClient.readContract({
        address: assetAddress,
        abi: erc20Abi,
        functionName: "allowance",
        args: [normalizedStrategyAddress as Address, managerAddress]
      });

      if (allowance < assets) {
        if (walletAddress.toLowerCase() !== normalizedStrategyAddress.toLowerCase()) {
          toast.error("Connect the strategy wallet to approve returned assets.");
          return;
        }

        const approvalHash = await walletClient.writeContract({
          address: assetAddress,
          abi: erc20Abi,
          functionName: "approve",
          args: [managerAddress, assets]
        });

        toast.success("Approval transaction submitted.", {
          description: approvalHash
        });
        await publicClient.waitForTransactionReceipt({ hash: approvalHash });
      }

      const returnHash = await walletClient.writeContract({
        address: managerAddress,
        abi: strategyManagerAbi,
        functionName: "returnAssets",
        args: [normalizedStrategyAddress as Address, assets]
      });

      toast.success("Return from strategy transaction submitted.", {
        description: returnHash
      });
      setReturnStrategyAddress("");
      setReturnAssets("");
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.detail(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.contract(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.list() })
      ]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Return from strategy transaction failed.");
    } finally {
      setIsReturningStrategy(false);
    }
  }

  async function handleCloseEpoch(type: OperationType, epochIdValue: string) {
    if (!vault || !vaultConfig) return;

    const functionName = type === "deposit" ? "closeDepositEpoch" : "closeRedeemEpoch";

    let epochId: bigint;
    try {
      epochId = BigInt(epochIdValue);
    } catch {
      toast.error("Enter epoch ID as a raw integer.");
      return;
    }

    if (epochId < BigInt(0)) {
      toast.error("Epoch ID cannot be negative.");
      return;
    }

    const wallet = wallets[0];
    if (!wallet) {
      toast.error("Connect a wallet before closing an epoch.");
      return;
    }

    try {
      setClosingEpochKey(`${type}:${epochIdValue}`);
      await wallet.switchChain(vaultConfig.chain.id);
      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: wallet.address as Address,
        chain: vaultConfig.chain,
        transport: custom(provider)
      });
      const hash = await walletClient.writeContract({
        address: vault.address as Address,
        abi: vaultAbi,
        functionName,
        args: [epochId]
      });

      toast.success("Close epoch transaction submitted.", {
        description: hash
      });
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.detail(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.contract(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.list() })
      ]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Close epoch transaction failed.");
    } finally {
      setClosingEpochKey(null);
    }
  }

  async function handleSettleEpoch(type: OperationType, epochIdValue: string) {
    if (!vault || !vaultConfig) return;

    const functionName = type === "deposit" ? "settleDepositEpoch" : "settleRedeemEpoch";

    let epochId: bigint;
    try {
      epochId = BigInt(epochIdValue);
    } catch {
      toast.error("Enter epoch ID as a raw integer.");
      return;
    }

    if (epochId < BigInt(0)) {
      toast.error("Epoch ID cannot be negative.");
      return;
    }

    const wallet = wallets[0];
    if (!wallet) {
      toast.error("Connect a wallet before settling an epoch.");
      return;
    }

    try {
      setSettlingEpochKey(`${type}:${epochIdValue}`);
      await wallet.switchChain(vaultConfig.chain.id);
      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: wallet.address as Address,
        chain: vaultConfig.chain,
        transport: custom(provider)
      });
      const hash = await walletClient.writeContract({
        address: vault.address as Address,
        abi: vaultAbi,
        functionName,
        args: [epochId]
      });

      toast.success("Settle epoch transaction submitted.", {
        description: hash
      });
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.detail(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.contract(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.list() })
      ]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Settle epoch transaction failed.");
    } finally {
      setSettlingEpochKey(null);
    }
  }

  async function handlePriceRedeemEpoch(epochIdValue: string) {
    if (!vault || !vaultConfig) return;

    let epochId: bigint;
    try {
      epochId = BigInt(epochIdValue);
    } catch {
      toast.error("Enter epoch ID as a raw integer.");
      return;
    }

    if (epochId < BigInt(0)) {
      toast.error("Epoch ID cannot be negative.");
      return;
    }

    const wallet = wallets[0];
    if (!wallet) {
      toast.error("Connect a wallet before pricing an epoch.");
      return;
    }

    try {
      setPricingEpochKey(`redeem:${epochIdValue}`);
      await wallet.switchChain(vaultConfig.chain.id);
      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: wallet.address as Address,
        chain: vaultConfig.chain,
        transport: custom(provider)
      });
      const hash = await walletClient.writeContract({
        address: vault.address as Address,
        abi: vaultAbi,
        functionName: "priceRedeemEpoch",
        args: [epochId]
      });

      toast.success("Price epoch transaction submitted.", {
        description: hash
      });
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.detail(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.contract(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.list() })
      ]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Price epoch transaction failed.");
    } finally {
      setPricingEpochKey(null);
    }
  }

  async function handleReportSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!vault || !vaultConfig) return;

    if (!isAddress(vault.valuationOracle.address)) {
      toast.error("Report oracle address is invalid.");
      return;
    }

    const parsedExternalValueAssets = parseFormattedAssetUnits(reportExternalValueAssets, assetDecimals);
    if (parsedExternalValueAssets === null) {
      toast.error(`Enter external account value as a ${assetSymbol} amount.`);
      return;
    }
    const externalValueAssets = parsedExternalValueAssets;

    if (externalValueAssets < BigInt(0)) {
      toast.error("External account value cannot be negative.");
      return;
    }

    let computedAt: bigint;
    try {
      computedAt = BigInt(reportComputedAt.trim());
    } catch {
      toast.error("Enter computed at as a Unix timestamp.");
      return;
    }

    if (computedAt < BigInt(0) || computedAt > maxUint64) {
      toast.error("Computed at must fit in uint64.");
      return;
    }

    const now = BigInt(Math.floor(Date.now() / 1000));
    if (computedAt > now) {
      toast.error("Computed at cannot be in the future.");
      return;
    }

    const maxReportAgeSeconds = BigInt(vault.valuationOracle.maxReportAge);
    if (maxReportAgeSeconds > BigInt(0) && computedAt + maxReportAgeSeconds < now) {
      toast.error("Computed at is older than the oracle max report age.");
      return;
    }

    const normalizedMetadataHash = reportMetadataHash.trim();
    const metadataHash = normalizedMetadataHash || zeroHash;

    if (metadataHash && !bytes32Pattern.test(metadataHash)) {
      toast.error("Metadata hash must be a 32-byte hex value.");
      return;
    }

    const wallet = wallets[0];
    if (!wallet) {
      toast.error("Connect a wallet before submitting a report.");
      return;
    }

    try {
      setIsSubmittingReport(true);
      await wallet.switchChain(vaultConfig.chain.id);
      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: wallet.address as Address,
        chain: vaultConfig.chain,
        transport: custom(provider)
      });
      const hash = await walletClient.writeContract({
        address: vault.valuationOracle.address as Address,
        abi: reportOracleAbi,
        functionName: "submitReport",
        args: [externalValueAssets, computedAt, metadataHash as Hex]
      });

      toast.success("Report transaction submitted.", {
        description: hash
      });
      setReportExternalValueAssets("");
      setReportMetadataHash("");
      setReportComputedAt(Math.floor(Date.now() / 1000).toString());
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.detail(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.contract(vault.address.toLowerCase()) }),
        queryClient.invalidateQueries({ queryKey: queryKeys.vaults.list() })
      ]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Report transaction failed.");
    } finally {
      setIsSubmittingReport(false);
    }
  }

  if (isLoading) {
    return (
      <PageContainer>
        <Skeleton className="h-32" />
        <Skeleton className="h-96" />
      </PageContainer>
    );
  }

  if (!vaultConfig) {
    return (
      <PageContainer className="min-h-0">
        <Alert>
          <AlertTitle>Vault not configured</AlertTitle>
          <AlertDescription>Add {address} to the configured vault list before managing it.</AlertDescription>
        </Alert>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer className="min-h-0">
        <Alert variant="destructive">
          <AlertTitle>Unable to load vault</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      </PageContainer>
    );
  }

  if (!vault) {
    return (
      <PageContainer className="min-h-0">
        <Alert>
          <AlertTitle>Vault not found</AlertTitle>
          <AlertDescription>No indexed vault exists for {address}.</AlertDescription>
        </Alert>
      </PageContainer>
    );
  }

  const liveTvl = vaultContract?.totalAssets ?? vault.totalAssets;
  const liveTotalSupply = vaultContract?.totalSupply ?? vault.totalSupply;
  const isVaultPaused = vaultContract?.paused ?? false;
  const hasVaultPauseState = vaultContract !== undefined;
  const VaultPauseIcon = isVaultPaused ? CirclePlay : CirclePause;
  const vaultPauseActionLabel = isTogglingPause ? "Submitting..." : isVaultPaused ? "Unpause Vault" : "Pause";
  const feeManager = vaultContract?.feeManager;
  const feeValues = {
    entryFeeRate: feeManager?.entryFeeRate ?? vault.depositFeeRate,
    exitFeeRate: feeManager?.exitFeeRate ?? vault.redeemFeeRate,
    performanceFeeRate: feeManager?.performanceFeeRate ?? vault.performanceFeeRate,
    entryProtocolShareRate: feeManager?.entryProtocolShareRate ?? vault.protocolFeeRate,
    exitProtocolShareRate: feeManager?.exitProtocolShareRate ?? vault.protocolFeeRate,
    managementProtocolShareRate: feeManager?.managementProtocolShareRate ?? vault.protocolFeeRate,
    performanceProtocolShareRate: feeManager?.performanceProtocolShareRate ?? vault.protocolFeeRate,
    managementFeeRate: feeManager?.managementFeeRate ?? vault.managementFeeRate,
    feeRecipient: feeManager?.feeRecipient ?? vault.feeRecipient,
    protocolFeeRecipient: feeManager?.protocolFeeRecipient ?? vault.protocolFeeRecipient
  };
  const depositEpochCards = vaultContract?.depositEpochs ?? [];
  const redeemEpochCards = vaultContract?.redeemEpochs ?? [];
  const latestReport = data.valuationReports[0];
  const latestReportTimestamp = latestReport
    ? Number(latestReport.submittedAt)
    : Number(vault.valuationOracle.updatedAtTimestamp);
  const maxReportAge = Number(vault.valuationOracle.maxReportAge);
  const reportAgeSeconds = Number.isFinite(latestReportTimestamp)
    ? Math.max(0, Math.floor(Date.now() / 1000) - latestReportTimestamp)
    : undefined;
  const isReportFresh =
    reportAgeSeconds !== undefined && Number.isFinite(maxReportAge) ? reportAgeSeconds <= maxReportAge : undefined;
  const formatDuration = (seconds?: number) => {
    if (seconds === undefined) return "--";
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
    return `${Math.floor(seconds / 86400)}d`;
  };
  const formatRedeemEpochValue = (shares?: string, price?: string) => {
    if (!shares || !price) return "--";

    const shareAmount = BigInt(shares);
    const sharePrice = BigInt(price);
    if (shareAmount === BigInt(0) || sharePrice === BigInt(0)) return "--";

    const assetUnit = BigInt(10) ** BigInt(assetDecimals);
    const shareUnit = BigInt(10) ** BigInt(18);
    const priceUnit = BigInt(10) ** BigInt(18);
    const estimatedAssets = (shareAmount * sharePrice * assetUnit) / (shareUnit * priceUnit);

    return formatAssetAmount(estimatedAssets.toString());
  };
  const getRedeemEpochPrice = (epoch: VaultContract["redeemEpochs"][number]) =>
    epoch.settledAssetsPerShare !== "0" ? epoch.settledAssetsPerShare : vaultContract?.trustedAssetsPerShare;
  const getRedeemEpochValue = (epoch: VaultContract["redeemEpochs"][number], price?: string) => {
    if (epoch.pricedAssets !== "0") return formatAssetAmount(epoch.pricedAssets);
    return formatRedeemEpochValue(epoch.totalPendingShares, price);
  };
  const getSettledRedeemEpoch = (epochId?: string) =>
    epochId ? data.redeemEpoches.find((epoch) => String(epoch.epochId) === epochId) : undefined;
  const depositEpochRows: DepositEpochRow[] = depositEpochCards.map((epoch) => ({
    ...epoch,
    settledEpoch: data.depositEpoches.find((settled) => String(settled.epochId) === epoch.epochId)
  }));
  const redeemEpochRows: RedeemEpochRow[] = redeemEpochCards.map((epoch) => ({
    ...epoch,
    settledEpoch: getSettledRedeemEpoch(epoch.epochId)
  }));
  const renderEpochActionCell = ({
    type,
    epochId,
    status,
    isLatestEpoch
  }: {
    type: OperationType;
    epochId: string;
    status: string;
    isLatestEpoch: boolean;
  }) => {
    const actionKey = `${type}:${epochId}`;
    const canClose = isLatestEpoch && status === "Open";
    const canPrice = type === "redeem" && status === "Closed";
    const canSettle = type === "deposit" ? status === "Closed" : status === "Priced";

    if (!canClose && !canPrice && !canSettle) {
      return <span className="text-sm text-muted-foreground">--</span>;
    }

    return (
      <div className="flex flex-wrap items-center gap-2">
        {canClose ? (
          <AuthGuard buttonClassName="w-auto">
            <Button
              disabled={closingEpochKey !== null}
              onClick={() => handleCloseEpoch(type, epochId)}
              size="xs"
              type="button"
              variant="destructive"
            >
              <LockKeyhole />
              {closingEpochKey === actionKey ? "Closing..." : "Close"}
            </Button>
          </AuthGuard>
        ) : null}
        {canPrice ? (
          <AuthGuard buttonClassName="w-auto">
            <Button
              disabled={pricingEpochKey !== null}
              onClick={() => handlePriceRedeemEpoch(epochId)}
              size="xs"
              type="button"
              variant="outline"
            >
              <Tag />
              {pricingEpochKey === actionKey ? "Pricing..." : "Price"}
            </Button>
          </AuthGuard>
        ) : null}
        {canSettle ? (
          <AuthGuard buttonClassName="w-auto">
            <Button
              disabled={settlingEpochKey !== null}
              onClick={() => handleSettleEpoch(type, epochId)}
              size="xs"
              type="button"
              variant="default"
            >
              <CheckCircle2 />
              {settlingEpochKey === actionKey ? "Settling..." : "Settle"}
            </Button>
          </AuthGuard>
        ) : null}
      </div>
    );
  };
  const depositEpochColumns: ColumnDef<DepositEpochRow>[] = [
    {
      accessorKey: "epochId",
      header: "Epoch",
      cell: ({ row }) => <div className="font-medium">#{row.original.epochId}</div>
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge variant="outline" className={getEpochStatusBadgeClass(row.original.status)}>
          {row.original.status}
        </Badge>
      )
    },
    {
      accessorKey: "totalPendingAssets",
      header: "Amount",
      cell: ({ row }) => {
        const assets =
          row.original.settledEpoch && row.original.status === "Settled"
            ? row.original.settledEpoch.assets
            : row.original.totalPendingAssets;

        return (
          <div className="space-y-1">
            <div>{formatAssetAmount(assets)}</div>
            <div className="text-xs text-muted-foreground">
              {row.original.status === "Settled" ? "settled assets" : "pending assets"}
            </div>
          </div>
        );
      }
    },
    {
      id: "minted",
      header: "Minted",
      cell: ({ row }) =>
        row.original.settledEpoch ? `${formatTokenAmount(row.original.settledEpoch.shares, 18)} ${vault.symbol}` : "--"
    },
    {
      id: "priceReport",
      header: "Price / Report",
      cell: ({ row }) => (
        <div className="space-y-1">
          <div>
            {row.original.settledAssetsPerShare !== "0"
              ? formatSharePrice(row.original.settledAssetsPerShare, assetDecimals, { scale: "oracle" })
              : "--"}
          </div>
          <div className="text-xs text-muted-foreground">
            {row.original.reportId !== "0" ? `Report #${row.original.reportId}` : "No report"}
          </div>
        </div>
      )
    },
    {
      id: "fees",
      header: "Fees",
      cell: ({ row }) => (
        <div className="space-y-1">
          <div>Entry {formatFeeRate(row.original.entryFeeRate)}</div>
          <div className="text-xs text-muted-foreground">Protocol {formatFeeRate(row.original.protocolFeeRate)}</div>
        </div>
      )
    },
    {
      id: "dates",
      header: "Dates",
      cell: ({ row }) => (
        <div className="space-y-1 text-xs">
          <div>Open {row.original.openedAt !== "0" ? formatDate(row.original.openedAt) : "--"}</div>
          <div className="text-muted-foreground">
            Close {row.original.closedAt !== "0" ? formatDate(row.original.closedAt) : "--"}
          </div>
          <div className="text-muted-foreground">
            Settle {row.original.settledAt !== "0" ? formatDate(row.original.settledAt) : "--"}
          </div>
        </div>
      )
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) =>
        renderEpochActionCell({
          type: "deposit",
          epochId: row.original.epochId,
          status: row.original.status,
          isLatestEpoch: row.original.epochId === vaultContract?.currentDepositEpochId
        })
    }
  ];
  const redeemEpochColumns: ColumnDef<RedeemEpochRow>[] = [
    {
      accessorKey: "epochId",
      header: "Epoch",
      cell: ({ row }) => <div className="font-medium">#{row.original.epochId}</div>
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge variant="outline" className={getEpochStatusBadgeClass(row.original.status)}>
          {row.original.status}
        </Badge>
      )
    },
    {
      accessorKey: "totalPendingShares",
      header: "Shares",
      cell: ({ row }) => {
        const shares =
          row.original.settledEpoch && row.original.status === "Settled"
            ? row.original.settledEpoch.shares
            : row.original.status === "Settled"
              ? row.original.pricedNetShares
              : row.original.totalPendingShares;

        return (
          <div className="space-y-1">
            <div>
              {formatTokenAmount(shares, 18)} {vault.symbol}
            </div>
            <div className="text-xs text-muted-foreground">
              {row.original.status === "Open"
                ? "pending shares"
                : row.original.status === "Settled" && !row.original.settledEpoch
                  ? "settled net shares"
                  : "shares"}
            </div>
          </div>
        );
      }
    },
    {
      id: "value",
      header: "Value",
      cell: ({ row }) => {
        const price = getRedeemEpochPrice(row.original);

        return (
          <div className="space-y-1">
            <div>{getRedeemEpochValue(row.original, price)}</div>
            <div className="text-xs text-muted-foreground">
              {row.original.status === "Priced" || row.original.status === "Settled"
                ? "redeemed value"
                : "estimated value"}
            </div>
          </div>
        );
      }
    },
    {
      id: "priceReport",
      header: "Price / Report",
      cell: ({ row }) => (
        <div className="space-y-1">
          <div>
            {row.original.settledEpoch
              ? formatSharePrice(row.original.settledEpoch.assetsPerShare, assetDecimals, { scale: "oracle" })
              : row.original.settledAssetsPerShare !== "0"
                ? formatSharePrice(row.original.settledAssetsPerShare, assetDecimals, { scale: "oracle" })
                : "--"}
          </div>
          <div className="text-xs text-muted-foreground">
            {row.original.reportId !== "0" ? `Report #${row.original.reportId}` : "No report"}
          </div>
        </div>
      )
    },
    {
      id: "fees",
      header: "Fees",
      cell: ({ row }) => (
        <div className="space-y-1">
          <div>Redeem {formatFeeRate(row.original.redeemFeeRate)}</div>
          <div className="text-xs text-muted-foreground">Protocol {formatFeeRate(row.original.protocolFeeRate)}</div>
        </div>
      )
    },
    {
      id: "dates",
      header: "Dates",
      cell: ({ row }) => (
        <div className="space-y-1 text-xs">
          <div>Open {row.original.openedAt !== "0" ? formatDate(row.original.openedAt) : "--"}</div>
          <div className="text-muted-foreground">
            Close {row.original.closedAt !== "0" ? formatDate(row.original.closedAt) : "--"}
          </div>
          <div className="text-muted-foreground">
            Price {row.original.pricedAt !== "0" ? formatDate(row.original.pricedAt) : "--"}
          </div>
          <div className="text-muted-foreground">
            Settle {row.original.settledAt !== "0" ? formatDate(row.original.settledAt) : "--"}
          </div>
        </div>
      )
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) =>
        renderEpochActionCell({
          type: "redeem",
          epochId: row.original.epochId,
          status: row.original.status,
          isLatestEpoch: row.original.epochId === vaultContract?.currentRedeemEpochId
        })
    }
  ];

  return (
    <ExplorerUrlContext.Provider value={vaultConfig.explorerUrl}>
      <>
        <section className="relative overflow-hidden border-b border-border/80 bg-[#020713] text-white shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
          <VaultAssetBackdrop symbol={assetSymbol} />
          <div className="container relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-8 sm:pb-10">
              <div className="flex min-w-0 items-start gap-4">
                <div className="min-w-0 space-y-3">
                  <VaultIcon symbol={vault.symbol} name={vault.name} />
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="break-words text-3xl font-semibold tracking-normal text-white sm:text-3xl">
                      {vault.name}
                    </h1>
                    {/*<Badge variant={vault.active ? "default" : "secondary"}>{vault.active ? "Active" : "Inactive"}</Badge>*/}
                    {/*<Badge variant="outline" className="border-white/15 bg-white/5 text-white/85">{vaultTypeName}</Badge>*/}
                    {/*<VaultSymbolTag symbol={vault.symbol} />*/}
                  </div>
                  <ExplorerChip value={vault.address} />
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2">
                <AuthGuard
                  buttonClassName={cn(
                    "h-20 min-w-36 flex-col gap-2 rounded-2xl border-white/20 px-6 py-4 text-base font-semibold text-white shadow-[0_18px_36px_rgba(0,0,0,0.24)] hover:text-white",
                    isVaultPaused
                      ? "bg-emerald-500/20 hover:bg-emerald-500/30"
                      : "bg-red-500/20 hover:bg-red-500/30"
                  )}
                >
                  <Button
                    className={cn(
                      "h-20 min-w-36 flex-col gap-2 rounded-2xl border-white/20 px-6 py-4 text-base font-semibold text-white shadow-[0_18px_36px_rgba(0,0,0,0.24)] hover:text-white",
                      isVaultPaused
                        ? "bg-emerald-500/20 hover:bg-emerald-500/30"
                        : "bg-red-500/20 hover:bg-red-500/30"
                    )}
                    disabled={!hasVaultPauseState || isTogglingPause}
                    onClick={handleToggleVaultPause}
                    type="button"
                    variant="outline"
                  >
                    <VaultPauseIcon className="size-7" />
                    <span className="leading-none">{vaultPauseActionLabel}</span>
                  </Button>
                </AuthGuard>
              </div>
            </div>
            <div className="relative grid overflow-hidden rounded-lg border border-white/10 bg-[#07101d]/80 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur md:grid-cols-4">
              <MetricPanel
                featured
                label="TVL"
                value={`${formatTokenAmount(liveTvl, assetDecimals)} ${assetSymbol}`}
                detail="Live totalAssets()"
              />
              <MetricPanel
                label="Share Price"
                value={formatSharePrice(vaultContract?.trustedAssetsPerShare ?? vault.latestSharePrice, assetDecimals, {
                  totalAssets: liveTvl,
                  totalSupply: liveTotalSupply
                })}
                detail={`Report #${vaultContract?.cachedActiveNav.reportId ?? vault.valuationOracle.latestReportId}`}
              />
              <MetricPanel
                label="Available Idle for Strategy"
                value={formatAssetAmount(vaultContract?.availableIdleAssetsForStrategy)}
                detail={`Safe to allocate after redeem${supportsAsyncDeposits ? " and deposit" : ""} reserves`}
              />
              <MetricPanel
                label="Net Flow"
                value={`${formatTokenAmount(vault.netFlowAssets, assetDecimals)} ${assetSymbol}`}
                detail="Deposits minus withdrawals"
              />
            </div>
          </div>
        </section>

        <PageContainer className="min-h-0">
          <section className="min-w-0 space-y-6">
            <section className="min-w-0">
              <Tabs defaultValue="overview">
                <div className="mb-8 overflow-x-auto overflow-y-hidden border-b">
                  <TabsList className="[&_button]:after:hidden" variant={"line"}>
                    <TabsTrigger value="overview" className={"pl-0"}>
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="epochs">Epochs</TabsTrigger>
                    <TabsTrigger value="strategies">Strategies</TabsTrigger>
                    <TabsTrigger value="limits">Limits</TabsTrigger>
                    <TabsTrigger value="oracle">Oracle</TabsTrigger>
                    <TabsTrigger value="fees">Fees</TabsTrigger>
                    <TabsTrigger value="access">Access</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="overview">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold tracking-normal">Vault Overview</h2>
                      <p className="text-sm text-muted-foreground">
                        Live vault health, idle liquidity, active NAV, and share supply.
                      </p>
                    </div>

                    <div className="grid gap-4 xl:grid-cols-3">
                      <AccountingMetric
                        label="Vault Idle Balance"
                        value={formatAssetAmount(vaultContract?.vaultIdleBalance)}
                        detail="Raw asset balance"
                      />
                      <AccountingMetric
                        label="Claimable Redeem Reserve"
                        value={formatAssetAmount(vaultContract?.totalClaimableRedeemAssets)}
                        detail="Assets reserved for settled redeem claims"
                      />
                      <AccountingMetric
                        label="Total Supply"
                        value={`${formatTokenAmount(vaultContract?.totalSupply ?? vault.totalSupply, 18)} ${vault.symbol}`}
                        detail="Outstanding vault shares"
                      />
                    </div>

                    <div className="grid gap-4 xl:grid-cols-3">
                      <AccountingMetric
                        label="Active NAV"
                        value={formatAssetAmount(vaultContract?.activeNavAssets)}
                        detail="Current usable NAV"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <section className="rounded-lg border bg-background p-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <h3 className="text-base font-medium">Asset Breakdown</h3>
                          <span className="text-xs text-muted-foreground">Live contract reads</span>
                        </div>
                        <AccountingLine
                          label="Vault Asset Balance"
                          value={formatAssetAmount(vaultContract?.vaultIdleBalance)}
                        />
                        <AccountingLine
                          inset
                          label="Claimable Redeem Reserve"
                          value={formatAssetAmount(vaultContract?.totalClaimableRedeemAssets)}
                        />
                        {supportsAsyncDeposits ? (
                          <AccountingLine
                            inset
                            label="Pending Deposit Assets"
                            value={formatAssetAmount(vaultContract?.totalPendingDepositAssets)}
                          />
                        ) : null}
                        <AccountingLine
                          inset
                          label="Estimated Pending Redeem Value"
                          value={formatAssetAmount(vaultContract?.estimatedPendingRedeemAssets)}
                        />
                        <AccountingLine
                          inset
                          label="Available Idle for Strategy"
                          value={formatAssetAmount(vaultContract?.availableIdleAssetsForStrategy)}
                        />
                        <Separator className="my-2" />
                        <AccountingLine
                          label="Strategy Allocation"
                          value={formatAssetAmount(vaultContract?.strategyAllocation)}
                        />
                        <AccountingLine label="Active NAV" value={formatAssetAmount(vaultContract?.activeNavAssets)} />
                      </section>

                      <section className="rounded-lg border bg-background p-4">
                        <h3 className="mb-3 text-base font-medium">Share Supply</h3>
                        <AccountingLine
                          label="Total Supply"
                          value={`${formatTokenAmount(vaultContract?.totalSupply ?? vault.totalSupply, 18)} ${vault.symbol}`}
                        />
                        <AccountingLine
                          label="Active Share Supply"
                          value={`${formatTokenAmount(vaultContract?.activeShareSupply, 18)} ${vault.symbol}`}
                        />
                        <AccountingLine
                          label="Claimable Redeem Net Shares"
                          value={`${formatTokenAmount(vaultContract?.totalClaimableRedeemNetShares, 18)} ${vault.symbol}`}
                        />
                        <AccountingLine
                          label="Pending Redeem Shares"
                          value={`${formatTokenAmount(vaultContract?.pendingRedeemShares, 18)} ${vault.symbol}`}
                        />
                      </section>

                      <section className="rounded-lg border bg-background p-4">
                        <h3 className="mb-3 text-base font-medium">Cached NAV</h3>
                        <AccountingLine
                          label="Cached NAV Assets"
                          value={formatAssetAmount(vaultContract?.cachedActiveNav.assets)}
                        />
                        <AccountingLine
                          label="Cached NAV Report ID"
                          value={vaultContract ? `#${vaultContract.cachedActiveNav.reportId}` : "--"}
                        />
                        <AccountingLine
                          label="Cached NAV Oracle"
                          value={<ExplorerChip value={vaultContract?.cachedActiveNav.oracle} />}
                        />
                      </section>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="epochs">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold tracking-normal">Epochs</h2>
                    </div>

                    <div className={cn("grid gap-4", supportsAsyncDeposits && "xl:grid-cols-2")}>
                      {supportsAsyncDeposits ? (
                        <section className="overflow-hidden rounded-lg border bg-background">
                          <div className="flex flex-wrap items-start justify-between gap-3 border-b p-4">
                            <div>
                              <h3 className="text-base font-medium">Deposit Epochs</h3>
                            </div>
                            <Badge variant="outline" className={getFlowStatusBadgeClass(vault.depositsPaused)}>
                              {vault.depositsPaused ? "Paused" : "Open"}
                            </Badge>
                          </div>
                          <DataTable
                            variant="wrapped"
                            columns={depositEpochColumns}
                            data={depositEpochRows}
                            emptyText="No live deposit epochs."
                            className="rounded-none bg-transparent p-0"
                            headerClassName="bg-muted/20"
                          />
                        </section>
                      ) : null}

                      <DataTable
                        variant="wrapped"
                        columns={redeemEpochColumns}
                        data={redeemEpochRows}
                        emptyText="No live redeem epochs."
                      />
                    </div>

                    <Card>
                      <CardHeader className="border-b bg-muted/20">
                        <CardTitle>Activity</CardTitle>
                      </CardHeader>
                      <CardContent className="overflow-hidden">
                        <Tabs defaultValue="settlements">
                          <TabsList
                            variant="line"
                            className="mb-5 max-w-full justify-start overflow-x-auto overflow-y-hidden border-b pb-0"
                          >
                            <TabsTrigger value="settlements">Settlements</TabsTrigger>
                            <TabsTrigger value="requests">Requests</TabsTrigger>
                            <TabsTrigger value="snapshots">Snapshots</TabsTrigger>
                          </TabsList>

                          <TabsContent
                            value="settlements"
                            className={cn("grid gap-6", supportsAsyncDeposits && "lg:grid-cols-2")}
                          >
                            {supportsAsyncDeposits ? (
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Deposit Epoch</TableHead>
                                    <TableHead>Assets</TableHead>
                                    <TableHead>Shares</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Report</TableHead>
                                    <TableHead>Settled</TableHead>
                                    <TableHead>Tx</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {data.depositEpoches.length ? (
                                    data.depositEpoches.map((epoch) => (
                                      <TableRow key={epoch.id}>
                                        <TableCell>#{epoch.epochId}</TableCell>
                                        <TableCell>{formatTokenAmount(epoch.assets, assetDecimals)}</TableCell>
                                        <TableCell>{formatTokenAmount(epoch.shares, 18)}</TableCell>
                                        <TableCell>
                                          {formatSharePrice(epoch.assetsPerShare, assetDecimals, { scale: "oracle" })}
                                        </TableCell>
                                        <TableCell>#{epoch.reportId}</TableCell>
                                        <TableCell>{formatDate(epoch.blockTimestamp)}</TableCell>
                                        <TableCell>
                                          <ExplorerChip entity="tx" value={epoch.transactionHash} />
                                        </TableCell>
                                      </TableRow>
                                    ))
                                  ) : (
                                    <TableRow>
                                      <TableCell colSpan={7}>No settled deposit epochs.</TableCell>
                                    </TableRow>
                                  )}
                                </TableBody>
                              </Table>
                            ) : null}
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Redeem Epoch</TableHead>
                                  <TableHead>Shares</TableHead>
                                  <TableHead>Assets</TableHead>
                                  <TableHead>Price</TableHead>
                                  <TableHead>Report</TableHead>
                                  <TableHead>Settled</TableHead>
                                  <TableHead>Tx</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {data.redeemEpoches.length ? (
                                  data.redeemEpoches.map((epoch) => (
                                    <TableRow key={epoch.id}>
                                      <TableCell>#{epoch.epochId}</TableCell>
                                      <TableCell>{formatTokenAmount(epoch.shares, 18)}</TableCell>
                                      <TableCell>{formatTokenAmount(epoch.assets, assetDecimals)}</TableCell>
                                      <TableCell>
                                        {formatSharePrice(epoch.assetsPerShare, assetDecimals, { scale: "oracle" })}
                                      </TableCell>
                                      <TableCell>#{epoch.reportId}</TableCell>
                                      <TableCell>{formatDate(epoch.blockTimestamp)}</TableCell>
                                      <TableCell>
                                        <ExplorerChip entity="tx" value={epoch.transactionHash} />
                                      </TableCell>
                                    </TableRow>
                                  ))
                                ) : (
                                  <TableRow>
                                    <TableCell colSpan={7}>No settled redeem epochs.</TableCell>
                                  </TableRow>
                                )}
                              </TableBody>
                            </Table>
                          </TabsContent>

                          <TabsContent
                            value="requests"
                            className={cn("grid gap-6", supportsAsyncDeposits && "lg:grid-cols-2")}
                          >
                            {supportsAsyncDeposits ? (
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Deposit</TableHead>
                                    <TableHead>Controller</TableHead>
                                    <TableHead>Owner</TableHead>
                                    <TableHead>Sender</TableHead>
                                    <TableHead>Assets</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Updated</TableHead>
                                    <TableHead>Tx</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {data.depositRequests.length ? (
                                    data.depositRequests.map((request) => (
                                      <TableRow key={request.id}>
                                        <TableCell>#{request.requestId}</TableCell>
                                        <TableCell>
                                          <ExplorerChip value={request.controller} />
                                        </TableCell>
                                        <TableCell>
                                          <ExplorerChip value={request.owner} />
                                        </TableCell>
                                        <TableCell>
                                          <ExplorerChip value={request.sender} />
                                        </TableCell>
                                        <TableCell>{formatTokenAmount(request.assets, assetDecimals)}</TableCell>
                                        <TableCell>
                                          <Badge variant={request.canceled ? "secondary" : "default"}>
                                            {request.canceled ? "Canceled" : "Pending"}
                                          </Badge>
                                        </TableCell>
                                        <TableCell>
                                          <div>{formatDate(request.updatedAtTimestamp)}</div>
                                          <div className="text-xs text-muted-foreground">
                                            Created {formatDate(request.createdAtTimestamp)}
                                          </div>
                                        </TableCell>
                                        <TableCell>
                                          <ExplorerChip entity="tx" value={request.createdAtTransaction} />
                                        </TableCell>
                                      </TableRow>
                                    ))
                                  ) : (
                                    <TableRow>
                                      <TableCell colSpan={8}>No recent deposit requests.</TableCell>
                                    </TableRow>
                                  )}
                                </TableBody>
                              </Table>
                            ) : null}
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Redeem</TableHead>
                                  <TableHead>Controller</TableHead>
                                  <TableHead>Owner</TableHead>
                                  <TableHead>Sender</TableHead>
                                  <TableHead>Shares</TableHead>
                                  <TableHead>Status</TableHead>
                                  <TableHead>Updated</TableHead>
                                  <TableHead>Tx</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {data.redeemRequests.length ? (
                                  data.redeemRequests.map((request) => (
                                    <TableRow key={request.id}>
                                      <TableCell>#{request.requestId}</TableCell>
                                      <TableCell>
                                        <ExplorerChip value={request.controller} />
                                      </TableCell>
                                      <TableCell>
                                        <ExplorerChip value={request.owner} />
                                      </TableCell>
                                      <TableCell>
                                        <ExplorerChip value={request.sender} />
                                      </TableCell>
                                      <TableCell>{formatTokenAmount(request.shares, 18)}</TableCell>
                                      <TableCell>
                                        <Badge variant={request.canceled ? "secondary" : "default"}>
                                          {request.canceled ? "Canceled" : "Pending"}
                                        </Badge>
                                      </TableCell>
                                      <TableCell>
                                        <div>{formatDate(request.updatedAtTimestamp)}</div>
                                        <div className="text-xs text-muted-foreground">
                                          Created {formatDate(request.createdAtTimestamp)}
                                        </div>
                                      </TableCell>
                                      <TableCell>
                                        <ExplorerChip entity="tx" value={request.createdAtTransaction} />
                                      </TableCell>
                                    </TableRow>
                                  ))
                                ) : (
                                  <TableRow>
                                    <TableCell colSpan={8}>No recent redeem requests.</TableCell>
                                  </TableRow>
                                )}
                              </TableBody>
                            </Table>
                          </TabsContent>

                          <TabsContent value="snapshots">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Source</TableHead>
                                  <TableHead>TVL</TableHead>
                                  <TableHead>Total Assets</TableHead>
                                  <TableHead>Total Supply</TableHead>
                                  <TableHead>NAV</TableHead>
                                  <TableHead>Share Price</TableHead>
                                  <TableHead>Report</TableHead>
                                  <TableHead>Net Flow</TableHead>
                                  <TableHead>Yield</TableHead>
                                  <TableHead>Tx</TableHead>
                                  <TableHead>Time</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {vault.snapshots.length ? (
                                  vault.snapshots.map((snapshot) => (
                                    <TableRow key={snapshot.id}>
                                      <TableCell>{snapshot.source}</TableCell>
                                      <TableCell>{formatTokenAmount(snapshot.tvl, assetDecimals)}</TableCell>
                                      <TableCell>{formatTokenAmount(snapshot.totalAssets, assetDecimals)}</TableCell>
                                      <TableCell>{formatTokenAmount(snapshot.totalSupply, 18)}</TableCell>
                                      <TableCell>{formatTokenAmount(snapshot.navAssets, assetDecimals)}</TableCell>
                                      <TableCell>
                                        {formatSharePrice(snapshot.sharePrice, assetDecimals, {
                                          totalAssets: snapshot.totalAssets,
                                          totalSupply: snapshot.totalSupply
                                        })}
                                      </TableCell>
                                      <TableCell>{snapshot.reportId ? `#${snapshot.reportId}` : "--"}</TableCell>
                                      <TableCell>{formatTokenAmount(snapshot.netFlowAssets, assetDecimals)}</TableCell>
                                      <TableCell>
                                        {formatTokenAmount(snapshot.yieldEarnedAssets, assetDecimals)}
                                      </TableCell>
                                      <TableCell>
                                        <ExplorerChip entity="tx" value={snapshot.transactionHash} />
                                      </TableCell>
                                      <TableCell>{formatDate(snapshot.blockTimestamp)}</TableCell>
                                    </TableRow>
                                  ))
                                ) : (
                                  <TableRow>
                                    <TableCell colSpan={11}>No snapshots indexed yet.</TableCell>
                                  </TableRow>
                                )}
                              </TableBody>
                            </Table>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="strategies">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold tracking-normal">Strategy / Liquidity</h2>
                      <p className="text-sm text-muted-foreground">
                        Strategy manager controls, allocation capacity, and indexed strategy adapter state.
                      </p>
                    </div>

                    <div className="grid gap-4 xl:grid-cols-3">
                      <AccountingMetric
                        label="Total Strategy Allocation"
                        value={formatAssetAmount(
                          vaultContract?.strategyAllocation ?? vault.strategyManager.totalAllocation
                        )}
                        detail="Live manager allocation when available"
                      />
                      <AccountingMetric
                        label="Total Allocation Cap"
                        value={formatAssetAmount(vault.strategyManager.totalAllocationCap)}
                        detail="Vault-wide allocation ceiling"
                      />
                      <AccountingMetric
                        label="Available Idle for Strategy"
                        value={formatAssetAmount(vaultContract?.availableIdleAssetsForStrategy)}
                        detail="Idle assets available after reserves"
                        status={<Badge variant={idleReserveStatus.variant}>{idleReserveStatus.label}</Badge>}
                      />
                    </div>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Manager State</h3>
                      <InfoPairs
                        items={[
                          {
                            label: "Strategy Manager",
                            value: <ExplorerChip value={strategyManagerAddress} />
                          },
                          {
                            label: "Allocation",
                            value: vault.strategyManager.allocationPaused ? "Paused" : "Open",
                            status: vault.strategyManager.allocationPaused ? "warning" : "good"
                          },
                          {
                            label: "Last Indexed Update",
                            value: formatDate(vault.strategyManager.updatedAtTimestamp)
                          }
                        ]}
                      />
                    </section>

                    <section className="space-y-4">
                      <div>
                        <h3 className="text-base font-medium">Strategy Actions</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Prepare strategy manager transactions for the connected signer.
                        </p>
                      </div>
                      <div className="grid gap-4 xl:grid-cols-3">
                        <form className="rounded-lg border bg-background p-4" onSubmit={handleAddStrategySubmit}>
                          <div className="mb-4 flex items-center justify-between gap-3">
                            <div>
                              <h4 className="text-base font-medium">Add Strategy</h4>
                              <p className="mt-1 text-xs text-muted-foreground">Strategy manager addStrategy</p>
                            </div>
                            <Badge variant="outline">Config</Badge>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="strategy-address">Strategy Address</Label>
                              <Input
                                id="strategy-address"
                                placeholder="0x..."
                                value={strategyAddress}
                                onChange={(event) => setStrategyAddress(event.target.value)}
                              />
                            </div>
                            <Alert>
                              <AlertTitle>addStrategy(address)</AlertTitle>
                              <AlertDescription>
                                <ExplorerChip value={strategyManagerAddress} />
                              </AlertDescription>
                            </Alert>
                            <AuthGuard>
                              <Button className="w-full" disabled={isAddingStrategy} type="submit">
                                <Plus />
                                {isAddingStrategy ? "Adding Strategy..." : "Add Strategy"}
                              </Button>
                            </AuthGuard>
                          </div>
                        </form>

                        <form className="rounded-lg border bg-background p-4" onSubmit={handleAllocateSubmit}>
                          <div className="mb-4 flex items-center justify-between gap-3">
                            <div>
                              <h4 className="text-base font-medium">Transfer Funds To Strategy</h4>
                              <p className="mt-1 text-xs text-muted-foreground">Strategy manager allocate</p>
                            </div>
                            <Badge variant={idleReserveStatus.variant}>{idleReserveStatus.label}</Badge>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="allocate-strategy">Strategy Address</Label>
                              <Input
                                id="allocate-strategy"
                                placeholder="0x..."
                                value={allocateStrategyAddress}
                                onChange={(event) => setAllocateStrategyAddress(event.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="allocate-assets">Assets</Label>
                              <Input
                                id="allocate-assets"
                                inputMode="decimal"
                                placeholder={`0.00 ${assetSymbol}`}
                                value={allocateAssets}
                                onChange={(event) => setAllocateAssets(event.target.value)}
                              />
                            </div>
                            <Alert>
                              <AlertTitle>allocate(strategy, assets)</AlertTitle>
                              <AlertDescription>
                                Available: {formatAssetAmount(vaultContract?.availableIdleAssetsForStrategy)}
                              </AlertDescription>
                            </Alert>
                            <AuthGuard>
                              <Button className="w-full" disabled={isAllocatingStrategy} type="submit">
                                <ArrowUpRight />
                                {isAllocatingStrategy ? "Transferring..." : "Transfer To Strategy"}
                              </Button>
                            </AuthGuard>
                          </div>
                        </form>

                        <form className="rounded-lg border bg-background p-4" onSubmit={handleReturnSubmit}>
                          <div className="mb-4 flex items-center justify-between gap-3">
                            <div>
                              <h4 className="text-base font-medium">Transfer Funds Back</h4>
                              <p className="mt-1 text-xs text-muted-foreground">Strategy manager returnAssets</p>
                            </div>
                            <Badge variant="outline">Allocator</Badge>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="return-strategy">Strategy Address</Label>
                              <Input
                                id="return-strategy"
                                placeholder="0x..."
                                value={returnStrategyAddress}
                                onChange={(event) => setReturnStrategyAddress(event.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="return-assets">Assets</Label>
                              <Input
                                id="return-assets"
                                inputMode="decimal"
                                placeholder={`0.00 ${assetSymbol}`}
                                value={returnAssets}
                                onChange={(event) => setReturnAssets(event.target.value)}
                              />
                            </div>
                            <Alert>
                              <AlertTitle>returnAssets(strategy, assets)</AlertTitle>
                              <AlertDescription>
                                Total allocation:{" "}
                                {formatAssetAmount(
                                  vaultContract?.strategyAllocation ?? vault.strategyManager.totalAllocation
                                )}
                              </AlertDescription>
                            </Alert>
                            <AuthGuard>
                              <Button className="w-full" disabled={isReturningStrategy} type="submit">
                                <ArrowDownLeft />
                                {isReturningStrategy ? "Returning..." : "Prepare Return"}
                              </Button>
                            </AuthGuard>
                          </div>
                        </form>
                      </div>
                    </section>

                    <section className="overflow-hidden rounded-lg border bg-background">
                      <div className="border-b p-4">
                        <h3 className="text-base font-medium">Strategies</h3>
                      </div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Adapter</TableHead>
                            <TableHead>Kind</TableHead>
                            <TableHead>Allowed</TableHead>
                            <TableHead>Allocation</TableHead>
                            <TableHead>Allocation Cap</TableHead>
                            <TableHead>Updated</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {data.strategies.length ? (
                            data.strategies.map((strategy) => (
                              <TableRow key={strategy.id}>
                                <TableCell>
                                  <ExplorerChip value={strategy.address} />
                                </TableCell>
                                <TableCell>{strategy.kind}</TableCell>
                                <TableCell>
                                  <Badge variant={strategy.allowed ? "default" : "secondary"}>
                                    {strategy.allowed ? "Allowed" : "Blocked"}
                                  </Badge>
                                </TableCell>
                                <TableCell>{formatTokenAmount(strategy.allocation, assetDecimals)}</TableCell>
                                <TableCell>{formatTokenAmount(strategy.allocationCap, assetDecimals)}</TableCell>
                                <TableCell>{formatDate(strategy.updatedAtTimestamp)}</TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell colSpan={6}>No strategies indexed yet.</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </section>
                  </div>
                </TabsContent>

                <TabsContent value="limits">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold tracking-normal">Limits</h2>
                      <p className="text-sm text-muted-foreground">
                        Vault capacity and minimum request settings enforced by the limit module.
                      </p>
                    </div>

                    <div className="grid gap-4 xl:grid-cols-4">
                      <AccountingMetric
                        label="Minimum Deposit"
                        value={formatAssetAmount(vaultContract?.minDepositAssets)}
                        detail="Smallest accepted deposit request"
                      />
                      <AccountingMetric
                        label="Minimum Redeem"
                        value={`${formatTokenAmount(vaultContract?.minRedeemShares, 18)} ${vault.symbol}`}
                        detail="Smallest accepted redeem request"
                      />
                      <AccountingMetric
                        label="Max Total Assets"
                        value={formatAssetAmount(vaultContract?.maxTotalAssets)}
                        detail="Zero means no configured cap"
                      />
                      <AccountingMetric
                        label="Max Pending Deposits"
                        value={formatAssetAmount(vaultContract?.maxPendingDepositAssets)}
                        detail="Zero means no configured cap"
                      />
                    </div>

                    <form className="rounded-lg border bg-background p-4" onSubmit={handleLimitsSubmit}>
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-medium">Minimum Request Config</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Updates minimum deposit and redeem limits while preserving the current capacity caps.
                          </p>
                        </div>
                        <Badge variant="outline">setLimits</Badge>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="min-deposit-assets">Minimum Deposit</Label>
                          <Input
                            id="min-deposit-assets"
                            inputMode="decimal"
                            placeholder={`${formatTokenAmount(vaultContract?.minDepositAssets, assetDecimals)} ${assetSymbol}`}
                            value={minDepositAssets}
                            onChange={(event) => setMinDepositAssets(event.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="min-redeem-shares">Minimum Redeem</Label>
                          <Input
                            id="min-redeem-shares"
                            inputMode="decimal"
                            placeholder={`${formatTokenAmount(vaultContract?.minRedeemShares, 18)} ${vault.symbol}`}
                            value={minRedeemShares}
                            onChange={(event) => setMinRedeemShares(event.target.value)}
                          />
                        </div>
                      </div>
                      <Alert className="mt-4">
                        <AlertTitle>setLimits(maxTotalAssets, maxPendingDepositAssets, minDepositAssets, minRedeemShares)</AlertTitle>
                        <AlertDescription>
                          Capacity caps remain at {formatAssetAmount(vaultContract?.maxTotalAssets)} total and{" "}
                          {formatAssetAmount(vaultContract?.maxPendingDepositAssets)} pending deposit assets.
                        </AlertDescription>
                      </Alert>
                      <AuthGuard>
                        <Button className="mt-4 w-full md:w-auto" disabled={!vaultContract || isUpdatingLimits} type="submit">
                          <CheckCircle2 />
                          {isUpdatingLimits ? "Updating Limits..." : "Update Minimums"}
                        </Button>
                      </AuthGuard>
                    </form>
                  </div>
                </TabsContent>

                <TabsContent value="oracle">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold tracking-normal">Oracle / External Value</h2>
                      <p className="text-sm text-muted-foreground">
                        External account value reporting, derived active NAV, oracle quorum, and valuation history.
                      </p>
                    </div>

                    <div className="grid gap-4 xl:grid-cols-3">
                      <AccountingMetric
                        label="Latest Report"
                        value={latestReport ? `#${latestReport.reportId}` : `#${vault.valuationOracle.latestReportId}`}
                        detail={
                          latestReport ? `Submitted ${formatDate(latestReport.submittedAt)}` : "Indexed oracle state"
                        }
                        status={
                          <Badge variant={isReportFresh === false ? "destructive" : "default"}>
                            {isReportFresh === false ? "Stale" : "Fresh"}
                          </Badge>
                        }
                      />
                      <AccountingMetric
                        label="Latest External Value"
                        value={formatAssetAmount(latestReport?.externalValueAssets)}
                        detail="Latest submitted external account value"
                      />
                      <AccountingMetric
                        label="Report Age"
                        value={formatDuration(reportAgeSeconds)}
                        detail={`Max age ${formatDuration(maxReportAge)}`}
                      />
                    </div>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Oracle State</h3>
                      <InfoPairs
                        items={[
                          {
                            label: "Report Oracle",
                            value: <ExplorerChip value={vault.valuationOracle.address} />
                          },
                          {
                            label: "Quorum",
                            value: `${vault.valuationOracle.oracleQuorum}/${vault.valuationOracle.oracleCount}`
                          },
                          {
                            label: "Max Report Age",
                            value: `${formatInteger(vault.valuationOracle.maxReportAge)} seconds`
                          },
                          {
                            label: "Max Price Deviation",
                            value: formatBps(vault.valuationOracle.maxReportPriceDeviationBps)
                          },
                          {
                            label: "Report Vault",
                            value: <ExplorerChip value={vault.valuationOracle.reportVault} />
                          },
                          {
                            label: "Active NAV Source",
                            value: isReportFresh === false ? "Cached active NAV fallback" : "Latest fresh report",
                            detail: `Cached report #${vaultContract?.cachedActiveNav.reportId ?? "--"}`
                          },
                          {
                            label: "Cached NAV Oracle",
                            value: <ExplorerChip value={vaultContract?.cachedActiveNav.oracle} />
                          },
                          {
                            label: "Last Indexed Update",
                            value: formatDate(vault.valuationOracle.updatedAtTimestamp)
                          }
                        ]}
                      />
                    </section>

                    <section className="space-y-4">
                      <div>
                        <h3 className="text-base font-medium">Oracle Actions</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Prepare external account value reports for the connected signer.
                        </p>
                      </div>
                      <form
                        className="grid gap-4 rounded-lg border bg-background p-4 lg:grid-cols-2"
                        onSubmit={handleReportSubmit}
                      >
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-base font-medium">Report Oracle</h4>
                            <p className="mt-1 text-xs text-muted-foreground">Report oracle submitReport</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="report-external-value">External Account Value</Label>
                            <Input
                              id="report-external-value"
                              inputMode="decimal"
                              placeholder={`0.00 ${assetSymbol}`}
                              value={reportExternalValueAssets}
                              onChange={(event) => setReportExternalValueAssets(event.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="report-computed-at">Computed At</Label>
                            <Input
                              id="report-computed-at"
                              inputMode="numeric"
                              value={reportComputedAt}
                              onChange={(event) => setReportComputedAt(event.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="report-metadata">Metadata Hash</Label>
                            <Input
                              id="report-metadata"
                              placeholder="0x0000... optional"
                              value={reportMetadataHash}
                              onChange={(event) => setReportMetadataHash(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex min-w-0 flex-col justify-between gap-4">
                          <Alert>
                            <AlertTitle>submitReport</AlertTitle>
                            <AlertDescription>
                              <ExplorerChip value={vault.valuationOracle.address} />
                            </AlertDescription>
                          </Alert>
                          <AuthGuard>
                            <Button className="w-full" disabled={isSubmittingReport} type="submit">
                              <FileText />
                              {isSubmittingReport ? "Submitting Report..." : "Prepare Report"}
                            </Button>
                          </AuthGuard>
                        </div>
                      </form>
                    </section>

                    <section className="overflow-hidden rounded-lg border bg-background">
                      <div className="border-b p-4">
                        <h3 className="text-base font-medium">Valuation Reports</h3>
                      </div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Report</TableHead>
                            <TableHead>External Value</TableHead>
                            <TableHead>Active NAV</TableHead>
                            <TableHead>Active Supply</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Metadata</TableHead>
                            <TableHead>Reporter</TableHead>
                            <TableHead>Computed</TableHead>
                            <TableHead>Submitted</TableHead>
                            <TableHead>Tx</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {data.valuationReports.length ? (
                            data.valuationReports.map((report) => (
                              <TableRow key={report.id}>
                                <TableCell>#{report.reportId}</TableCell>
                                <TableCell>{formatTokenAmount(report.externalValueAssets, assetDecimals)}</TableCell>
                                <TableCell>{formatTokenAmount(report.activeNavAssets, assetDecimals)}</TableCell>
                                <TableCell>{formatTokenAmount(report.activeShareSupply, 18)}</TableCell>
                                <TableCell>
                                  {formatSharePrice(report.assetsPerShare, assetDecimals, { scale: "oracle" })}
                                </TableCell>
                                <TableCell className="font-mono text-xs">
                                  {formatAddress(report.metadataHash)}
                                </TableCell>
                                <TableCell>
                                  <ExplorerChip value={report.reporter} />
                                </TableCell>
                                <TableCell>{formatDate(report.computedAt)}</TableCell>
                                <TableCell>{formatDate(report.submittedAt)}</TableCell>
                                <TableCell>
                                  <ExplorerChip entity="tx" value={report.transactionHash} />
                                </TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell colSpan={10}>No reports indexed yet.</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </section>
                  </div>
                </TabsContent>

                <TabsContent value="fees">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold tracking-normal">Fees</h2>
                      <p className="text-sm text-muted-foreground">
                        Current fee configuration and recipients used by deposits, redeems, and vault accounting.
                      </p>
                    </div>

                    <div className="grid gap-4 xl:grid-cols-3">
                      <AccountingMetric
                        label="Deposit Fee"
                        value={formatFeeRate(feeValues.entryFeeRate)}
                        detail="Entry fee applied when configured"
                      />
                      <AccountingMetric
                        label="Redeem Fee"
                        value={formatFeeRate(feeValues.exitFeeRate)}
                        detail="Exit fee applied when configured"
                      />
                      <AccountingMetric
                        label="Entry Protocol Share"
                        value={formatFeeRate(feeValues.entryProtocolShareRate)}
                        detail="Protocol share of entry fee flows"
                      />
                    </div>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Fee Manager</h3>
                      <InfoPairs
                        items={[
                          { label: "Fee Manager", value: <ExplorerChip value={feeManager?.address} /> },
                          { label: "Manager Vault", value: <ExplorerChip value={feeManager?.vault} /> },
                          {
                            label: "Fees Initialized",
                            value: feeManager ? (feeManager.feesInitialized ? "Yes" : "No") : "--",
                            status: feeManager?.feesInitialized ? "good" : "neutral"
                          },
                          {
                            label: "High Water Mark",
                            value: formatSharePrice(feeManager?.highWaterMarkAssetsPerShare, assetDecimals)
                          },
                          {
                            label: "Last Management Accrual",
                            value: feeManager ? formatDate(feeManager.lastManagementFeeAccruedAt) : "--"
                          }
                        ]}
                      />
                    </section>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Fee Rates</h3>
                      <InfoPairs
                        items={[
                          { label: "Entry Fee", value: formatFeeRate(feeValues.entryFeeRate) },
                          { label: "Exit Fee", value: formatFeeRate(feeValues.exitFeeRate) },
                          { label: "Management Fee", value: formatFeeRate(feeValues.managementFeeRate) },
                          { label: "Performance Fee", value: formatFeeRate(feeValues.performanceFeeRate) },
                          {
                            label: "Entry Protocol Share",
                            value: formatFeeRate(feeValues.entryProtocolShareRate)
                          },
                          {
                            label: "Exit Protocol Share",
                            value: formatFeeRate(feeValues.exitProtocolShareRate)
                          },
                          {
                            label: "Management Protocol Share",
                            value: formatFeeRate(feeValues.managementProtocolShareRate)
                          },
                          {
                            label: "Performance Protocol Share",
                            value: formatFeeRate(feeValues.performanceProtocolShareRate)
                          }
                        ]}
                      />
                    </section>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Recipients</h3>
                      <InfoPairs
                        items={[
                          { label: "Fee Recipient", value: <ExplorerChip value={feeValues.feeRecipient} /> },
                          {
                            label: "Protocol Fee Recipient",
                            value: <ExplorerChip value={feeValues.protocolFeeRecipient} />
                          }
                        ]}
                      />
                    </section>
                  </div>
                </TabsContent>

                <TabsContent value="access">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold tracking-normal">Access / Safety</h2>
                      <p className="text-sm text-muted-foreground">
                        Operational pause state, vault registration, and indexer health.
                      </p>
                    </div>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Safety State</h3>
                      <InfoPairs
                        items={[
                          {
                            label: "Vault",
                            value: vault.active ? "Active" : "Inactive",
                            status: vault.active ? "good" : "warning"
                          },
                          {
                            label: "Deposits",
                            value: vault.depositsPaused ? "Paused" : "Open",
                            status: vault.depositsPaused ? "warning" : "good"
                          },
                          {
                            label: "Redeems",
                            value: vault.redeemsPaused ? "Paused" : "Open",
                            status: vault.redeemsPaused ? "warning" : "good"
                          },
                          {
                            label: "Strategy Allocation",
                            value: vault.strategyManager.allocationPaused ? "Paused" : "Open",
                            status: vault.strategyManager.allocationPaused ? "warning" : "good"
                          }
                        ]}
                      />
                    </section>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Deployment / System</h3>
                      <InfoPairs
                        items={[
                          { label: "Vault Address", value: <ExplorerChip value={vault.address} /> },
                          { label: "Chain", value: vaultConfig.chain.name, detail: `Chain ID ${vaultConfig.chain.id}` },
                          { label: "Vault Type", value: vault.vaultTypeName, detail: `Type ${vault.vaultType}` },
                          {
                            label: "Registered",
                            value: formatDate(vault.registeredAtTimestamp),
                            detail: (
                              <div className="space-y-1">
                                <div>Block {formatInteger(vault.registeredAtBlock)}</div>
                                <ExplorerChip entity="tx" value={vault.registeredAtTransaction} />
                              </div>
                            )
                          },
                          {
                            label: "Last Indexed Update",
                            value: formatDate(vault.updatedAtTimestamp),
                            detail: `Block ${formatInteger(vault.updatedAtBlock)}`
                          },
                          {
                            label: "Indexer",
                            value: data._meta?.hasIndexingErrors ? "Indexing errors" : "Healthy",
                            status: data._meta?.hasIndexingErrors ? "warning" : "good",
                            detail: `Subgraph block ${formatInteger(data._meta?.block.number)}`
                          }
                        ]}
                      />
                    </section>

                    <section className="rounded-lg border bg-background p-4">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-base font-medium">Access Roles</h3>
                        <Badge variant="outline">{formatInteger(vault.roleAccounts.length)} active assignments</Badge>
                      </div>
                      {vault.roles.length ? (
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Role</TableHead>
                                <TableHead>Active Accounts</TableHead>
                                <TableHead>Recent Accounts</TableHead>
                                <TableHead>Updated</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {vault.roles.map((role) => (
                                <TableRow key={role.id}>
                                  <TableCell>
                                    <div className="min-w-52">
                                      <div className="text-sm font-medium">
                                        {formatRoleName(role.roleName, role.role)}
                                      </div>
                                      <ExplorerChip value={role.role} />
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <Badge variant={Number(role.activeAccountCount) > 0 ? "default" : "secondary"}>
                                      {formatInteger(role.activeAccountCount)}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>
                                    {role.accounts.length ? (
                                      <div className="flex min-w-72 flex-wrap gap-2">
                                        {role.accounts.map((account) => (
                                          <ExplorerChip key={account.id} value={account.account} />
                                        ))}
                                      </div>
                                    ) : (
                                      <span className="text-sm text-muted-foreground">--</span>
                                    )}
                                  </TableCell>
                                  <TableCell className="text-sm text-muted-foreground">
                                    {formatDate(role.updatedAtTimestamp)}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">No access roles indexed for this vault.</p>
                      )}
                    </section>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Active Role Accounts</h3>
                      {vault.roleAccounts.length ? (
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Account</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Granted</TableHead>
                                <TableHead>Granted By</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {vault.roleAccounts.map((account) => (
                                <TableRow key={account.id}>
                                  <TableCell>
                                    <ExplorerChip value={account.account} />
                                  </TableCell>
                                  <TableCell>
                                    <div className="min-w-44">
                                      <div className="text-sm font-medium">
                                        {formatRoleName(account.roleName, account.role)}
                                      </div>
                                      <ExplorerChip value={account.role} />
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    {formatDate(account.grantedAtTimestamp ?? account.updatedAtTimestamp)}
                                  </TableCell>
                                  <TableCell>
                                    <ExplorerChip value={account.grantedBy} />
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">No active role accounts indexed for this vault.</p>
                      )}
                    </section>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Recent Access Events</h3>
                      {vault.accessControlEvents.length ? (
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Event</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Account / Sender</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Tx</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {vault.accessControlEvents.map((event) => (
                                <TableRow key={event.id}>
                                  <TableCell>
                                    <Badge variant="outline">{formatAccessEventType(event.type)}</Badge>
                                  </TableCell>
                                  <TableCell>
                                    <div className="min-w-44">
                                      <div className="text-sm font-medium">
                                        {formatRoleName(event.roleName, event.role)}
                                      </div>
                                      <ExplorerChip value={event.role} />
                                      {event.previousAdminRole || event.newAdminRole ? (
                                        <div className="mt-1 text-xs text-muted-foreground">
                                          {formatRoleName(event.previousAdminRoleName, event.previousAdminRole)} {"->"}{" "}
                                          {formatRoleName(event.newAdminRoleName, event.newAdminRole)}
                                        </div>
                                      ) : null}
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="space-y-1">
                                      <ExplorerChip value={event.account} />
                                      {event.sender ? (
                                        <div className="text-xs text-muted-foreground">
                                          Sender <ExplorerChip value={event.sender} />
                                        </div>
                                      ) : null}
                                    </div>
                                  </TableCell>
                                  <TableCell>{formatDate(event.blockTimestamp)}</TableCell>
                                  <TableCell>
                                    <ExplorerChip entity="tx" value={event.transactionHash} />
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          No access-control events indexed for this vault.
                        </p>
                      )}
                    </section>
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </section>
        </PageContainer>
      </>
    </ExplorerUrlContext.Provider>
  );
}
