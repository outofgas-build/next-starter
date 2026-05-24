/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /** 8 bytes signed integer */
  Int8: { input: any; output: any; }
  /** A string representation of microseconds UNIX timestamp (16 digits) */
  Timestamp: { input: any; output: any; }
};

/** Indicates whether the current, partially filled bucket should be included in the response. Defaults to `exclude` */
export enum Aggregation_Current {
  /** Exclude the current, partially filled bucket from the response */
  Exclude = 'exclude',
  /** Include the current, partially filled bucket in the response */
  Include = 'include'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type DepositEpoch = {
  __typename?: 'DepositEpoch';
  assets: Scalars['BigInt']['output'];
  assetsPerShare: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  epochId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  reportId: Scalars['BigInt']['output'];
  shares: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vault: Vault;
};

export type DepositEpoch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DepositEpoch_Filter>>>;
  assets?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assets_not?: InputMaybe<Scalars['BigInt']['input']>;
  assets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epochId?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epochId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_not?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DepositEpoch_Filter>>>;
  reportId?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum DepositEpoch_OrderBy {
  Assets = 'assets',
  AssetsPerShare = 'assetsPerShare',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  EpochId = 'epochId',
  Id = 'id',
  ReportId = 'reportId',
  Shares = 'shares',
  TransactionHash = 'transactionHash',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets'
}

export type DepositRequest = {
  __typename?: 'DepositRequest';
  assets: Scalars['BigInt']['output'];
  canceled: Scalars['Boolean']['output'];
  controller: Scalars['Bytes']['output'];
  createdAtBlock: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtTransaction: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  requestId: Scalars['BigInt']['output'];
  sender: Scalars['Bytes']['output'];
  updatedAtBlock: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  vault: Vault;
};

export type DepositRequest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DepositRequest_Filter>>>;
  assets?: InputMaybe<Scalars['BigInt']['input']>;
  assets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assets_not?: InputMaybe<Scalars['BigInt']['input']>;
  assets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  canceled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  canceled_not?: InputMaybe<Scalars['Boolean']['input']>;
  canceled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  controller?: InputMaybe<Scalars['Bytes']['input']>;
  controller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  controller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  controller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  controller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  controller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  controller_not?: InputMaybe<Scalars['Bytes']['input']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTransaction?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_gt?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_gte?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdAtTransaction_lt?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_lte?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_not?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DepositRequest_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_not?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  updatedAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum DepositRequest_OrderBy {
  Assets = 'assets',
  Canceled = 'canceled',
  Controller = 'controller',
  CreatedAtBlock = 'createdAtBlock',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtTransaction = 'createdAtTransaction',
  Id = 'id',
  Owner = 'owner',
  RequestId = 'requestId',
  Sender = 'sender',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  depositEpoch?: Maybe<DepositEpoch>;
  depositEpoches: Array<DepositEpoch>;
  depositRequest?: Maybe<DepositRequest>;
  depositRequests: Array<DepositRequest>;
  redeemEpoch?: Maybe<RedeemEpoch>;
  redeemEpoches: Array<RedeemEpoch>;
  redeemRequest?: Maybe<RedeemRequest>;
  redeemRequests: Array<RedeemRequest>;
  strategies: Array<Strategy>;
  strategy?: Maybe<Strategy>;
  strategyManager?: Maybe<StrategyManager>;
  strategyManagers: Array<StrategyManager>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  valuationOracle?: Maybe<ValuationOracle>;
  valuationOracles: Array<ValuationOracle>;
  valuationReport?: Maybe<ValuationReport>;
  valuationReports: Array<ValuationReport>;
  vault?: Maybe<Vault>;
  vaultMetricSnapshot?: Maybe<VaultMetricSnapshot>;
  vaultMetricSnapshots: Array<VaultMetricSnapshot>;
  vaultRegistration?: Maybe<VaultRegistration>;
  vaultRegistrations: Array<VaultRegistration>;
  vaultRegistries: Array<VaultRegistry>;
  vaultRegistry?: Maybe<VaultRegistry>;
  vaultSharePriceSnapshot?: Maybe<VaultSharePriceSnapshot>;
  vaultSharePriceSnapshots: Array<VaultSharePriceSnapshot>;
  vaults: Array<Vault>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryDepositEpochArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDepositEpochesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositEpoch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DepositEpoch_Filter>;
};


export type QueryDepositRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDepositRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DepositRequest_Filter>;
};


export type QueryRedeemEpochArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRedeemEpochesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RedeemEpoch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RedeemEpoch_Filter>;
};


export type QueryRedeemRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRedeemRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RedeemRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RedeemRequest_Filter>;
};


export type QueryStrategiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Strategy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Strategy_Filter>;
};


export type QueryStrategyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyManager_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryValuationOracleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryValuationOraclesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValuationOracle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValuationOracle_Filter>;
};


export type QueryValuationReportArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryValuationReportsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValuationReport_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValuationReport_Filter>;
};


export type QueryVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultMetricSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultMetricSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultMetricSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultMetricSnapshot_Filter>;
};


export type QueryVaultRegistrationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultRegistrationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultRegistration_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultRegistration_Filter>;
};


export type QueryVaultRegistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultRegistry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultRegistry_Filter>;
};


export type QueryVaultRegistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultSharePriceSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultSharePriceSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultSharePriceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultSharePriceSnapshot_Filter>;
};


export type QueryVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
};

export type RedeemEpoch = {
  __typename?: 'RedeemEpoch';
  assets: Scalars['BigInt']['output'];
  assetsPerShare: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  epochId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  reportId: Scalars['BigInt']['output'];
  shares: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vault: Vault;
};

export type RedeemEpoch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RedeemEpoch_Filter>>>;
  assets?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assets_not?: InputMaybe<Scalars['BigInt']['input']>;
  assets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epochId?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epochId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_not?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RedeemEpoch_Filter>>>;
  reportId?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum RedeemEpoch_OrderBy {
  Assets = 'assets',
  AssetsPerShare = 'assetsPerShare',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  EpochId = 'epochId',
  Id = 'id',
  ReportId = 'reportId',
  Shares = 'shares',
  TransactionHash = 'transactionHash',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets'
}

export type RedeemRequest = {
  __typename?: 'RedeemRequest';
  canceled: Scalars['Boolean']['output'];
  controller: Scalars['Bytes']['output'];
  createdAtBlock: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtTransaction: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  requestId: Scalars['BigInt']['output'];
  sender: Scalars['Bytes']['output'];
  shares: Scalars['BigInt']['output'];
  updatedAtBlock: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  vault: Vault;
};

