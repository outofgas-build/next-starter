"use client";

import { useQuery } from "@tanstack/react-query";
import {
  VaultDetailDocument,
  VaultsDashboardDocument,
  type VaultDetailQuery,
  type VaultsDashboardQuery
} from "@/graphql/generated/graphql";
import { fetchGraphQL } from "@/lib/graphql-client";
import { queryKeys } from "@/lib/query-keys";

export function useVaultsDashboard() {
  return useQuery<VaultsDashboardQuery>({
    queryKey: queryKeys.vaults.list(),
    queryFn: () => fetchGraphQL(VaultsDashboardDocument, {}),
    refetchInterval: 15000
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
