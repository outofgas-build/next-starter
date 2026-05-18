"use client";

import {
  ArrowLeft,
  BarChart3,
  Copy,
  ExternalLink,
  FileText,
  Layers3,
  RefreshCw,
  Send,
  ShieldCheck,
  Wallet
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEvent, ReactNode, useMemo, useState } from "react";
import { toast } from "sonner";
import { usePrivy } from "@privy-io/react-auth";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContainer } from "@/components/page-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useVaultDetail } from "@/hooks/use-vaults";
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
    <span className={cn("inline-flex max-w-full items-center gap-1.5", className)}>
      <a
        className="inline-flex min-w-0 items-center gap-1.5 rounded-md border bg-background px-2 py-1 font-mono text-xs text-foreground transition-colors hover:border-primary/60 hover:text-primary"
        href={getExplorerUrl(value, entity)}
        rel="noreferrer"
        target="_blank"
        title={value}
      >
        <span className="whitespace-nowrap">{displayValue}</span>
        <ExternalLink className="size-3 shrink-0" />
      </a>
      <Button
        className="size-7 shrink-0"
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

function SectionHeading({
  icon: Icon,
  title,
  description
}: {
  icon: typeof BarChart3;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex size-8 items-center justify-center rounded-md border bg-muted">
        <Icon className="size-4 text-primary" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
    </div>
  );
}