export type RedeemRequest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RedeemRequest_Filter>>>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  canceled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  canceled_not?: InputMaybe<Scalars['Boolean']['input']>;
  canceled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  controller?: InputMaybe<Scalars['Bytes']['input']>;
  controller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  controller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  controller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  controller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  controller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  controller_not?: InputMaybe<Scalars['Bytes']['input']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTransaction?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_gt?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_gte?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdAtTransaction_lt?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_lte?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_not?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdAtTransaction_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RedeemRequest_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_not?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum RedeemRequest_OrderBy {
  Canceled = 'canceled',
  Controller = 'controller',
  CreatedAtBlock = 'createdAtBlock',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtTransaction = 'createdAtTransaction',
  Id = 'id',
  Owner = 'owner',
  RequestId = 'requestId',
  Sender = 'sender',
  Shares = 'shares',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets'
}

export type Strategy = {
  __typename?: 'Strategy';
  address: Scalars['Bytes']['output'];
  allowed: Scalars['Boolean']['output'];
  createdAtBlock: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  debtAssets: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  kind: Scalars['Int']['output'];
  manager: StrategyManager;
  maxDebtAssets: Scalars['BigInt']['output'];
  reportedAssets: Scalars['BigInt']['output'];
  updatedAtBlock: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  vault: Vault;
};

export type StrategyManager = {
  __typename?: 'StrategyManager';
  address: Scalars['Bytes']['output'];
  allocationPaused: Scalars['Boolean']['output'];
  asset: Token;
  createdAtBlock: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  executionPaused: Scalars['Boolean']['output'];
  id: Scalars['Bytes']['output'];
  maxTotalStrategyDebt: Scalars['BigInt']['output'];
  totalStrategyDebt: Scalars['BigInt']['output'];
  totalStrategyReportedAssets: Scalars['BigInt']['output'];
  updatedAtBlock: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  vault: Vault;
};

export type StrategyManager_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  allocationPaused?: InputMaybe<Scalars['Boolean']['input']>;
  allocationPaused_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  allocationPaused_not?: InputMaybe<Scalars['Boolean']['input']>;
  allocationPaused_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<StrategyManager_Filter>>>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Token_Filter>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionPaused?: InputMaybe<Scalars['Boolean']['input']>;
  executionPaused_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  executionPaused_not?: InputMaybe<Scalars['Boolean']['input']>;
  executionPaused_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  maxTotalStrategyDebt?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxTotalStrategyDebt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebt_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StrategyManager_Filter>>>;
  totalStrategyDebt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStrategyDebt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStrategyReportedAssets?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStrategyReportedAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum StrategyManager_OrderBy {
  Address = 'address',
  AllocationPaused = 'allocationPaused',
  Asset = 'asset',
  AssetAddress = 'asset__address',
  AssetDecimals = 'asset__decimals',
  AssetId = 'asset__id',
  AssetName = 'asset__name',
  AssetSymbol = 'asset__symbol',
  CreatedAtBlock = 'createdAtBlock',
  CreatedAtTimestamp = 'createdAtTimestamp',
  ExecutionPaused = 'executionPaused',
  Id = 'id',
  MaxTotalStrategyDebt = 'maxTotalStrategyDebt',
  TotalStrategyDebt = 'totalStrategyDebt',
  TotalStrategyReportedAssets = 'totalStrategyReportedAssets',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets'
}

export type Strategy_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  allowed?: InputMaybe<Scalars['Boolean']['input']>;
  allowed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  allowed_not?: InputMaybe<Scalars['Boolean']['input']>;
  allowed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Strategy_Filter>>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  debtAssets?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  debtAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  kind?: InputMaybe<Scalars['Int']['input']>;
  kind_gt?: InputMaybe<Scalars['Int']['input']>;
  kind_gte?: InputMaybe<Scalars['Int']['input']>;
  kind_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  kind_lt?: InputMaybe<Scalars['Int']['input']>;
  kind_lte?: InputMaybe<Scalars['Int']['input']>;
  kind_not?: InputMaybe<Scalars['Int']['input']>;
  kind_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<StrategyManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maxDebtAssets?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxDebtAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Strategy_Filter>>>;
  reportedAssets?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportedAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Strategy_OrderBy {
  Address = 'address',
  Allowed = 'allowed',
  CreatedAtBlock = 'createdAtBlock',
  CreatedAtTimestamp = 'createdAtTimestamp',
  DebtAssets = 'debtAssets',
  Id = 'id',
  Kind = 'kind',
  Manager = 'manager',
  ManagerAddress = 'manager__address',
  ManagerAllocationPaused = 'manager__allocationPaused',
  ManagerCreatedAtBlock = 'manager__createdAtBlock',
  ManagerCreatedAtTimestamp = 'manager__createdAtTimestamp',
  ManagerExecutionPaused = 'manager__executionPaused',
  ManagerId = 'manager__id',
  ManagerMaxTotalStrategyDebt = 'manager__maxTotalStrategyDebt',
  ManagerTotalStrategyDebt = 'manager__totalStrategyDebt',
  ManagerTotalStrategyReportedAssets = 'manager__totalStrategyReportedAssets',
  ManagerUpdatedAtBlock = 'manager__updatedAtBlock',
  ManagerUpdatedAtTimestamp = 'manager__updatedAtTimestamp',
  MaxDebtAssets = 'maxDebtAssets',
  ReportedAssets = 'reportedAssets',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets'
}

export type Token = {
  __typename?: 'Token';
  address: Scalars['Bytes']['output'];
  decimals?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Bytes']['output'];
  name?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  vaults: Array<Vault>;
};


export type TokenVaultsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vault_Filter>;
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaults_?: InputMaybe<Vault_Filter>;
};

export enum Token_OrderBy {
  Address = 'address',
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Vaults = 'vaults'
}

export type ValuationOracle = {
  __typename?: 'ValuationOracle';
  address: Scalars['Bytes']['output'];
  createdAtBlock: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  latestReportId: Scalars['BigInt']['output'];
  maxChangeBps: Scalars['BigInt']['output'];
  maxReportAge: Scalars['BigInt']['output'];
  oracleCount: Scalars['BigInt']['output'];
  oracleQuorum: Scalars['BigInt']['output'];
  requireReportMetadataHash: Scalars['Boolean']['output'];
  updatedAtBlock: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  vault: Vault;
};

