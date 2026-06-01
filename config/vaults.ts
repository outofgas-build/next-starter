import type { Address, Chain } from "viem";
import { base, bsc, monad } from "viem/chains";
import { getSubgraphUrl } from "@/config/subgraph";

export type VaultConfig = {
  id: string;
  address: Address;
  vaultType: "syncDepositAsyncRedeem" | "fullyAsync";
  chain: Chain;
  subgraphUrl: string;
  rpcUrl?: string;
  explorerUrl: string;
};

function getEnv(name: string) {
  return process.env[name] || undefined;
}

const baseRpcUrl = getEnv("NEXT_PUBLIC_BASE_RPC_URL") ?? getEnv("NEXT_PUBLIC_CHAIN_RPC_URL");
const bscRpcUrl = getEnv("NEXT_PUBLIC_BSC_RPC_URL");
const monadRpcUrl = getEnv("NEXT_PUBLIC_MONAD_RPC_URL");

export const VAULT_CONFIGS: VaultConfig[] = [
  {
    id: "MSTAT",
    address: "0xd6798b9e2aBb7Ad71398d68C823bCba10929D37c",
    vaultType: "syncDepositAsyncRedeem",
    chain: base,
    subgraphUrl: getSubgraphUrl(base.id),
    rpcUrl: baseRpcUrl,
    explorerUrl: base.blockExplorers.default.url
  },
  {
    id: "vQuant",
    address: "0x2254d7Ee4C0312F3846d2fFF07b7CE3E666897cc",
    vaultType: "syncDepositAsyncRedeem",
    chain: bsc,
    subgraphUrl: getSubgraphUrl(bsc.id),
    rpcUrl: bscRpcUrl,
    explorerUrl: bsc.blockExplorers.default.url
  },
  {
    id: "vUSD",
    address: "0x16580F682845d578d2b358F759D3d878690Be558",
    vaultType: "syncDepositAsyncRedeem",
    chain: monad,
    subgraphUrl: getSubgraphUrl(monad.id),
    rpcUrl: monadRpcUrl,
    explorerUrl: monad.blockExplorers.default.url
  }
];

export function getVaultConfigByAddress(address?: string) {
  if (!address) return undefined;
  return VAULT_CONFIGS.find((vault) => vault.address.toLowerCase() === address.toLowerCase());
}

export function getVaultConfigsByChain() {
  return VAULT_CONFIGS.reduce<Record<number, VaultConfig[]>>((groups, vault) => {
    groups[vault.chain.id] = [...(groups[vault.chain.id] ?? []), vault];
    return groups;
  }, {});
}
