import { base, bsc, monad } from "viem/chains";

export const subgraphUrlsByChainId: Record<number, string> = {
  [base.id]:
    "https://api.goldsky.com/api/public/project_cma5n10r0vrqg01tv8ajb6gsc/subgraphs/venzo-subgraph-base/0.2.1/gn",
  [monad.id]:
    "https://api.goldsky.com/api/public/project_cma5n10r0vrqg01tv8ajb6gsc/subgraphs/venzo-subgraph-monad/0.2.0/gn",
  [bsc.id]:
    "https://api.goldsky.com/api/public/project_cma5n10r0vrqg01tv8ajb6gsc/subgraphs/venzo-subgraph-bsc/0.2.0/gn"
};

export function getSubgraphUrl(chainId: number) {
  return subgraphUrlsByChainId[chainId] ?? subgraphUrlsByChainId[base.id];
}

export const subgraphUrl = getSubgraphUrl(base.id);