export type ValuationOracle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ValuationOracle_Filter>>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  latestReportId?: InputMaybe<Scalars['BigInt']['input']>;
  latestReportId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  latestReportId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  latestReportId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestReportId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  latestReportId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  latestReportId_not?: InputMaybe<Scalars['BigInt']['input']>;
  latestReportId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxChangeBps?: InputMaybe<Scalars['BigInt']['input']>;
  maxChangeBps_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxChangeBps_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxChangeBps_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxChangeBps_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxChangeBps_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxChangeBps_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxChangeBps_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxReportAge?: InputMaybe<Scalars['BigInt']['input']>;
  maxReportAge_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxReportAge_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxReportAge_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxReportAge_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxReportAge_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxReportAge_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxReportAge_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ValuationOracle_Filter>>>;
  oracleCount?: InputMaybe<Scalars['BigInt']['input']>;
  oracleCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleQuorum?: InputMaybe<Scalars['BigInt']['input']>;
  oracleQuorum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleQuorum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleQuorum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleQuorum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleQuorum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleQuorum_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleQuorum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requireReportMetadataHash?: InputMaybe<Scalars['Boolean']['input']>;
  requireReportMetadataHash_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  requireReportMetadataHash_not?: InputMaybe<Scalars['Boolean']['input']>;
  requireReportMetadataHash_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  updatedAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ValuationOracle_OrderBy {
  Address = 'address',
  CreatedAtBlock = 'createdAtBlock',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  LatestReportId = 'latestReportId',
  MaxChangeBps = 'maxChangeBps',
  MaxReportAge = 'maxReportAge',
  OracleCount = 'oracleCount',
  OracleQuorum = 'oracleQuorum',
  RequireReportMetadataHash = 'requireReportMetadataHash',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets'
}

export type ValuationReport = {
  __typename?: 'ValuationReport';
  assetsPerShare?: Maybe<Scalars['BigInt']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  computedAt: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  metadataHash: Scalars['Bytes']['output'];
  navAssets: Scalars['BigInt']['output'];
  oracle: ValuationOracle;
  reportId: Scalars['BigInt']['output'];
  reporter: Scalars['Bytes']['output'];
  submittedAt: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vault: Vault;
};

export type ValuationReport_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ValuationReport_Filter>>>;
  assetsPerShare?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  computedAt?: InputMaybe<Scalars['BigInt']['input']>;
  computedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  computedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  computedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  computedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  computedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  computedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  computedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadataHash?: InputMaybe<Scalars['Bytes']['input']>;
  metadataHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  metadataHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  metadataHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  metadataHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadataHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  metadataHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  metadataHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  metadataHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  navAssets?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ValuationReport_Filter>>>;
  oracle?: InputMaybe<Scalars['String']['input']>;
  oracle_?: InputMaybe<ValuationOracle_Filter>;
  oracle_contains?: InputMaybe<Scalars['String']['input']>;
  oracle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_gt?: InputMaybe<Scalars['String']['input']>;
  oracle_gte?: InputMaybe<Scalars['String']['input']>;
  oracle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oracle_lt?: InputMaybe<Scalars['String']['input']>;
  oracle_lte?: InputMaybe<Scalars['String']['input']>;
  oracle_not?: InputMaybe<Scalars['String']['input']>;
  oracle_not_contains?: InputMaybe<Scalars['String']['input']>;
  oracle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oracle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reportId?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reporter?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_gt?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_gte?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  reporter_lt?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_lte?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_not?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  submittedAt?: InputMaybe<Scalars['BigInt']['input']>;
  submittedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  submittedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  submittedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  submittedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  submittedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  submittedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  submittedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ValuationReport_OrderBy {
  AssetsPerShare = 'assetsPerShare',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ComputedAt = 'computedAt',
  Id = 'id',
  MetadataHash = 'metadataHash',
  NavAssets = 'navAssets',
  Oracle = 'oracle',
  OracleAddress = 'oracle__address',
  OracleCreatedAtBlock = 'oracle__createdAtBlock',
  OracleCreatedAtTimestamp = 'oracle__createdAtTimestamp',
  OracleId = 'oracle__id',
  OracleLatestReportId = 'oracle__latestReportId',
  OracleMaxChangeBps = 'oracle__maxChangeBps',
  OracleMaxReportAge = 'oracle__maxReportAge',
  OracleOracleCount = 'oracle__oracleCount',
  OracleOracleQuorum = 'oracle__oracleQuorum',
  OracleRequireReportMetadataHash = 'oracle__requireReportMetadataHash',
  OracleUpdatedAtBlock = 'oracle__updatedAtBlock',
  OracleUpdatedAtTimestamp = 'oracle__updatedAtTimestamp',
  ReportId = 'reportId',
  Reporter = 'reporter',
  SubmittedAt = 'submittedAt',
  TransactionHash = 'transactionHash',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets'
}

export type Vault = {
  __typename?: 'Vault';
  active: Scalars['Boolean']['output'];
  address: Scalars['Bytes']['output'];
  asset: Token;
  cumulativeDepositAssets: Scalars['BigInt']['output'];
  cumulativeWithdrawAssets: Scalars['BigInt']['output'];
  depositFeeRate?: Maybe<Scalars['BigInt']['output']>;
  depositsPaused?: Maybe<Scalars['Boolean']['output']>;
  feeRecipient?: Maybe<Scalars['Bytes']['output']>;
  id: Scalars['Bytes']['output'];
  latestSharePrice: Scalars['BigInt']['output'];
  latestTvl: Scalars['BigInt']['output'];
  managementFeeRate?: Maybe<Scalars['BigInt']['output']>;
  name: Scalars['String']['output'];
  netFlowAssets: Scalars['BigInt']['output'];
  performanceFeeRate?: Maybe<Scalars['BigInt']['output']>;
  protocolFeeRate?: Maybe<Scalars['BigInt']['output']>;
  protocolFeeRecipient?: Maybe<Scalars['Bytes']['output']>;
  redeemFeeRate?: Maybe<Scalars['BigInt']['output']>;
  redeemsPaused?: Maybe<Scalars['Boolean']['output']>;
  registeredAtBlock: Scalars['BigInt']['output'];
  registeredAtTimestamp: Scalars['BigInt']['output'];
  registeredAtTransaction: Scalars['Bytes']['output'];
  registry: VaultRegistry;
  sharePriceSnapshots: Array<VaultSharePriceSnapshot>;
  snapshots: Array<VaultMetricSnapshot>;
  strategyManager: StrategyManager;
  symbol: Scalars['String']['output'];
  totalAssets: Scalars['BigInt']['output'];
  totalSupply: Scalars['BigInt']['output'];
  updatedAtBlock: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  valuationOracle: ValuationOracle;
  vaultType: Scalars['Int']['output'];
  vaultTypeName: Scalars['String']['output'];
  yieldEarnedAssets: Scalars['BigInt']['output'];
};


