"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpRight, RefreshCw, ShieldCheck, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePrivy } from "@privy-io/react-auth";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { DataTable } from "@/components/data-table";
import { PageContainer } from "@/components/page-container";
import type { VaultsDashboardQuery } from "@/graphql/generated/graphql";
import { useVaultsDashboard, useVaultContracts } from "@/hooks/use-vaults";
import {
  formatAddress,
  formatDate,
  formatInteger,
  formatSharePrice,
  formatTokenAmount,
  sumTokenAmounts
} from "@/lib/format";

type VaultRow = VaultsDashboardQuery["vaults"][number];
type DashboardVaultRow = VaultRow & {
  displayTvl: string;
  displayTotalSupply: string;
};

const columns: ColumnDef<DashboardVaultRow>[] = [
  {
    accessorKey: "name",
    header: "Vault",
    cell: ({ row }) => (
      <div>
        <div className="flex items-center gap-2">
          <span className="font-medium">{row.original.name}</span>
          <Badge variant={row.original.active ? "default" : "secondary"}>
            {row.original.active ? "Active" : "Inactive"}
          </Badge>
        </div>
        <div className="font-mono text-xs text-muted-foreground">{formatAddress(row.original.address)}</div>
      </div>
    )
  },
  {
    accessorKey: "symbol",
    header: "Type",
    cell: ({ row }) => (
      <div>
        <div>{row.original.symbol}</div>
        <div className="text-xs text-muted-foreground">{row.original.vaultTypeName}</div>
      </div>
    )
  },
  {
    accessorKey: "displayTvl",
    header: "TVL",
    cell: ({ row }) =>
      `${formatTokenAmount(row.original.displayTvl, row.original.asset.decimals)} ${row.original.asset.symbol ?? ""}`
  },
  {
    accessorKey: "latestSharePrice",
    header: "Share Price",
    cell: ({ row }) =>
      formatSharePrice(row.original.latestSharePrice, row.original.asset.decimals, {
        totalAssets: row.original.displayTvl,
        totalSupply: row.original.displayTotalSupply
      })
  },
  {
    accessorKey: "netFlowAssets",
    header: "Net Flow",
    cell: ({ row }) =>
      `${formatTokenAmount(row.original.netFlowAssets, row.original.asset.decimals)} ${row.original.asset.symbol ?? ""}`
  },
  {
    accessorKey: "latestReportId",
    header: "Oracle",
    cell: ({ row }) => (
      <div>
        <div>Report #{row.original.valuationOracle.latestReportId}</div>
        <div className="text-xs text-muted-foreground">
          {row.original.valuationOracle.oracleQuorum}/{row.original.valuationOracle.oracleCount} quorum
        </div>
      </div>
    )
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => (
      <Button asChild variant="ghost" size="sm">
        <Link href={`/vaults/${row.original.address}`}>
          Open
          <ArrowUpRight />
        </Link>
      </Button>
    )
  }
];

export default function Home() {
  const { login, authenticated } = usePrivy();
  const { data, isLoading, isFetching, refetch, error } = useVaultsDashboard();
  const vaults = data?.vaults ?? [];
  const vaultContractsResults = useVaultContracts(vaults.map((vault) => vault.address));
  const contractByAddress = new Map(
    vaultContractsResults.map((result, index) => [vaults[index]?.address.toLowerCase(), result.data])
  );
  const tableVaults: DashboardVaultRow[] = vaults.map((vault) => {
    const vaultContract = contractByAddress.get(vault.address.toLowerCase());

    return {
      ...vault,
      displayTvl: vaultContract?.totalAssets ?? vault.totalAssets,
      displayTotalSupply: vaultContract?.totalSupply ?? vault.totalSupply
    };
  });
  const registry = data?.vaultRegistries[0];
  const activeVaults = vaults.filter((vault) => vault.active).length;
  const totalTvl = sumTokenAmounts(
    tableVaults.map((vault) => ({
      value: vault.displayTvl,
      decimals: vault.asset.decimals
    }))
  );
  const totalTvlSymbol =
    new Set(vaults.map((vault) => vault.asset.symbol).filter(Boolean)).size === 1
      ? vaults[0]?.asset.symbol
      : "assets";

  return (
    <PageContainer>
      <Card className="border-border bg-card">
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="space-y-4">
              <Image alt="Venzo" height={28} priority src="/logo.webp" width={132} />
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Earn</span>
                  <span>/</span>
                  <span>Admin</span>
                  <span>/</span>
                  <span className="text-foreground">Vault Registry</span>
                </div>
                <CardTitle className="text-3xl">Venzo admin console</CardTitle>
                <CardDescription>
                  Monitor registered vaults, oracle health, settlement state, and strategy accounting from the
                  indexed registry.
                </CardDescription>
              </div>
            </div>
            <CardAction className="flex gap-2">
              <Button variant="outline" onClick={login}>
                <Wallet />
                {authenticated ? "Connected" : "Connect"}
              </Button>
              <Button disabled={isFetching} onClick={() => refetch()}>
                {isFetching ? <Spinner /> : <RefreshCw />}
                Refresh
              </Button>
            </CardAction>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <p className="text-sm text-muted-foreground">Registry</p>
              <p className="mt-1 font-mono text-sm">{formatAddress(registry?.address)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Registered</p>
              <p className="mt-1 text-2xl font-semibold">{registry ? formatInteger(registry.vaultCount) : "--"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Vaults</p>
              <p className="mt-1 text-2xl font-semibold">{activeVaults}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Indexed Block</p>
              <p className="mt-1 text-2xl font-semibold">
                {data?._meta?.block.number ? formatInteger(data._meta.block.number) : "--"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-primary/40 bg-primary text-primary-foreground">
          <CardHeader>
            <CardDescription className="text-primary-foreground/75">Total Assets</CardDescription>
            <CardTitle className="text-4xl">
              {formatTokenAmount(totalTvl, 18)} {totalTvlSymbol}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm text-primary-foreground/75 sm:grid-cols-3">
            <div>
              <p>Data source</p>
              <p className="font-medium text-primary-foreground">Vault totalAssets()</p>
            </div>
            <div>
              <p>Last registry update</p>
              <p className="font-medium text-primary-foreground">{formatDate(registry?.updatedAtTimestamp)}</p>
            </div>
            <div>
              <p>Status</p>
              <p className="font-medium text-primary-foreground">
                {data?._meta?.hasIndexingErrors ? "Indexing errors" : "Healthy"}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>Registry Contract</CardDescription>
            <CardTitle className="font-mono text-base">{formatAddress(registry?.address)}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="text-primary" />
              Canonical vault discovery source
            </div>
            <Separator />
            <p className="break-all font-mono text-xs text-muted-foreground">
              {registry?.address ?? "Loading registry"}
            </p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Vaults</CardTitle>
          <CardDescription>
            All registered vaults with current accounting, oracle quorum, and flow metrics.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-16" />
              ))}
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertTitle>Unable to load vaults</AlertTitle>
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          ) : (
            <DataTable columns={columns} data={tableVaults} />
          )}
        </CardContent>
      </Card>
    </PageContainer>
  );
}
