import type { Abi } from "viem";

// ABI fragment sourced from /Users/forever9/Code/venzo/venzo-city-contracts/src/oracles/ReportOracle.sol.
export const reportOracleAbi = [
  {
    type: "function",
    name: "submitReport",
    inputs: [
      { name: "externalValueAssets", type: "uint256", internalType: "uint256" },
      { name: "computedAt", type: "uint64", internalType: "uint64" },
      { name: "metadataHash", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [{ name: "reportId", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable"
  }
] as const satisfies Abi;
