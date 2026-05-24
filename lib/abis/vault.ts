import type { Abi } from "viem";

// ABI fragment sourced from /Users/forever9/Code/venzo/venzo-city-contracts/out/FullyAsyncVault.sol/FullyAsyncVault.json.
export const vaultAbi = [
  {
    type: "function",
    name: "closeDepositEpoch",
    inputs: [{ name: "epochId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "closeRedeemEpoch",
    inputs: [{ name: "epochId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "settleDepositEpoch",
    inputs: [{ name: "epochId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "shares", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "settleRedeemEpoch",
    inputs: [{ name: "epochId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "assets", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "totalAssets",
    inputs: [],
    outputs: [{ name: "managedAssets", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "activeNavAssets",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "trustedAssetsPerShare",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "availableIdleAssetsForStrategy",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalPendingDepositAssets",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "depositEpochDuration",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "redeemEpochDuration",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalClaimableRedeemAssets",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalClaimableRedeemNetShares",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "activeShareSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "cachedActiveNav",
    inputs: [],
    outputs: [
      { name: "assets", type: "uint256", internalType: "uint256" },
      { name: "reportId", type: "uint256", internalType: "uint256" },
      { name: "oracle", type: "address", internalType: "address" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "currentRedeemEpochId",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "redeemEpoch",
    inputs: [{ name: "epochId", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ISettlementModule.RedeemEpoch",
        components: [
          { name: "totalPendingShares", type: "uint256", internalType: "uint256" },
          { name: "openedAt", type: "uint256", internalType: "uint256" },
          { name: "reportId", type: "uint256", internalType: "uint256" },
          { name: "settledAssetsPerShare", type: "uint256", internalType: "uint256" },
          { name: "redeemFeeRate", type: "uint32", internalType: "uint32" },
          { name: "protocolFeeRate", type: "uint32", internalType: "uint32" },
          { name: "closedAt", type: "uint256", internalType: "uint256" },
          { name: "settledAt", type: "uint256", internalType: "uint256" },
          { name: "status", type: "uint8", internalType: "enum ISettlementModule.RedeemEpochStatus" }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "asset",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "strategyManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IStrategyManager" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "feeManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IFeeManager" }],
    stateMutability: "view"
  }
] as const satisfies Abi;
