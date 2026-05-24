import type { Abi } from "viem";

// ABI fragment sourced from /Users/forever9/Code/venzo/venzo-city-contracts/out/IStrategyManager.sol/IStrategyManager.json.
export const strategyManagerAbi = [
  {
    type: "function",
    name: "addStrategy",
    inputs: [
      { name: "strategy", type: "address", internalType: "address" },
      { name: "kind", type: "uint8", internalType: "enum IStrategyManager.StrategyKind" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "allocateToStrategy",
    inputs: [
      { name: "strategy", type: "address", internalType: "address" },
      { name: "assets", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "returnFromStrategy",
    inputs: [
      { name: "strategy", type: "address", internalType: "address" },
      { name: "assets", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "totalStrategyDebt",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  }
] as const satisfies Abi;
