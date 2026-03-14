"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { usePrivy } from "@privy-io/react-auth";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DEFAULT_MIN_REALIZED_PNL,
  useUserPositions
} from "@/hooks/use-user-positions";
import type { PolymarketUserPositionsQuery } from "@/graphql/generated/graphql";

type UserPositionRow = PolymarketUserPositionsQuery["userPositions"][number];

function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function formatNumberish(value: unknown) {
  return String(value);
}

const columns: ColumnDef<UserPositionRow>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => (
      <div className="space-y-1">
        <p className="font-medium">{formatAddress(row.original.user)}</p>
        <p className="text-muted-foreground">{row.original.user}</p>
      </div>
    )
  },
  {
    accessorKey: "tokenId",
    header: "Token ID",
    cell: ({ row }) => (
      <span className="block max-w-[180px] truncate">
        {formatNumberish(row.original.tokenId)}
      </span>
    )
  },
  {
    accessorKey: "realizedPnl",
    header: "Realized PnL",
    cell: ({ row }) => formatNumberish(row.original.realizedPnl)
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => formatNumberish(row.original.amount)
  },
  {
    accessorKey: "avgPrice",
    header: "Avg Price",
    cell: ({ row }) => formatNumberish(row.original.avgPrice)
  },
  {
    accessorKey: "totalBought",
    header: "Total Bought",
    cell: ({ row }) => formatNumberish(row.original.totalBought)
  }
];

export default function Home() {
  const { login } = usePrivy();

  const { data, isLoading, isFetching, refetch, error } = useUserPositions({
    minRealizedPnl: DEFAULT_MIN_REALIZED_PNL
  });
  const positions = data?.userPositions ?? [];

  return (
    <div className="container mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-8">
      <div className="flex flex-wrap items-center gap-4">
        <Button onClick={() => toast.success("Next starter")}>Toast</Button>
        <Button onClick={login}>Login</Button>
        <Button disabled={isFetching} onClick={() => refetch()}>
          {isFetching && <Spinner />}
          Refetch positions
        </Button>
      </div>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Homepage data</p>
            <h1 className="text-2xl font-semibold tracking-tight">User Positions</h1>
            <p className="text-sm text-muted-foreground">
              Showing positions with realized PnL greater than{" "}
              {DEFAULT_MIN_REALIZED_PNL.toLocaleString()}.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            {isLoading ? "Loading..." : `${positions.length} positions`}
          </div>
        </div>

        {isLoading ? (
          <div className="mt-6 space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-24 rounded-xl bg-foreground/5"
              />
            ))}
          </div>
        ) : error ? (
          <div className="mt-6 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
            {error.message}
          </div>
        ) : (
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <DataTable
              columns={columns}
              data={positions}
              defaultSort={[{ id: "realizedPnl", desc: true }]}
            />
          </div>
        )}
      </section>
    </div>
  );
}
