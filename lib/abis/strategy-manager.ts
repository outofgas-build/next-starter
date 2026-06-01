import type { Abi } from "viem";

// ABI fragment sourced from /Users/forever9/Code/venzo/venzo-city-contracts/out/OffchainStrategyManager.sol/OffchainStrategyManager.json.
export const strategyManagerAbi = [
  {
    type: "function",
    name: "addStrategy",
    inputs: [{ name: "strategy", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "allocate",
    inputs: [
      { name: "strategy", type: "address", internalType: "address" },
      { name: "assets", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "returnAssets",
    inputs: [
      { name: "strategy", type: "address", internalType: "address" },
      { name: "assets", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "totalAllocation",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalAllocationCap",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "strategyAllocationPaused",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  }
] as const satisfies Abi;