function FactsheetRow({
  icon,
  title,
  description,
  children
}: {
  icon: typeof BarChart3;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4 border-b py-6 last:border-b-0 last:pb-0 first:pt-0">
      <SectionHeading icon={icon} title={title} description={description} />
      <div className="min-w-0">{children}</div>
    </section>
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
          className="grid min-w-0 gap-2 border-b py-3 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:items-start"
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

export default function VaultDetailPage() {
  const params = useParams<{ address: string }>();
  const address = params.address;
  const { login, authenticated } = usePrivy();
  const { data, isLoading, isFetching, error, refetch } = useVaultDetail(address);
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
  const currentSnapshot = vault?.snapshots[0];

  const pendingDepositAssets = useMemo(
    () =>
      data?.depositRequests
        .filter((request) => !request.canceled)
        .reduce((sum, request) => sum + BigInt(request.assets), BigInt(0)) ?? BigInt(0),
    [data?.depositRequests]
  );
  const pendingRedeemShares = useMemo(
    () =>
      data?.redeemRequests
        .filter((request) => !request.canceled)
        .reduce((sum, request) => sum + BigInt(request.shares), BigInt(0)) ?? BigInt(0),
    [data?.redeemRequests]
  );

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

  return (
    <PageContainer>
      <section className="overflow-hidden rounded-xl border border-border/80 bg-card">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b p-6">
          <div className="min-w-0 space-y-4">
            <Button asChild variant="ghost" size="sm" className="-ml-3">
              <Link href="/">
                <ArrowLeft />
                Back to registry
              </Link>
            </Button>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="break-words text-3xl font-semibold tracking-normal">{vault.name}</h1>
                <Badge variant={vault.active ? "default" : "secondary"}>{vault.active ? "Active" : "Inactive"}</Badge>
                <Badge variant="outline">{vault.symbol}</Badge>
                <Badge variant="outline">{vault.vaultTypeName}</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span>Earn</span>
                <span>/</span>
                <span>Vaults</span>
                <span>/</span>
                <span className="text-foreground">{vault.symbol}</span>
              </div>
              <ExplorerChip value={vault.address} />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={login}>
              <Wallet />
              {authenticated ? "Connected" : "Connect"}
            </Button>
            <Button disabled={isFetching} onClick={() => refetch()}>
              {isFetching ? <Spinner /> : <RefreshCw />}
              Refresh
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-4">
          <MetricPanel
            featured
            label="TVL"
            value={`${formatTokenAmount(vault.latestTvl, assetDecimals)} ${assetSymbol}`}
            detail="Latest indexed metric"
          />
          <MetricPanel
            label="Share Price"
            value={formatSharePrice(vault.latestSharePrice, assetDecimals, {
              totalAssets: vault.totalAssets,
              totalSupply: vault.totalSupply
            })}
            detail={`Report #${vault.valuationOracle.latestReportId}`}
          />
          <MetricPanel
            label="Pending Deposits"
            value={formatTokenAmount(pendingDepositAssets.toString(), assetDecimals)}
            detail={`${assetSymbol} in recent requests`}
          />
          <MetricPanel
            label="Pending Redeems"
            value={formatTokenAmount(pendingRedeemShares.toString(), 18)}
            detail="Shares in recent requests"
          />
        </div>
      </section>

      <section className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0 space-y-6">
          <section className="min-w-0">
            <div className="mb-5">
              <h2 className="text-base font-medium">Factsheet</h2>
              <p className="mt-1 text-sm text-muted-foreground">Contract, accounting, fee, and oracle configuration.</p>
            </div>
            <div className="border-t">
              <FactsheetRow
                icon={BarChart3}
                title="Accounting"
                description="Current balance sheet and indexed flow metrics."
              >
                <InfoPairs
                  items={[
                    ["Total Assets", `${formatTokenAmount(vault.totalAssets, assetDecimals)} ${assetSymbol}`],
                    ["Total Supply", formatTokenAmount(vault.totalSupply, 18)],
                    ["Net Flow", `${formatTokenAmount(vault.netFlowAssets, assetDecimals)} ${assetSymbol}`],
                    ["Yield Earned", `${formatTokenAmount(vault.yieldEarnedAssets, assetDecimals)} ${assetSymbol}`]
                  ].map(([label, value]) => ({ label, value }))}
                />
              </FactsheetRow>

              <FactsheetRow
                icon={ShieldCheck}
                title="Fees And Controls"
                description="Admin policy values and current settlement gates."
              >
                <InfoPairs
                  items={[
                    { label: "Deposit Fee", value: formatBps(vault.depositFeeRate) },
                    { label: "Redeem Fee", value: formatBps(vault.redeemFeeRate) },
                    { label: "Performance Fee", value: formatBps(vault.performanceFeeRate) },
                    { label: "Management Fee", value: formatBps(vault.managementFeeRate) },
                    {
                      label: "Deposits",
                      value: vault.depositsPaused ? "Paused" : "Open",
                      status: vault.depositsPaused ? "warning" : "good"
                    },
                    {
                      label: "Redeems",
                      value: vault.redeemsPaused ? "Paused" : "Open",
                      status: vault.redeemsPaused ? "warning" : "good"
                    }
                  ]}
                />
              </FactsheetRow>

              <FactsheetRow
                icon={Layers3}
                title="Infrastructure"
                description="Strategy manager, valuation oracle, and indexer freshness."
              >
                <InfoPairs
                  items={[
                    {
                      label: "Asset",
                      value: vault.asset.symbol ?? "Token",
                      detail: <ExplorerChip value={vault.asset.address} />
                    },
                    {
                      label: "Strategy Manager",
                      value: <ExplorerChip value={vault.strategyManager.address} />,
                      detail: `Debt ${formatTokenAmount(vault.strategyManager.totalStrategyDebt, assetDecimals)} ${assetSymbol}`,
                    },
                    {
                      label: "Valuation Oracle",
                      value: <ExplorerChip value={vault.valuationOracle.address} />,
                      detail: `Quorum ${vault.valuationOracle.oracleQuorum}/${vault.valuationOracle.oracleCount}`,
                    },
                    {
                      label: "Max Report Age",
                      value: `${formatInteger(vault.valuationOracle.maxReportAge)} seconds`,
                      detail: `Updated ${formatDate(vault.valuationOracle.updatedAtTimestamp)}`
                    },
                    {
                      label: "Registered",
                      value: formatDate(vault.registeredAtTimestamp),
                      detail: `Block ${formatInteger(vault.registeredAtBlock)}`
                    }
                  ]}
                />
              </FactsheetRow>
            </div>
          </section>

          <Card>
            <CardHeader className="border-b bg-muted/20">
              <CardTitle>Activity</CardTitle>
              <CardDescription>Reports, strategies, settlements, requests, and metric snapshots.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-hidden">
              <Tabs defaultValue="reports">
                <TabsList variant="line" className="mb-5 max-w-full justify-start overflow-x-auto border-b pb-0">
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                  <TabsTrigger value="strategies">Strategies</TabsTrigger>
                  <TabsTrigger value="settlements">Settlements</TabsTrigger>
                  <TabsTrigger value="requests">Requests</TabsTrigger>
                  <TabsTrigger value="snapshots">Snapshots</TabsTrigger>
                </TabsList>

                <TabsContent value="reports">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Report</TableHead>
                        <TableHead>NAV</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Reporter</TableHead>
                        <TableHead>Computed</TableHead>
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
                            <TableCell>
                              <ExplorerChip value={report.reporter} />
                            </TableCell>
                            <TableCell>{formatDate(report.computedAt)}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5}>No reports indexed yet.</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="strategies">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Adapter</TableHead>
                        <TableHead>Allowed</TableHead>
                        <TableHead>Debt</TableHead>
                        <TableHead>Reported</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.strategies.length ? (
                        data.strategies.map((strategy) => (
                          <TableRow key={strategy.id}>
                            <TableCell>
                              <ExplorerChip value={strategy.address} />
                            </TableCell>
                            <TableCell>
                              <Badge variant={strategy.allowed ? "default" : "secondary"}>
                                {strategy.allowed ? "Allowed" : "Blocked"}
                              </Badge>
                            </TableCell>
                            <TableCell>{formatTokenAmount(strategy.debtAssets, assetDecimals)}</TableCell>
                            <TableCell>{formatTokenAmount(strategy.reportedAssets, assetDecimals)}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={4}>No strategies indexed yet.</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="settlements" className="grid gap-6 lg:grid-cols-2">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Deposit Epoch</TableHead>
                        <TableHead>Assets</TableHead>
                        <TableHead>Shares</TableHead>
                        <TableHead>Report</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.depositEpoches.length ? (
                        data.depositEpoches.map((epoch) => (
                          <TableRow key={epoch.id}>
                            <TableCell>#{epoch.epochId}</TableCell>
                            <TableCell>{formatTokenAmount(epoch.assets, assetDecimals)}</TableCell>
                            <TableCell>{formatTokenAmount(epoch.shares, 18)}</TableCell>
                            <TableCell>#{epoch.reportId}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={4}>No settled deposit epochs.</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Redeem Epoch</TableHead>
                        <TableHead>Shares</TableHead>
                        <TableHead>Assets</TableHead>
                        <TableHead>Report</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.redeemEpoches.length ? (
                        data.redeemEpoches.map((epoch) => (
                          <TableRow key={epoch.id}>
                            <TableCell>#{epoch.epochId}</TableCell>
                            <TableCell>{formatTokenAmount(epoch.shares, 18)}</TableCell>
                            <TableCell>{formatTokenAmount(epoch.assets, assetDecimals)}</TableCell>
                            <TableCell>#{epoch.reportId}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={4}>No settled redeem epochs.</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="requests" className="grid gap-6 lg:grid-cols-2">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Deposit</TableHead>
                        <TableHead>Controller</TableHead>
                        <TableHead>Assets</TableHead>
                        <TableHead>Status</TableHead>
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
                            <TableCell>{formatTokenAmount(request.assets, assetDecimals)}</TableCell>
                            <TableCell>
                              <Badge variant={request.canceled ? "secondary" : "default"}>
                                {request.canceled ? "Canceled" : "Pending"}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={4}>No recent deposit requests.</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Redeem</TableHead>
                        <TableHead>Controller</TableHead>
                        <TableHead>Shares</TableHead>
                        <TableHead>Status</TableHead>
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
                            <TableCell>{formatTokenAmount(request.shares, 18)}</TableCell>
                            <TableCell>
                              <Badge variant={request.canceled ? "secondary" : "default"}>
                                {request.canceled ? "Canceled" : "Pending"}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={4}>No recent redeem requests.</TableCell>
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
                        <TableHead>Share Price</TableHead>
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
                            <TableCell>
                              {formatSharePrice(snapshot.sharePrice, assetDecimals, {
                                totalAssets: snapshot.totalAssets,
                                totalSupply: snapshot.totalSupply
                              })}
                            </TableCell>
                            <TableCell>
                              <ExplorerChip entity="tx" value={snapshot.transactionHash} />
                            </TableCell>
                            <TableCell>{formatDate(snapshot.blockTimestamp)}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6}>No snapshots indexed yet.</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <aside className="min-w-0 space-y-6 lg:sticky lg:top-20 lg:self-start">
          <Card className="border-primary/30">
            <CardHeader className="border-b bg-muted/20">
              <CardTitle>Operations</CardTitle>
              <CardDescription>Prepare admin actions for the connected signer.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="settle">
                <TabsList className="mb-4">
                  <TabsTrigger value="settle">Settle</TabsTrigger>
                  <TabsTrigger value="report">Report</TabsTrigger>
                </TabsList>
                <TabsContent value="settle">
                  <form className="space-y-4" onSubmit={handleSettleSubmit}>
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
                  </form>
                </TabsContent>
                <TabsContent value="report">
                  <form className="space-y-4" onSubmit={handleReportSubmit}>
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
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b bg-muted/20">
              <CardTitle>System State</CardTitle>
              <CardDescription>Recipients, latest snapshot, and indexer status.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Fee Recipient", value: <ExplorerChip value={vault.feeRecipient} /> },
                { label: "Protocol Fee Recipient", value: <ExplorerChip value={vault.protocolFeeRecipient} /> },
                {
                  label: "Last Snapshot",
                  value: currentSnapshot
                    ? `${currentSnapshot.source} at ${formatDate(currentSnapshot.blockTimestamp)}`
                    : "--"
                }
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
              <Separator />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BarChart3 />
                Block {formatInteger(data._meta?.block.number)}
              </div>
              <Badge variant={data._meta?.hasIndexingErrors ? "destructive" : "secondary"}>
                {data._meta?.hasIndexingErrors ? "Indexing errors" : "Indexer healthy"}
              </Badge>
            </CardContent>
          </Card>
        </aside>
      </section>
    </PageContainer>
  );
}