export type VaultSharePriceSnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultSharePriceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VaultSharePriceSnapshot_Filter>;
};


export type VaultSnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultMetricSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VaultMetricSnapshot_Filter>;
};

export type VaultMetricSnapshot = {
  __typename?: 'VaultMetricSnapshot';
  assetsPerShare?: Maybe<Scalars['BigInt']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  cumulativeDepositAssets: Scalars['BigInt']['output'];
  cumulativeWithdrawAssets: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  logIndex: Scalars['BigInt']['output'];
  navAssets?: Maybe<Scalars['BigInt']['output']>;
  netFlowAssets: Scalars['BigInt']['output'];
  reportId?: Maybe<Scalars['BigInt']['output']>;
  sharePrice: Scalars['BigInt']['output'];
  source: Scalars['String']['output'];
  totalAssets: Scalars['BigInt']['output'];
  totalSupply: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  tvl: Scalars['BigInt']['output'];
  vault: Vault;
  yieldEarnedAssets: Scalars['BigInt']['output'];
};

export type VaultMetricSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultMetricSnapshot_Filter>>>;
  assetsPerShare?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositAssets?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawAssets?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netFlowAssets?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netFlowAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultMetricSnapshot_Filter>>>;
  reportId?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharePrice?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharePrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  source?: InputMaybe<Scalars['String']['input']>;
  source_contains?: InputMaybe<Scalars['String']['input']>;
  source_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  source_ends_with?: InputMaybe<Scalars['String']['input']>;
  source_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  source_gt?: InputMaybe<Scalars['String']['input']>;
  source_gte?: InputMaybe<Scalars['String']['input']>;
  source_in?: InputMaybe<Array<Scalars['String']['input']>>;
  source_lt?: InputMaybe<Scalars['String']['input']>;
  source_lte?: InputMaybe<Scalars['String']['input']>;
  source_not?: InputMaybe<Scalars['String']['input']>;
  source_not_contains?: InputMaybe<Scalars['String']['input']>;
  source_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  source_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  source_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  source_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  source_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  source_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  source_starts_with?: InputMaybe<Scalars['String']['input']>;
  source_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalAssets?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tvl?: InputMaybe<Scalars['BigInt']['input']>;
  tvl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tvl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tvl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tvl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tvl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tvl_not?: InputMaybe<Scalars['BigInt']['input']>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  yieldEarnedAssets?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yieldEarnedAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VaultMetricSnapshot_OrderBy {
  AssetsPerShare = 'assetsPerShare',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CumulativeDepositAssets = 'cumulativeDepositAssets',
  CumulativeWithdrawAssets = 'cumulativeWithdrawAssets',
  Id = 'id',
  LogIndex = 'logIndex',
  NavAssets = 'navAssets',
  NetFlowAssets = 'netFlowAssets',
  ReportId = 'reportId',
  SharePrice = 'sharePrice',
  Source = 'source',
  TotalAssets = 'totalAssets',
  TotalSupply = 'totalSupply',
  TransactionHash = 'transactionHash',
  Tvl = 'tvl',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  YieldEarnedAssets = 'yieldEarnedAssets'
}

export type VaultRegistration = {
  __typename?: 'VaultRegistration';
  asset: Token;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  registry: VaultRegistry;
  strategyManager: StrategyManager;
  symbol: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  valuationOracle: ValuationOracle;
  vault: Vault;
  vaultType: Scalars['Int']['output'];
};

export type VaultRegistration_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultRegistration_Filter>>>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Token_Filter>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<VaultRegistration_Filter>>>;
  registry?: InputMaybe<Scalars['String']['input']>;
  registry_?: InputMaybe<VaultRegistry_Filter>;
  registry_contains?: InputMaybe<Scalars['String']['input']>;
  registry_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  registry_ends_with?: InputMaybe<Scalars['String']['input']>;
  registry_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registry_gt?: InputMaybe<Scalars['String']['input']>;
  registry_gte?: InputMaybe<Scalars['String']['input']>;
  registry_in?: InputMaybe<Array<Scalars['String']['input']>>;
  registry_lt?: InputMaybe<Scalars['String']['input']>;
  registry_lte?: InputMaybe<Scalars['String']['input']>;
  registry_not?: InputMaybe<Scalars['String']['input']>;
  registry_not_contains?: InputMaybe<Scalars['String']['input']>;
  registry_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  registry_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  registry_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registry_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  registry_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  registry_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registry_starts_with?: InputMaybe<Scalars['String']['input']>;
  registry_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager?: InputMaybe<Scalars['String']['input']>;
  strategyManager_?: InputMaybe<StrategyManager_Filter>;
  strategyManager_contains?: InputMaybe<Scalars['String']['input']>;
  strategyManager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategyManager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager_gt?: InputMaybe<Scalars['String']['input']>;
  strategyManager_gte?: InputMaybe<Scalars['String']['input']>;
  strategyManager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategyManager_lt?: InputMaybe<Scalars['String']['input']>;
  strategyManager_lte?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_contains?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategyManager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategyManager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  valuationOracle?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_?: InputMaybe<ValuationOracle_Filter>;
  valuationOracle_contains?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_ends_with?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_gt?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_gte?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  valuationOracle_lt?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_lte?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_contains?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  valuationOracle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_starts_with?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vaultType?: InputMaybe<Scalars['Int']['input']>;
  vaultType_gt?: InputMaybe<Scalars['Int']['input']>;
  vaultType_gte?: InputMaybe<Scalars['Int']['input']>;
  vaultType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  vaultType_lt?: InputMaybe<Scalars['Int']['input']>;
  vaultType_lte?: InputMaybe<Scalars['Int']['input']>;
  vaultType_not?: InputMaybe<Scalars['Int']['input']>;
  vaultType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum VaultRegistration_OrderBy {
  Asset = 'asset',
  AssetAddress = 'asset__address',
  AssetDecimals = 'asset__decimals',
  AssetId = 'asset__id',
  AssetName = 'asset__name',
  AssetSymbol = 'asset__symbol',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Registry = 'registry',
  RegistryAddress = 'registry__address',
  RegistryCreatedAtBlock = 'registry__createdAtBlock',
  RegistryCreatedAtTimestamp = 'registry__createdAtTimestamp',
  RegistryId = 'registry__id',
  RegistryUpdatedAtBlock = 'registry__updatedAtBlock',
  RegistryUpdatedAtTimestamp = 'registry__updatedAtTimestamp',
  RegistryVaultCount = 'registry__vaultCount',
  StrategyManager = 'strategyManager',
  StrategyManagerAddress = 'strategyManager__address',
  StrategyManagerAllocationPaused = 'strategyManager__allocationPaused',
  StrategyManagerCreatedAtBlock = 'strategyManager__createdAtBlock',
  StrategyManagerCreatedAtTimestamp = 'strategyManager__createdAtTimestamp',
  StrategyManagerExecutionPaused = 'strategyManager__executionPaused',
  StrategyManagerId = 'strategyManager__id',
  StrategyManagerMaxTotalStrategyDebt = 'strategyManager__maxTotalStrategyDebt',
  StrategyManagerTotalStrategyDebt = 'strategyManager__totalStrategyDebt',
  StrategyManagerTotalStrategyReportedAssets = 'strategyManager__totalStrategyReportedAssets',
  StrategyManagerUpdatedAtBlock = 'strategyManager__updatedAtBlock',
  StrategyManagerUpdatedAtTimestamp = 'strategyManager__updatedAtTimestamp',
  Symbol = 'symbol',
  TransactionHash = 'transactionHash',
  ValuationOracle = 'valuationOracle',
  ValuationOracleAddress = 'valuationOracle__address',
  ValuationOracleCreatedAtBlock = 'valuationOracle__createdAtBlock',
  ValuationOracleCreatedAtTimestamp = 'valuationOracle__createdAtTimestamp',
  ValuationOracleId = 'valuationOracle__id',
  ValuationOracleLatestReportId = 'valuationOracle__latestReportId',
  ValuationOracleMaxChangeBps = 'valuationOracle__maxChangeBps',
  ValuationOracleMaxReportAge = 'valuationOracle__maxReportAge',
  ValuationOracleOracleCount = 'valuationOracle__oracleCount',
  ValuationOracleOracleQuorum = 'valuationOracle__oracleQuorum',
  ValuationOracleRequireReportMetadataHash = 'valuationOracle__requireReportMetadataHash',
  ValuationOracleUpdatedAtBlock = 'valuationOracle__updatedAtBlock',
  ValuationOracleUpdatedAtTimestamp = 'valuationOracle__updatedAtTimestamp',
  Vault = 'vault',
  VaultType = 'vaultType',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets'
}

