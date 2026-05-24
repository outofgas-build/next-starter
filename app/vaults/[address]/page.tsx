"use client";

import { ArrowLeft, BarChart3, Copy, ExternalLink, FileText, RefreshCw, Send, Wallet } from "lucide-react";
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

function formatFeeRate(value?: string | number | null) {
  if (value === undefined || value === null) return "--";
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return String(value);

  return `${(numericValue / 10_000).toLocaleString("en-US", {
    maximumFractionDigits: 4
  })}%`;
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
          <section className="min-w-0 overflow-hidden">
            <Tabs defaultValue="accounting">
              <div className="border-b mb-8">
                <TabsList className="overflow-x-auto [&_button" variant={"line"}>
                  <TabsTrigger value="accounting">Accounting</TabsTrigger>
                  <TabsTrigger value="policy">Policy</TabsTrigger>
                  <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                  <TabsTrigger value="registry">Registry</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="accounting">
                <InfoPairs
                  items={[
                    {
                      label: "Total Assets",
                      value: `${formatTokenAmount(vault.totalAssets, assetDecimals)} ${assetSymbol}`
                    },
                    { label: "Total Supply", value: formatTokenAmount(vault.totalSupply, 18) },
                    {
                      label: "Latest TVL",
                      value: `${formatTokenAmount(vault.latestTvl, assetDecimals)} ${assetSymbol}`
                    },
                    {
                      label: "Latest Share Price",
                      value: formatSharePrice(vault.latestSharePrice, assetDecimals, {
                        totalAssets: vault.totalAssets,
                        totalSupply: vault.totalSupply
                      })
                    },
                    {
                      label: "Cumulative Deposits",
                      value: `${formatTokenAmount(vault.cumulativeDepositAssets, assetDecimals)} ${assetSymbol}`
                    },
                    {
                      label: "Cumulative Withdrawals",
                      value: `${formatTokenAmount(vault.cumulativeWithdrawAssets, assetDecimals)} ${assetSymbol}`
                    },
                    {
                      label: "Net Flow",
                      value: `${formatTokenAmount(vault.netFlowAssets, assetDecimals)} ${assetSymbol}`
                    },
                    {
                      label: "Yield Earned",
                      value: `${formatTokenAmount(vault.yieldEarnedAssets, assetDecimals)} ${assetSymbol}`
                    }
                  ]}
                />
              </TabsContent>

              <TabsContent value="policy">
                <InfoPairs
                  items={[
                    { label: "Deposit Fee", value: formatFeeRate(vault.depositFeeRate) },
                    { label: "Redeem Fee", value: formatFeeRate(vault.redeemFeeRate) },
                    { label: "Performance Fee", value: formatFeeRate(vault.performanceFeeRate) },
                    { label: "Protocol Fee", value: formatFeeRate(vault.protocolFeeRate) },
                    { label: "Management Fee", value: formatFeeRate(vault.managementFeeRate) },
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
                    { label: "Fee Recipient", value: <ExplorerChip value={vault.feeRecipient} /> },
                    { label: "Protocol Fee Recipient", value: <ExplorerChip value={vault.protocolFeeRecipient} /> }
                  ]}
                />
              </TabsContent>

              <TabsContent value="infrastructure">
                <InfoPairs
                  items={[
                    {
                      label: "Asset",
                      value: vault.asset.symbol ?? "Token",
                      detail: (
                        <div className="space-y-1">
                          <div>
                            {vault.asset.name ?? "Unnamed token"} · {formatInteger(vault.asset.decimals)} decimals
                          </div>
                          <ExplorerChip value={vault.asset.address} />
                        </div>
                      )
                    },
                    {
                      label: "Strategy Manager",
                      value: <ExplorerChip value={vault.strategyManager.address} />,
                      detail: (
                        <div className="space-y-1">
                          <div>
                            Debt {formatTokenAmount(vault.strategyManager.totalStrategyDebt, assetDecimals)}{" "}
                            {assetSymbol}
                          </div>
                          <div>
                            Reported{" "}
                            {formatTokenAmount(vault.strategyManager.totalStrategyReportedAssets, assetDecimals)}{" "}
                            {assetSymbol}
                          </div>
                          <div>
                            Max debt {formatTokenAmount(vault.strategyManager.maxTotalStrategyDebt, assetDecimals)}{" "}
                            {assetSymbol}
                          </div>
                        </div>
                      )
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
                    },
                    {
                      label: "Valuation Oracle",
                      value: <ExplorerChip value={vault.valuationOracle.address} />,
                      detail: `Quorum ${vault.valuationOracle.oracleQuorum}/${vault.valuationOracle.oracleCount}`
                    },
                    {
                      label: "Latest Report",
                      value: `#${vault.valuationOracle.latestReportId}`,
                      detail: `Updated ${formatDate(vault.valuationOracle.updatedAtTimestamp)}`
                    },
                    {
                      label: "Max Report Age",
                      value: `${formatInteger(vault.valuationOracle.maxReportAge)} seconds`
                    },
                    {
                      label: "Max Oracle Change",
                      value: formatBps(vault.valuationOracle.maxChangeBps)
                    },
                    {
                      label: "Metadata Hash",
                      value: vault.valuationOracle.requireReportMetadataHash ? "Required" : "Optional",
                      status: vault.valuationOracle.requireReportMetadataHash ? "neutral" : "good"
                    }
                  ]}
                />
              </TabsContent>

              <TabsContent value="registry">
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
              </TabsContent>
            </Tabs>
          </section>

          <Card>
            <CardHeader className="border-b bg-muted/20">
              <CardTitle>Activity</CardTitle>
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
                </TabsContent>

                <TabsContent value="strategies">
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
                </TabsContent>

                <TabsContent value="settlements" className="grid gap-6 lg:grid-cols-2">
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

                <TabsContent value="requests" className="grid gap-6 lg:grid-cols-2">
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
