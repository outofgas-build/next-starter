"use client";

import { Copy, FileText, Send } from "lucide-react";
import { useParams } from "next/navigation";
import { FormEvent, ReactNode, useState } from "react";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContainer } from "@/components/page-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useVaultDetail, useVaultHealth, type VaultHealth } from "@/hooks/use-vaults";
import { formatAddress, formatBps, formatDate, formatInteger, formatSharePrice, formatTokenAmount } from "@/lib/format";
import { cn } from "@/lib/utils";

type OperationType = "deposit" | "redeem";
type ExplorerEntity = "address" | "tx";

const blockExplorerUrl = process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL ?? "https://etherscan.io";

function getExplorerUrl(value: string, entity: ExplorerEntity) {
  return `${blockExplorerUrl.replace(/\/$/, "")}/${entity}/${value}`;
}

function copyText(label: string, value: string) {
  void navigator.clipboard.writeText(value);
  toast.success(`${label} copied`);
}

function formatFeeRate(value?: string | number | null) {
  if (value === undefined || value === null) return "--";
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return String(value);

  return `${(numericValue / 10_000).toLocaleString("en-US", {
    maximumFractionDigits: 4
  })}%`;
}

function formatVaultTypeName(value: string) {
  if (value === "SyncDepositAsyncRedeem" || value === "Sync Deposit Async Redeem") {
    return "Async Redeem Vault";
  }

  return value;
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
  if (!value) return <span className={cn("font-mono text-sm text-muted-foreground", className)}>--</span>;

  const displayValue = label ?? formatAddress(value);

  return (
    <span className={cn("inline-flex max-w-full items-center gap-0.5", className)}>
      <a
        className="inline-flex min-w-0 items-center rounded-md py-1 font-mono text-xs text-primary transition-opacity hover:opacity-80"
        href={getExplorerUrl(value, entity)}
        rel="noreferrer"
        target="_blank"
        title={value}
      >
        <span className="whitespace-nowrap">{displayValue}</span>
      </a>
      <Button
        className="size-6 shrink-0"
        size="icon"
        title={`Copy ${entity}`}
        type="button"
        variant="ghost"
        onClick={() => copyText(entity === "tx" ? "Transaction hash" : "Address", value)}
      >
        <Copy className="size-3.5" />
      </Button>
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
        "min-w-0 border-b p-5 md:border-b-0 md:border-r md:last:border-r-0",
        featured && "bg-primary text-primary-foreground"
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
    <div className="min-w-0 rounded-lg border bg-background p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <div className="mt-2 flex min-w-0 items-start justify-between gap-3">
        <p className="min-w-0 break-words text-2xl font-semibold tracking-normal">{value}</p>
        {status ? <div className="shrink-0 pt-1">{status}</div> : null}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{detail}</p>
    </div>
  );
}

function AccountingLine({
  label,
  value,
  inset
}: {
  label: string;
  value: ReactNode;
  inset?: boolean;
}) {
  return (
    <div className={cn("flex min-w-0 items-center justify-between gap-4 py-2 text-sm", inset && "pl-5")}>
      <span className={cn("min-w-0 text-muted-foreground", inset && "relative before:absolute before:-left-4 before:top-1/2 before:h-px before:w-2 before:bg-border")}>
        {label}
      </span>
      <span className="min-w-0 break-words text-right font-medium">{value}</span>
    </div>
  );
}

function getIdleHealthStatus(health?: VaultHealth) {
  if (!health) return { label: "Live data", variant: "secondary" as const };

  const idle = BigInt(health.vaultIdleBalance);
  const claimable = BigInt(health.totalClaimableRedeemAssets);

  if (idle < claimable) return { label: "Blocked", variant: "destructive" as const };
  if (idle === claimable) return { label: "Reserved", variant: "secondary" as const };
  return { label: "Healthy", variant: "default" as const };
}