export type VaultRegistry = {
  __typename?: 'VaultRegistry';
  address: Scalars['Bytes']['output'];
  createdAtBlock: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  updatedAtBlock: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  vaultCount: Scalars['BigInt']['output'];
};

export type VaultRegistry_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<VaultRegistry_Filter>>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultRegistry_Filter>>>;
  updatedAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vaultCount?: InputMaybe<Scalars['BigInt']['input']>;
  vaultCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vaultCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  vaultCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VaultRegistry_OrderBy {
  Address = 'address',
  CreatedAtBlock = 'createdAtBlock',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  VaultCount = 'vaultCount'
}

export type VaultSharePriceSnapshot = {
  __typename?: 'VaultSharePriceSnapshot';
  assetsPerShare: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  logIndex: Scalars['BigInt']['output'];
  navAssets?: Maybe<Scalars['BigInt']['output']>;
  reportId?: Maybe<Scalars['BigInt']['output']>;
  sharePrice: Scalars['BigInt']['output'];
  source: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vault: Vault;
};

export type VaultSharePriceSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultSharePriceSnapshot_Filter>>>;
  assetsPerShare?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  navAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultSharePriceSnapshot_Filter>>>;
  reportId?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharePrice?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharePrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharePrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  source?: InputMaybe<Scalars['String']['input']>;
  source_contains?: InputMaybe<Scalars['String']['input']>;
  source_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  source_ends_with?: InputMaybe<Scalars['String']['input']>;
  source_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  source_gt?: InputMaybe<Scalars['String']['input']>;
  source_gte?: InputMaybe<Scalars['String']['input']>;
  source_in?: InputMaybe<Array<Scalars['String']['input']>>;
  source_lt?: InputMaybe<Scalars['String']['input']>;
  source_lte?: InputMaybe<Scalars['String']['input']>;
  source_not?: InputMaybe<Scalars['String']['input']>;
  source_not_contains?: InputMaybe<Scalars['String']['input']>;
  source_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  source_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  source_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  source_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  source_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  source_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  source_starts_with?: InputMaybe<Scalars['String']['input']>;
  source_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum VaultSharePriceSnapshot_OrderBy {
  AssetsPerShare = 'assetsPerShare',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  LogIndex = 'logIndex',
  NavAssets = 'navAssets',
  ReportId = 'reportId',
  SharePrice = 'sharePrice',
  Source = 'source',
  TransactionHash = 'transactionHash',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestTvl = 'vault__latestTvl',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultPerformanceFeeRate = 'vault__performanceFeeRate',
  VaultProtocolFeeRate = 'vault__protocolFeeRate',
  VaultProtocolFeeRecipient = 'vault__protocolFeeRecipient',
  VaultRedeemFeeRate = 'vault__redeemFeeRate',
  VaultRedeemsPaused = 'vault__redeemsPaused',
  VaultRegisteredAtBlock = 'vault__registeredAtBlock',
  VaultRegisteredAtTimestamp = 'vault__registeredAtTimestamp',
  VaultRegisteredAtTransaction = 'vault__registeredAtTransaction',
  VaultSymbol = 'vault__symbol',
  VaultTotalAssets = 'vault__totalAssets',
  VaultTotalSupply = 'vault__totalSupply',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets'
}

