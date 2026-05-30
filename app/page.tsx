"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpRight, Network, RefreshCw, ShieldCheck, Wallet } from "lucide-react";
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
import { VAULT_CONFIGS, type ConfiguredVaultRow, useVaultsDashboard } from "@/hooks/use-vaults";
import {
  formatAddress,
  formatInteger,
  formatSharePrice,
  formatTokenAmount,
  sumTokenAmounts
} from "@/lib/format";

type VaultRow = ConfiguredVaultRow;

const columns: ColumnDef<VaultRow>[] = [
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
        <div className="text-xs text-muted-foreground">{row.original.configuredChain.name}</div>
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
    accessorKey: "totalAssets",
    header: "TVL",
    cell: ({ row }) =>
      `${formatTokenAmount(row.original.totalAssets, row.original.asset.decimals)} ${row.original.asset.symbol ?? ""}`
  },
  {
    accessorKey: "latestSharePrice",
    header: "Share Price",
    cell: ({ row }) =>
      formatSharePrice(row.original.latestSharePrice, row.original.asset.decimals, {
        totalAssets: row.original.totalAssets,
        totalSupply: row.original.totalSupply
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
  const activeVaults = vaults.filter((vault) => vault.active).length;
  const configuredChains = new Set(VAULT_CONFIGS.map((vault) => vault.chain.id)).size;
  const totalTvl = sumTokenAmounts(
    vaults.map((vault) => ({
      value: vault.totalAssets,
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
                  <span className="text-foreground">Configured Vaults</span>
                </div>
                <CardTitle className="text-3xl">Venzo admin console</CardTitle>
                <CardDescription>
                  Monitor configured vaults across chains, including oracle health, settlement state, and strategy
                  accounting.
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
              <p className="text-sm text-muted-foreground">Configured Chains</p>
              <p className="mt-1 text-2xl font-semibold">{configuredChains}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Configured Vaults</p>
              <p className="mt-1 text-2xl font-semibold">{VAULT_CONFIGS.length}</p>
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
              <p className="font-medium text-primary-foreground">Configured vaults</p>
            </div>
            <div>
              <p>Chains</p>
              <p className="font-medium text-primary-foreground">{configuredChains}</p>
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
            <CardDescription>Vault Configuration</CardDescription>
            <CardTitle className="text-base">{VAULT_CONFIGS.length} configured vaults</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="text-primary" />
              Canonical admin discovery source
            </div>
            <Separator />
            <div className="space-y-2 text-xs text-muted-foreground">
              {VAULT_CONFIGS.map((vault) => (
                <div className="flex items-center justify-between gap-3" key={`${vault.chain.id}:${vault.address}`}>
                  <span className="inline-flex items-center gap-1.5">
                    <Network className="size-3.5" />
                    {vault.chain.name}
                  </span>
                  <span className="font-mono">{formatAddress(vault.address)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Vaults</CardTitle>
          <CardDescription>
            Configured vaults with current accounting, oracle quorum, and flow metrics.
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
            <DataTable columns={columns} data={vaults} />
          )}
        </CardContent>
      </Card>
    </PageContainer>
  );
}