export default function VaultDetailPage() {
  const params = useParams<{ address: string }>();
  const address = params.address;
  const { data, isLoading, error } = useVaultDetail(address);
  const { data: vaultHealth } = useVaultHealth(address);
  const vault = data?.vault;
  const [settleType, setSettleType] = useState<OperationType>("deposit");
  const [settleEpochId, setSettleEpochId] = useState("");
  const [settleReportId, setSettleReportId] = useState("");
  const [reportNavAssets, setReportNavAssets] = useState("");
  const [reportAssetsPerShare, setReportAssetsPerShare] = useState("");
  const [reportComputedAt, setReportComputedAt] = useState(() => Math.floor(Date.now() / 1000).toString());
  const [reportMetadataHash, setReportMetadataHash] = useState("");

  const assetSymbol = vault?.asset.symbol ?? "asset";
  const assetDecimals = vault?.asset.decimals ?? 18;
  const latestReportId = vault?.valuationOracle.latestReportId ?? "";
  const idleHealthStatus = getIdleHealthStatus(vaultHealth);
  const supportsAsyncDeposits = vault?.vaultTypeName.toLowerCase().includes("async deposit") ?? false;
  const formatAssetAmount = (value?: string | number | null) =>
    value === undefined || value === null ? "--" : `${formatTokenAmount(value, assetDecimals)} ${assetSymbol}`;

  function handleSettleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const functionName = settleType === "deposit" ? "settleDepositEpoch" : "settleRedeemEpoch";
    toast.info(`${functionName} UI prepared. Connect transaction execution next.`);
  }

  function handleReportSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.info("submitReport UI prepared. Connect transaction execution next.");
  }

  if (isLoading) {
    return (
      <PageContainer>
        <Skeleton className="h-32" />
        <Skeleton className="h-96" />
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

  const liveTvl = vaultHealth?.totalAssets ?? vault.totalAssets;
  const liveTotalSupply = vaultHealth?.totalSupply ?? vault.totalSupply;
  const vaultTypeName = formatVaultTypeName(vault.vaultTypeName);
  const feeManager = vaultHealth?.feeManager;
  const feeValues = {
    depositFeeRate: feeManager?.depositFeeRate ?? vault.depositFeeRate,
    redeemFeeRate: feeManager?.redeemFeeRate ?? vault.redeemFeeRate,
    performanceFeeRate: feeManager?.performanceFeeRate ?? vault.performanceFeeRate,
    protocolFeeRate: feeManager?.protocolFeeRate ?? vault.protocolFeeRate,
    managementFeeRate: feeManager?.managementFeeRate ?? vault.managementFeeRate,
    feeRecipient: feeManager?.feeRecipient ?? vault.feeRecipient,
    protocolFeeRecipient: feeManager?.protocolFeeRecipient ?? vault.protocolFeeRecipient
  };
  const latestDepositEpoch = data.depositEpoches[0];
  const latestRedeemEpoch = data.redeemEpoches[0];
  const latestReport = data.valuationReports[0];
  const latestReportTimestamp = latestReport ? Number(latestReport.submittedAt) : Number(vault.valuationOracle.updatedAtTimestamp);
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

  return (
    <PageContainer>
      <section className="overflow-hidden rounded-xl border border-border/80 bg-card">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b p-6">
          <div className="min-w-0">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="break-words text-3xl font-semibold tracking-normal">{vault.name}</h1>
                <Badge variant={vault.active ? "default" : "secondary"}>{vault.active ? "Active" : "Inactive"}</Badge>
                <Badge variant="outline">{vaultTypeName}</Badge>
              </div>
              <ExplorerChip value={vault.address} />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4">
          <MetricPanel
            featured
            label="TVL"
            value={`${formatTokenAmount(liveTvl, assetDecimals)} ${assetSymbol}`}
            detail="Live totalAssets()"
          />
          <MetricPanel
            label="Share Price"
            value={formatSharePrice(vaultHealth?.trustedAssetsPerShare ?? vault.latestSharePrice, assetDecimals, {
              totalAssets: liveTvl,
              totalSupply: liveTotalSupply
            })}
            detail={`Report #${vaultHealth?.cachedActiveNav.reportId ?? vault.valuationOracle.latestReportId}`}
          />
          <MetricPanel
            label="Total Supply"
            value={`${formatTokenAmount(liveTotalSupply, 18)} ${vault.symbol}`}
            detail="Outstanding vault shares"
          />
          <MetricPanel
            label="Net Flow"
            value={`${formatTokenAmount(vault.netFlowAssets, assetDecimals)} ${assetSymbol}`}
            detail="Deposits minus withdrawals"
          />
        </div>
      </section>

      <section className="min-w-0 space-y-6">
          <section className="min-w-0">
            <Tabs defaultValue="overview">
              <div className="mb-8 overflow-x-auto overflow-y-hidden border-b">
                <TabsList className="[&_button]:after:hidden" variant={"line"}>
                  <TabsTrigger value="overview" className={'pl-0'}>Overview</TabsTrigger>
                  <TabsTrigger value="epochs">Epochs</TabsTrigger>
                  <TabsTrigger value="strategies">Strategies</TabsTrigger>
                  <TabsTrigger value="oracle">Oracle</TabsTrigger>
                  <TabsTrigger value="fees">Fees</TabsTrigger>
                  <TabsTrigger value="access">Access</TabsTrigger>
                  <TabsTrigger value="operations">Operations</TabsTrigger>
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
                      value={formatAssetAmount(vaultHealth?.vaultIdleBalance)}
                      detail="Raw asset balance"
                    />
                    <AccountingMetric
                      label="Claimable Redeem Reserve"
                      value={formatAssetAmount(vaultHealth?.totalClaimableRedeemAssets)}
                      detail="Assets reserved for settled redeem claims"
                    />
                    <AccountingMetric
                      label="Available Idle for Strategy"
                      value={formatAssetAmount(vaultHealth?.availableIdleAssetsForStrategy)}
                      detail={`Safe to allocate after redeem${supportsAsyncDeposits ? " and deposit" : ""} reserves`}
                      status={<Badge variant={idleHealthStatus.variant}>{idleHealthStatus.label}</Badge>}
                    />
                  </div>

                  <div className="grid gap-4 xl:grid-cols-3">
                    <AccountingMetric
                      label="Total Assets"
                      value={formatAssetAmount(liveTvl)}
                      detail="Managed vault value"
                    />
                    <AccountingMetric
                      label="Active NAV"
                      value={formatAssetAmount(vaultHealth?.activeNavAssets)}
                      detail="Current usable NAV"
                    />
                    <AccountingMetric
                      label="Share Price"
                      value={formatSharePrice(vaultHealth?.trustedAssetsPerShare ?? vault.latestSharePrice, assetDecimals, {
                        totalAssets: liveTvl,
                        totalSupply: liveTotalSupply
                      })}
                      detail="trustedAssets/share"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <section className="rounded-lg border bg-background p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-base font-medium">Asset Breakdown</h3>
                        <span className="text-xs text-muted-foreground">Live contract reads</span>
                      </div>
                      <AccountingLine label="Vault Asset Balance" value={formatAssetAmount(vaultHealth?.vaultIdleBalance)} />
                      <AccountingLine
                        inset
                        label="Claimable Redeem Reserve"
                        value={formatAssetAmount(vaultHealth?.totalClaimableRedeemAssets)}
                      />
                      {supportsAsyncDeposits ? (
                        <AccountingLine
                          inset
                          label="Pending Deposit Assets"
                          value={formatAssetAmount(vaultHealth?.totalPendingDepositAssets)}
                        />
                      ) : null}
                      <AccountingLine
                        inset
                        label="Estimated Pending Redeem Value"
                        value={formatAssetAmount(vaultHealth?.estimatedPendingRedeemAssets)}
                      />
                      <AccountingLine
                        inset
                        label="Available Idle for Strategy"
                        value={formatAssetAmount(vaultHealth?.availableIdleAssetsForStrategy)}
                      />
                      <Separator className="my-2" />
                      <AccountingLine label="Strategy Debt" value={formatAssetAmount(vaultHealth?.strategyDebt)} />
                      <AccountingLine label="Active NAV" value={formatAssetAmount(vaultHealth?.activeNavAssets)} />
                    </section>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Share Supply</h3>
                      <AccountingLine
                        label="Total Supply"
                        value={`${formatTokenAmount(vaultHealth?.totalSupply ?? vault.totalSupply, 18)} ${vault.symbol}`}
                      />
                      <AccountingLine
                        label="Active Share Supply"
                        value={`${formatTokenAmount(vaultHealth?.activeShareSupply, 18)} ${vault.symbol}`}
                      />
                      <AccountingLine
                        label="Claimable Redeem Net Shares"
                        value={`${formatTokenAmount(vaultHealth?.totalClaimableRedeemNetShares, 18)} ${vault.symbol}`}
                      />
                      <AccountingLine
                        label="Pending Redeem Shares"
                        value={`${formatTokenAmount(vaultHealth?.pendingRedeemShares, 18)} ${vault.symbol}`}
                      />
                    </section>

                    <section className="rounded-lg border bg-background p-4">
                      <h3 className="mb-3 text-base font-medium">Cached NAV</h3>
                      <AccountingLine
                        label="Cached NAV Assets"
                        value={formatAssetAmount(vaultHealth?.cachedActiveNav.assets)}
                      />
                      <AccountingLine
                        label="Cached NAV Report ID"
                        value={vaultHealth ? `#${vaultHealth.cachedActiveNav.reportId}` : "--"}
                      />
                      <AccountingLine
                        label="Cached NAV Oracle"
                        value={<ExplorerChip value={vaultHealth?.cachedActiveNav.oracle} />}
                      />
                    </section>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="epochs">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold tracking-normal">Epochs / Settlement</h2>
                    <p className="text-sm text-muted-foreground">
                      Current deposit and redeem flow state, recent settlements, and claim readiness signals.
                    </p>
                  </div>

                  <div className={cn("grid gap-4", supportsAsyncDeposits && "xl:grid-cols-2")}>
                    {supportsAsyncDeposits ? (
                      <section className="rounded-lg border bg-background p-4">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <h3 className="text-base font-medium">Deposit Side</h3>
                          <Badge variant={vault.depositsPaused ? "destructive" : "default"}>
                            {vault.depositsPaused ? "Paused" : "Open"}
                          </Badge>
                        </div>
                        <InfoPairs
                          items={[
                            {
                              label: "Pending Assets",
                              value: formatAssetAmount(vaultHealth?.totalPendingDepositAssets)
                            },
                            {
                              label: "Latest Settled Epoch",
                              value: latestDepositEpoch ? `#${latestDepositEpoch.epochId}` : "--",
                              detail: latestDepositEpoch
                                ? `Settled ${formatDate(latestDepositEpoch.blockTimestamp)}`
                                : undefined
                            },
                            {
                              label: "Settled Assets",
                              value: latestDepositEpoch ? formatAssetAmount(latestDepositEpoch.assets) : "--"
                            },
                            {
                              label: "Shares Minted",
                              value: latestDepositEpoch
                                ? `${formatTokenAmount(latestDepositEpoch.shares, 18)} ${vault.symbol}`
                                : "--"
                            },
                            {
                              label: "Settlement Price",
                              value: latestDepositEpoch
                                ? formatSharePrice(latestDepositEpoch.assetsPerShare, assetDecimals, { scale: "oracle" })
                                : "--"
                            },
                            { label: "Deposit Fee", value: formatFeeRate(feeValues.depositFeeRate) },
                            { label: "Protocol Fee", value: formatFeeRate(feeValues.protocolFeeRate) }
                          ]}
                        />
                      </section>
                    ) : null}

                    <section className="rounded-lg border bg-background p-4">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <h3 className="text-base font-medium">Redeem Side</h3>
                        <Badge variant={vault.redeemsPaused ? "destructive" : "default"}>
                          {vault.redeemsPaused ? "Paused" : "Open"}
                        </Badge>
                      </div>
                      <InfoPairs
                        items={[
                          {
                            label: "Current Epoch",
                            value: vaultHealth?.currentRedeemEpochId ? `#${vaultHealth.currentRedeemEpochId}` : "--"
                          },
                          {
                            label: "Pending Shares",
                            value: `${formatTokenAmount(vaultHealth?.pendingRedeemShares, 18)} ${vault.symbol}`
                          },
                          {
                            label: "Estimated Pending Value",
                            value: formatAssetAmount(vaultHealth?.estimatedPendingRedeemAssets)
                          },
                          {
                            label: "Claimable Reserve",
                            value: formatAssetAmount(vaultHealth?.totalClaimableRedeemAssets)
                          },
                          {
                            label: "Latest Settled Epoch",
                            value: latestRedeemEpoch ? `#${latestRedeemEpoch.epochId}` : "--",
                            detail: latestRedeemEpoch
                              ? `Settled ${formatDate(latestRedeemEpoch.blockTimestamp)}`
                              : undefined
                          },
                          {
                            label: "Settled Assets",
                            value: latestRedeemEpoch ? formatAssetAmount(latestRedeemEpoch.assets) : "--"
                          },
                          {
                            label: "Settlement Price",
                            value: latestRedeemEpoch
                              ? formatSharePrice(latestRedeemEpoch.assetsPerShare, assetDecimals, { scale: "oracle" })
                              : "--"
                          },
                          { label: "Redeem Fee", value: formatFeeRate(feeValues.redeemFeeRate) },
                          { label: "Protocol Fee", value: formatFeeRate(feeValues.protocolFeeRate) }
                        ]}
                      />
                    </section>
                  </div>

                  <section className="rounded-lg border bg-background p-4">
                    <h3 className="mb-3 text-base font-medium">Readiness</h3>
                    <div className="grid gap-3 md:grid-cols-3">
                      <div className="rounded-md border p-3">
                        <p className="text-sm text-muted-foreground">Can close epoch?</p>
                        <p className="mt-1 font-medium">Needs contract action state</p>
                      </div>
                      <div className="rounded-md border p-3">
                        <p className="text-sm text-muted-foreground">Can settle epoch?</p>
                        <p className="mt-1 font-medium">Requires fresh NAV report</p>
                      </div>
                      <div className="rounded-md border p-3">
                        <p className="text-sm text-muted-foreground">Can users claim?</p>
                        <p className="mt-1 font-medium">
                          {BigInt(vaultHealth?.totalClaimableRedeemAssets ?? "0") > BigInt(0)
                            ? "Redeem claims available"
                            : "No redeem reserve"}
                        </p>
                      </div>
                    </div>
                  </section>

                  <Card>
                    <CardHeader className="border-b bg-muted/20">
                      <CardTitle>Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-hidden">
                      <Tabs defaultValue="settlements">
                        <TabsList variant="line" className="mb-5 max-w-full justify-start overflow-x-auto overflow-y-hidden border-b pb-0">
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
                                    <TableCell>{formatTokenAmount(snapshot.yieldEarnedAssets, assetDecimals)}</TableCell>
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
                      label="Total Strategy Debt"
                      value={formatAssetAmount(vaultHealth?.strategyDebt ?? vault.strategyManager.totalStrategyDebt)}
                      detail="Live manager debt when available"
                    />
                    <AccountingMetric
                      label="Max Total Strategy Debt"
                      value={formatAssetAmount(vault.strategyManager.maxTotalStrategyDebt)}
                      detail="Vault-wide allocation ceiling"
                    />
                    <AccountingMetric
                      label="Available Idle for Strategy"
                      value={formatAssetAmount(vaultHealth?.availableIdleAssetsForStrategy)}
                      detail="Idle assets available after reserves"
                      status={<Badge variant={idleHealthStatus.variant}>{idleHealthStatus.label}</Badge>}
                    />
                  </div>

                  <section className="rounded-lg border bg-background p-4">
                    <h3 className="mb-3 text-base font-medium">Manager State</h3>
                    <InfoPairs
                      items={[
                        {
                          label: "Strategy Manager",
                          value: <ExplorerChip value={vault.strategyManager.address} />
                        },
                        {
                          label: "Allocation",
                          value: vault.strategyManager.allocationPaused ? "Paused" : "Open",
                          status: vault.strategyManager.allocationPaused ? "warning" : "good"
                        },
                        {
                          label: "Execution",
                          value: vault.strategyManager.executionPaused ? "Paused" : "Open",
                          status: vault.strategyManager.executionPaused ? "warning" : "good"
                        },
                        {
                          label: "Reported Assets",
                          value: formatAssetAmount(vault.strategyManager.totalStrategyReportedAssets)
                        },
                        {
                          label: "Last Indexed Update",
                          value: formatDate(vault.strategyManager.updatedAtTimestamp)
                        }
                      ]}
                    />
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
                          <TableHead>Debt</TableHead>
                          <TableHead>Reported</TableHead>
                          <TableHead>Max Debt</TableHead>
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
                              <TableCell>{formatTokenAmount(strategy.debtAssets, assetDecimals)}</TableCell>
                              <TableCell>{formatTokenAmount(strategy.reportedAssets, assetDecimals)}</TableCell>
                              <TableCell>{formatTokenAmount(strategy.maxDebtAssets, assetDecimals)}</TableCell>
                              <TableCell>{formatDate(strategy.updatedAtTimestamp)}</TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={7}>No strategies indexed yet.</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </section>
                </div>
              </TabsContent>

              <TabsContent value="oracle">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold tracking-normal">Oracle / NAV</h2>
                    <p className="text-sm text-muted-foreground">
                      NAV report freshness, oracle quorum, active NAV source, and valuation report history.
                    </p>
                  </div>

                  <div className="grid gap-4 xl:grid-cols-3">
                    <AccountingMetric
                      label="Latest Report"
                      value={latestReport ? `#${latestReport.reportId}` : `#${vault.valuationOracle.latestReportId}`}
                      detail={latestReport ? `Submitted ${formatDate(latestReport.submittedAt)}` : "Indexed oracle state"}
                      status={
                        <Badge variant={isReportFresh === false ? "destructive" : "default"}>
                          {isReportFresh === false ? "Stale" : "Fresh"}
                        </Badge>
                      }
                    />
                    <AccountingMetric
                      label="Latest NAV"
                      value={formatAssetAmount(latestReport?.navAssets ?? vaultHealth?.cachedActiveNav.assets)}
                      detail="Latest submitted report or cached active NAV"
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
                          label: "Max NAV Deviation",
                          value: formatBps(vault.valuationOracle.maxChangeBps)
                        },
                        {
                          label: "Metadata Hash",
                          value: vault.valuationOracle.requireReportMetadataHash ? "Required" : "Optional",
                          status: vault.valuationOracle.requireReportMetadataHash ? "neutral" : "good"
                        },
                        {
                          label: "Active NAV Source",
                          value: isReportFresh === false ? "Cached active NAV fallback" : "Latest fresh report",
                          detail: `Cached report #${vaultHealth?.cachedActiveNav.reportId ?? "--"}`
                        },
                        {
                          label: "Cached NAV Oracle",
                          value: <ExplorerChip value={vaultHealth?.cachedActiveNav.oracle} />
                        },
                        {
                          label: "Last Indexed Update",
                          value: formatDate(vault.valuationOracle.updatedAtTimestamp)
                        }
                      ]}
                    />
                  </section>

                  <section className="overflow-hidden rounded-lg border bg-background">
                    <div className="border-b p-4">
                      <h3 className="text-base font-medium">Valuation Reports</h3>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Report</TableHead>
                          <TableHead>NAV</TableHead>
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
                              <TableCell>{formatTokenAmount(report.navAssets, assetDecimals)}</TableCell>
                              <TableCell>
                                {formatSharePrice(report.assetsPerShare, assetDecimals, { scale: "oracle" })}
                              </TableCell>
                              <TableCell className="font-mono text-xs">{formatAddress(report.metadataHash)}</TableCell>
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
                            <TableCell colSpan={8}>No reports indexed yet.</TableCell>
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
                      value={formatFeeRate(feeValues.depositFeeRate)}
                      detail="Applied to deposit settlement when configured"
                    />
                    <AccountingMetric
                      label="Redeem Fee"
                      value={formatFeeRate(feeValues.redeemFeeRate)}
                      detail="Applied to redeem settlement when configured"
                    />
                    <AccountingMetric
                      label="Protocol Fee"
                      value={formatFeeRate(feeValues.protocolFeeRate)}
                      detail="Protocol share of configured fee flows"
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
                        { label: "Deposit Fee", value: formatFeeRate(feeValues.depositFeeRate) },
                        { label: "Redeem Fee", value: formatFeeRate(feeValues.redeemFeeRate) },
                        { label: "Management Fee", value: formatFeeRate(feeValues.managementFeeRate) },
                        { label: "Performance Fee", value: formatFeeRate(feeValues.performanceFeeRate) },
                        { label: "Protocol Fee", value: formatFeeRate(feeValues.protocolFeeRate) }
                      ]}
                    />
                  </section>

                  <section className="rounded-lg border bg-background p-4">
                    <h3 className="mb-3 text-base font-medium">Recipients</h3>
                    <InfoPairs
                      items={[
                        { label: "Fee Recipient", value: <ExplorerChip value={feeValues.feeRecipient} /> },
                        { label: "Protocol Fee Recipient", value: <ExplorerChip value={feeValues.protocolFeeRecipient} /> }
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
                        },
                        {
                          label: "Strategy Execution",
                          value: vault.strategyManager.executionPaused ? "Paused" : "Open",
                          status: vault.strategyManager.executionPaused ? "warning" : "good"
                        }
                      ]}
                    />
                  </section>

                  <section className="rounded-lg border bg-background p-4">
                    <h3 className="mb-3 text-base font-medium">Registry / System</h3>
                    <InfoPairs
                      items={[
                        { label: "Vault Address", value: <ExplorerChip value={vault.address} /> },
                        { label: "Vault Type", value: vault.vaultTypeName, detail: `Type ${vault.vaultType}` },
                        {
                          label: "Registry",
                          value: <ExplorerChip value={vault.registry.address} />,
                          detail: `${formatInteger(vault.registry.vaultCount)} registered vaults`
                        },
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
                </div>
              </TabsContent>

              <TabsContent value="operations">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold tracking-normal">Operations</h2>
                    <p className="text-sm text-muted-foreground">
                      Prepare admin actions for the connected signer.
                    </p>
                  </div>

                  <Card className="border-primary/30">
                    <CardContent className="pt-6">
                      <Tabs defaultValue="settle">
                        <TabsList className="mb-4">
                          <TabsTrigger value="settle">Settle</TabsTrigger>
                          <TabsTrigger value="report">Report</TabsTrigger>
                        </TabsList>
                        <TabsContent value="settle">
                          <form className="grid gap-4 lg:grid-cols-2" onSubmit={handleSettleSubmit}>
                            <div className="space-y-4">
                              <Tabs value={settleType} onValueChange={(value) => setSettleType(value as OperationType)}>
                                <TabsList>
                                  <TabsTrigger value="deposit">Deposit</TabsTrigger>
                                  <TabsTrigger value="redeem">Redeem</TabsTrigger>
                                </TabsList>
                              </Tabs>
                              <div className="space-y-2">
                                <Label htmlFor="settle-epoch">Epoch ID</Label>
                                <Input
                                  id="settle-epoch"
                                  inputMode="numeric"
                                  placeholder="Current epoch id"
                                  value={settleEpochId}
                                  onChange={(event) => setSettleEpochId(event.target.value)}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="settle-report">Report ID</Label>
                                <Input
                                  id="settle-report"
                                  inputMode="numeric"
                                  placeholder={String(latestReportId)}
                                  value={settleReportId}
                                  onChange={(event) => setSettleReportId(event.target.value)}
                                />
                              </div>
                            </div>
                            <div className="flex min-w-0 flex-col justify-between gap-4">
                              <Alert>
                                <AlertTitle>{settleType === "deposit" ? "settleDepositEpoch" : "settleRedeemEpoch"}</AlertTitle>
                                <AlertDescription>
                                  <ExplorerChip value={vault.address} />
                                </AlertDescription>
                              </Alert>
                              <Button className="w-full" type="submit">
                                <Send />
                                Prepare Settle
                              </Button>
                            </div>
                          </form>
                        </TabsContent>
                        <TabsContent value="report">
                          <form className="grid gap-4 lg:grid-cols-2" onSubmit={handleReportSubmit}>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="report-nav">NAV Assets</Label>
                                <Input
                                  id="report-nav"
                                  inputMode="numeric"
                                  placeholder="Raw asset units"
                                  value={reportNavAssets}
                                  onChange={(event) => setReportNavAssets(event.target.value)}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="report-price">Assets Per Share</Label>
                                <Input
                                  id="report-price"
                                  inputMode="numeric"
                                  placeholder="Raw oracle value"
                                  value={reportAssetsPerShare}
                                  onChange={(event) => setReportAssetsPerShare(event.target.value)}
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
                                  placeholder="0x0000... optional unless required"
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
                              <Button className="w-full" type="submit">
                                <FileText />
                                Prepare Report
                              </Button>
                            </div>
                          </form>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </section>
      </section>
    </PageContainer>
  );
}