export type Vault_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Token_Filter>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cumulativeDepositAssets?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawAssets?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositFeeRate?: InputMaybe<Scalars['BigInt']['input']>;
  depositFeeRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  depositFeeRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  depositFeeRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositFeeRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  depositFeeRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  depositFeeRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  depositFeeRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositsPaused?: InputMaybe<Scalars['Boolean']['input']>;
  depositsPaused_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  depositsPaused_not?: InputMaybe<Scalars['Boolean']['input']>;
  depositsPaused_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  feeRecipient?: InputMaybe<Scalars['Bytes']['input']>;
  feeRecipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  feeRecipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  feeRecipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  feeRecipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  feeRecipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  feeRecipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  feeRecipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  feeRecipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  feeRecipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  latestSharePrice?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestSharePrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestTvl?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestTvl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvl_not?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  managementFeeRate?: InputMaybe<Scalars['BigInt']['input']>;
  managementFeeRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  managementFeeRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  managementFeeRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  managementFeeRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  managementFeeRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  managementFeeRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  managementFeeRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  netFlowAssets?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netFlowAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
  performanceFeeRate?: InputMaybe<Scalars['BigInt']['input']>;
  performanceFeeRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  performanceFeeRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  performanceFeeRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  performanceFeeRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  performanceFeeRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  performanceFeeRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  performanceFeeRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  protocolFeeRate?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  protocolFeeRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  protocolFeeRecipient?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeRecipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeRecipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeRecipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeRecipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  protocolFeeRecipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeRecipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeRecipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeRecipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeeRecipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  redeemFeeRate?: InputMaybe<Scalars['BigInt']['input']>;
  redeemFeeRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemFeeRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemFeeRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redeemFeeRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemFeeRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemFeeRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemFeeRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redeemsPaused?: InputMaybe<Scalars['Boolean']['input']>;
  redeemsPaused_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  redeemsPaused_not?: InputMaybe<Scalars['Boolean']['input']>;
  redeemsPaused_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  registeredAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registeredAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registeredAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registeredAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registeredAtTransaction?: InputMaybe<Scalars['Bytes']['input']>;
  registeredAtTransaction_contains?: InputMaybe<Scalars['Bytes']['input']>;
  registeredAtTransaction_gt?: InputMaybe<Scalars['Bytes']['input']>;
  registeredAtTransaction_gte?: InputMaybe<Scalars['Bytes']['input']>;
  registeredAtTransaction_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  registeredAtTransaction_lt?: InputMaybe<Scalars['Bytes']['input']>;
  registeredAtTransaction_lte?: InputMaybe<Scalars['Bytes']['input']>;
  registeredAtTransaction_not?: InputMaybe<Scalars['Bytes']['input']>;
  registeredAtTransaction_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  registeredAtTransaction_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  registry?: InputMaybe<Scalars['String']['input']>;
  registry_?: InputMaybe<VaultRegistry_Filter>;
  registry_contains?: InputMaybe<Scalars['String']['input']>;
  registry_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  registry_ends_with?: InputMaybe<Scalars['String']['input']>;
  registry_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registry_gt?: InputMaybe<Scalars['String']['input']>;
  registry_gte?: InputMaybe<Scalars['String']['input']>;
  registry_in?: InputMaybe<Array<Scalars['String']['input']>>;
  registry_lt?: InputMaybe<Scalars['String']['input']>;
  registry_lte?: InputMaybe<Scalars['String']['input']>;
  registry_not?: InputMaybe<Scalars['String']['input']>;
  registry_not_contains?: InputMaybe<Scalars['String']['input']>;
  registry_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  registry_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  registry_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registry_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  registry_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  registry_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registry_starts_with?: InputMaybe<Scalars['String']['input']>;
  registry_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sharePriceSnapshots_?: InputMaybe<VaultSharePriceSnapshot_Filter>;
  snapshots_?: InputMaybe<VaultMetricSnapshot_Filter>;
  strategyManager?: InputMaybe<Scalars['String']['input']>;
  strategyManager_?: InputMaybe<StrategyManager_Filter>;
  strategyManager_contains?: InputMaybe<Scalars['String']['input']>;
  strategyManager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategyManager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager_gt?: InputMaybe<Scalars['String']['input']>;
  strategyManager_gte?: InputMaybe<Scalars['String']['input']>;
  strategyManager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategyManager_lt?: InputMaybe<Scalars['String']['input']>;
  strategyManager_lte?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_contains?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategyManager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategyManager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyManager_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategyManager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalAssets?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  valuationOracle?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_?: InputMaybe<ValuationOracle_Filter>;
  valuationOracle_contains?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_ends_with?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_gt?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_gte?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  valuationOracle_lt?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_lte?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_contains?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  valuationOracle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_starts_with?: InputMaybe<Scalars['String']['input']>;
  valuationOracle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultType?: InputMaybe<Scalars['Int']['input']>;
  vaultTypeName?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_contains?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_ends_with?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_gt?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_gte?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vaultTypeName_lt?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_lte?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_not?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_not_contains?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vaultTypeName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_starts_with?: InputMaybe<Scalars['String']['input']>;
  vaultTypeName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultType_gt?: InputMaybe<Scalars['Int']['input']>;
  vaultType_gte?: InputMaybe<Scalars['Int']['input']>;
  vaultType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  vaultType_lt?: InputMaybe<Scalars['Int']['input']>;
  vaultType_lte?: InputMaybe<Scalars['Int']['input']>;
  vaultType_not?: InputMaybe<Scalars['Int']['input']>;
  vaultType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  yieldEarnedAssets?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yieldEarnedAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Vault_OrderBy {
  Active = 'active',
  Address = 'address',
  Asset = 'asset',
  AssetAddress = 'asset__address',
  AssetDecimals = 'asset__decimals',
  AssetId = 'asset__id',
  AssetName = 'asset__name',
  AssetSymbol = 'asset__symbol',
  CumulativeDepositAssets = 'cumulativeDepositAssets',
  CumulativeWithdrawAssets = 'cumulativeWithdrawAssets',
  DepositFeeRate = 'depositFeeRate',
  DepositsPaused = 'depositsPaused',
  FeeRecipient = 'feeRecipient',
  Id = 'id',
  LatestSharePrice = 'latestSharePrice',
  LatestTvl = 'latestTvl',
  ManagementFeeRate = 'managementFeeRate',
  Name = 'name',
  NetFlowAssets = 'netFlowAssets',
  PerformanceFeeRate = 'performanceFeeRate',
  ProtocolFeeRate = 'protocolFeeRate',
  ProtocolFeeRecipient = 'protocolFeeRecipient',
  RedeemFeeRate = 'redeemFeeRate',
  RedeemsPaused = 'redeemsPaused',
  RegisteredAtBlock = 'registeredAtBlock',
  RegisteredAtTimestamp = 'registeredAtTimestamp',
  RegisteredAtTransaction = 'registeredAtTransaction',
  Registry = 'registry',
  RegistryAddress = 'registry__address',
  RegistryCreatedAtBlock = 'registry__createdAtBlock',
  RegistryCreatedAtTimestamp = 'registry__createdAtTimestamp',
  RegistryId = 'registry__id',
  RegistryUpdatedAtBlock = 'registry__updatedAtBlock',
  RegistryUpdatedAtTimestamp = 'registry__updatedAtTimestamp',
  RegistryVaultCount = 'registry__vaultCount',
  SharePriceSnapshots = 'sharePriceSnapshots',
  Snapshots = 'snapshots',
  StrategyManager = 'strategyManager',
  StrategyManagerAddress = 'strategyManager__address',
  StrategyManagerAllocationPaused = 'strategyManager__allocationPaused',
  StrategyManagerCreatedAtBlock = 'strategyManager__createdAtBlock',
  StrategyManagerCreatedAtTimestamp = 'strategyManager__createdAtTimestamp',
  StrategyManagerExecutionPaused = 'strategyManager__executionPaused',
  StrategyManagerId = 'strategyManager__id',
  StrategyManagerMaxTotalStrategyDebt = 'strategyManager__maxTotalStrategyDebt',
  StrategyManagerTotalStrategyDebt = 'strategyManager__totalStrategyDebt',
  StrategyManagerTotalStrategyReportedAssets = 'strategyManager__totalStrategyReportedAssets',
  StrategyManagerUpdatedAtBlock = 'strategyManager__updatedAtBlock',
  StrategyManagerUpdatedAtTimestamp = 'strategyManager__updatedAtTimestamp',
  Symbol = 'symbol',
  TotalAssets = 'totalAssets',
  TotalSupply = 'totalSupply',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  ValuationOracle = 'valuationOracle',
  ValuationOracleAddress = 'valuationOracle__address',
  ValuationOracleCreatedAtBlock = 'valuationOracle__createdAtBlock',
  ValuationOracleCreatedAtTimestamp = 'valuationOracle__createdAtTimestamp',
  ValuationOracleId = 'valuationOracle__id',
  ValuationOracleLatestReportId = 'valuationOracle__latestReportId',
  ValuationOracleMaxChangeBps = 'valuationOracle__maxChangeBps',
  ValuationOracleMaxReportAge = 'valuationOracle__maxReportAge',
  ValuationOracleOracleCount = 'valuationOracle__oracleCount',
  ValuationOracleOracleQuorum = 'valuationOracle__oracleQuorum',
  ValuationOracleRequireReportMetadataHash = 'valuationOracle__requireReportMetadataHash',
  ValuationOracleUpdatedAtBlock = 'valuationOracle__updatedAtBlock',
  ValuationOracleUpdatedAtTimestamp = 'valuationOracle__updatedAtTimestamp',
  VaultType = 'vaultType',
  VaultTypeName = 'vaultTypeName',
  YieldEarnedAssets = 'yieldEarnedAssets'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type VaultsDashboardQueryVariables = Exact<{ [key: string]: never; }>;


export type VaultsDashboardQuery = { __typename?: 'Query', vaultRegistries: Array<{ __typename?: 'VaultRegistry', id: any, address: any, vaultCount: any, createdAtTimestamp: any, updatedAtTimestamp: any }>, vaults: Array<{ __typename?: 'Vault', id: any, address: any, name: string, symbol: string, vaultTypeName: string, active: boolean, totalAssets: any, totalSupply: any, latestSharePrice: any, latestTvl: any, cumulativeDepositAssets: any, cumulativeWithdrawAssets: any, netFlowAssets: any, yieldEarnedAssets: any, registeredAtTimestamp: any, updatedAtTimestamp: any, asset: { __typename?: 'Token', address: any, name?: string | null, symbol?: string | null, decimals?: number | null }, strategyManager: { __typename?: 'StrategyManager', address: any, totalStrategyDebt: any, totalStrategyReportedAssets: any, maxTotalStrategyDebt: any, allocationPaused: boolean, executionPaused: boolean }, valuationOracle: { __typename?: 'ValuationOracle', address: any, latestReportId: any, maxReportAge: any, maxChangeBps: any, oracleCount: any, oracleQuorum: any, requireReportMetadataHash: boolean } }>, _meta?: { __typename?: '_Meta_', hasIndexingErrors: boolean, block: { __typename?: '_Block_', number: number, timestamp?: number | null } } | null };

export type VaultDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  vault?: InputMaybe<Scalars['String']['input']>;
}>;


export type VaultDetailQuery = { __typename?: 'Query', vault?: { __typename?: 'Vault', id: any, address: any, name: string, symbol: string, vaultType: number, vaultTypeName: string, active: boolean, totalAssets: any, totalSupply: any, latestSharePrice: any, latestTvl: any, cumulativeDepositAssets: any, cumulativeWithdrawAssets: any, netFlowAssets: any, yieldEarnedAssets: any, depositFeeRate?: any | null, redeemFeeRate?: any | null, performanceFeeRate?: any | null, protocolFeeRate?: any | null, managementFeeRate?: any | null, feeRecipient?: any | null, protocolFeeRecipient?: any | null, depositsPaused?: boolean | null, redeemsPaused?: boolean | null, registeredAtBlock: any, registeredAtTimestamp: any, registeredAtTransaction: any, updatedAtBlock: any, updatedAtTimestamp: any, asset: { __typename?: 'Token', address: any, name?: string | null, symbol?: string | null, decimals?: number | null }, registry: { __typename?: 'VaultRegistry', address: any, vaultCount: any }, strategyManager: { __typename?: 'StrategyManager', address: any, totalStrategyDebt: any, totalStrategyReportedAssets: any, maxTotalStrategyDebt: any, allocationPaused: boolean, executionPaused: boolean, updatedAtTimestamp: any }, valuationOracle: { __typename?: 'ValuationOracle', address: any, latestReportId: any, maxReportAge: any, maxChangeBps: any, oracleCount: any, oracleQuorum: any, requireReportMetadataHash: boolean, updatedAtTimestamp: any }, snapshots: Array<{ __typename?: 'VaultMetricSnapshot', id: any, source: string, sharePrice: any, tvl: any, totalAssets: any, totalSupply: any, cumulativeDepositAssets: any, cumulativeWithdrawAssets: any, netFlowAssets: any, yieldEarnedAssets: any, assetsPerShare?: any | null, navAssets?: any | null, reportId?: any | null, blockNumber: any, blockTimestamp: any, transactionHash: any }> } | null, valuationReports: Array<{ __typename?: 'ValuationReport', id: any, reportId: any, navAssets: any, assetsPerShare?: any | null, metadataHash: any, computedAt: any, submittedAt: any, reporter: any, blockNumber: any, blockTimestamp: any, transactionHash: any }>, depositEpoches: Array<{ __typename?: 'DepositEpoch', id: any, epochId: any, reportId: any, assets: any, shares: any, assetsPerShare: any, blockNumber: any, blockTimestamp: any, transactionHash: any }>, redeemEpoches: Array<{ __typename?: 'RedeemEpoch', id: any, epochId: any, reportId: any, shares: any, assets: any, assetsPerShare: any, blockNumber: any, blockTimestamp: any, transactionHash: any }>, depositRequests: Array<{ __typename?: 'DepositRequest', id: any, requestId: any, controller: any, owner: any, sender: any, assets: any, canceled: boolean, createdAtTimestamp: any, updatedAtTimestamp: any, createdAtTransaction: any }>, redeemRequests: Array<{ __typename?: 'RedeemRequest', id: any, requestId: any, controller: any, owner: any, sender: any, shares: any, canceled: boolean, createdAtTimestamp: any, updatedAtTimestamp: any, createdAtTransaction: any }>, strategies: Array<{ __typename?: 'Strategy', id: any, address: any, allowed: boolean, kind: number, debtAssets: any, reportedAssets: any, maxDebtAssets: any, updatedAtTimestamp: any }>, _meta?: { __typename?: '_Meta_', hasIndexingErrors: boolean, block: { __typename?: '_Block_', number: number, timestamp?: number | null } } | null };


export const VaultsDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VaultsDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vaultRegistries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"updatedAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"vaultCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vaults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"registeredAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"vaultTypeName"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"latestSharePrice"}},{"kind":"Field","name":{"kind":"Name","value":"latestTvl"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeDepositAssets"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeWithdrawAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netFlowAssets"}},{"kind":"Field","name":{"kind":"Name","value":"yieldEarnedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"registeredAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategyManager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrategyDebt"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrategyReportedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"maxTotalStrategyDebt"}},{"kind":"Field","name":{"kind":"Name","value":"allocationPaused"}},{"kind":"Field","name":{"kind":"Name","value":"executionPaused"}}]}},{"kind":"Field","name":{"kind":"Name","value":"valuationOracle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"latestReportId"}},{"kind":"Field","name":{"kind":"Name","value":"maxReportAge"}},{"kind":"Field","name":{"kind":"Name","value":"maxChangeBps"}},{"kind":"Field","name":{"kind":"Name","value":"oracleCount"}},{"kind":"Field","name":{"kind":"Name","value":"oracleQuorum"}},{"kind":"Field","name":{"kind":"Name","value":"requireReportMetadataHash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasIndexingErrors"}}]}}]}}]} as unknown as DocumentNode<VaultsDashboardQuery, VaultsDashboardQueryVariables>;
export const VaultDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VaultDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vault"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vault"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"vaultType"}},{"kind":"Field","name":{"kind":"Name","value":"vaultTypeName"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"latestSharePrice"}},{"kind":"Field","name":{"kind":"Name","value":"latestTvl"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeDepositAssets"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeWithdrawAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netFlowAssets"}},{"kind":"Field","name":{"kind":"Name","value":"yieldEarnedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"depositFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"redeemFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"performanceFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"protocolFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"managementFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"feeRecipient"}},{"kind":"Field","name":{"kind":"Name","value":"protocolFeeRecipient"}},{"kind":"Field","name":{"kind":"Name","value":"depositsPaused"}},{"kind":"Field","name":{"kind":"Name","value":"redeemsPaused"}},{"kind":"Field","name":{"kind":"Name","value":"registeredAtBlock"}},{"kind":"Field","name":{"kind":"Name","value":"registeredAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"registeredAtTransaction"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtBlock"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}}]}},{"kind":"Field","name":{"kind":"Name","value":"registry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"vaultCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategyManager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrategyDebt"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrategyReportedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"maxTotalStrategyDebt"}},{"kind":"Field","name":{"kind":"Name","value":"allocationPaused"}},{"kind":"Field","name":{"kind":"Name","value":"executionPaused"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"valuationOracle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"latestReportId"}},{"kind":"Field","name":{"kind":"Name","value":"maxReportAge"}},{"kind":"Field","name":{"kind":"Name","value":"maxChangeBps"}},{"kind":"Field","name":{"kind":"Name","value":"oracleCount"}},{"kind":"Field","name":{"kind":"Name","value":"oracleQuorum"}},{"kind":"Field","name":{"kind":"Name","value":"requireReportMetadataHash"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snapshots"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"8"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"blockTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"sharePrice"}},{"kind":"Field","name":{"kind":"Name","value":"tvl"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeDepositAssets"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeWithdrawAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netFlowAssets"}},{"kind":"Field","name":{"kind":"Name","value":"yieldEarnedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"assetsPerShare"}},{"kind":"Field","name":{"kind":"Name","value":"navAssets"}},{"kind":"Field","name":{"kind":"Name","value":"reportId"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"valuationReports"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"reportId"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reportId"}},{"kind":"Field","name":{"kind":"Name","value":"navAssets"}},{"kind":"Field","name":{"kind":"Name","value":"assetsPerShare"}},{"kind":"Field","name":{"kind":"Name","value":"metadataHash"}},{"kind":"Field","name":{"kind":"Name","value":"computedAt"}},{"kind":"Field","name":{"kind":"Name","value":"submittedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reporter"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depositEpoches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"epochId"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"epochId"}},{"kind":"Field","name":{"kind":"Name","value":"reportId"}},{"kind":"Field","name":{"kind":"Name","value":"assets"}},{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"assetsPerShare"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"redeemEpoches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"epochId"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"epochId"}},{"kind":"Field","name":{"kind":"Name","value":"reportId"}},{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"assets"}},{"kind":"Field","name":{"kind":"Name","value":"assetsPerShare"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depositRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"updatedAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"requestId"}},{"kind":"Field","name":{"kind":"Name","value":"controller"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"assets"}},{"kind":"Field","name":{"kind":"Name","value":"canceled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTransaction"}}]}},{"kind":"Field","name":{"kind":"Name","value":"redeemRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"updatedAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"requestId"}},{"kind":"Field","name":{"kind":"Name","value":"controller"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"canceled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTransaction"}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"updatedAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"allowed"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"debtAssets"}},{"kind":"Field","name":{"kind":"Name","value":"reportedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"maxDebtAssets"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasIndexingErrors"}}]}}]}}]} as unknown as DocumentNode<VaultDetailQuery, VaultDetailQueryVariables>;