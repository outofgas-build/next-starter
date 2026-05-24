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

export type DepositEpoch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DepositEpoch_Filter>>>;
  assets?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShareRaw?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShareRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  shares?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharesRaw?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  AssetsPerShareRaw = 'assetsPerShareRaw',
  AssetsRaw = 'assetsRaw',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  EpochId = 'epochId',
  Id = 'id',
  ReportId = 'reportId',
  Shares = 'shares',
  SharesRaw = 'sharesRaw',
  TransactionHash = 'transactionHash',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

export type DepositRequest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DepositRequest_Filter>>>;
  assets?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  AssetsRaw = 'assetsRaw',
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
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type RedeemEpoch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RedeemEpoch_Filter>>>;
  assets?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShareRaw?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShareRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  shares?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharesRaw?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  AssetsPerShareRaw = 'assetsPerShareRaw',
  AssetsRaw = 'assetsRaw',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  EpochId = 'epochId',
  Id = 'id',
  ReportId = 'reportId',
  Shares = 'shares',
  SharesRaw = 'sharesRaw',
  TransactionHash = 'transactionHash',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

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
  shares?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharesRaw?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  SharesRaw = 'sharesRaw',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

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
  maxTotalStrategyDebt?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTotalStrategyDebtRaw?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebtRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebtRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebtRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxTotalStrategyDebtRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebtRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebtRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxTotalStrategyDebtRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxTotalStrategyDebt_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTotalStrategyDebt_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTotalStrategyDebt_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  maxTotalStrategyDebt_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTotalStrategyDebt_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTotalStrategyDebt_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTotalStrategyDebt_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StrategyManager_Filter>>>;
  totalStrategyDebt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyDebtRaw?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebtRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebtRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebtRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStrategyDebtRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebtRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebtRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyDebtRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStrategyDebt_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyDebt_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyDebt_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalStrategyDebt_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyDebt_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyDebt_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyDebt_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalStrategyReportedAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyReportedAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStrategyReportedAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategyReportedAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStrategyReportedAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyReportedAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyReportedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalStrategyReportedAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyReportedAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyReportedAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalStrategyReportedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  MaxTotalStrategyDebtRaw = 'maxTotalStrategyDebtRaw',
  TotalStrategyDebt = 'totalStrategyDebt',
  TotalStrategyDebtRaw = 'totalStrategyDebtRaw',
  TotalStrategyReportedAssets = 'totalStrategyReportedAssets',
  TotalStrategyReportedAssetsRaw = 'totalStrategyReportedAssetsRaw',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
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
  debtAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  debtAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  debtAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  debtAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  debtAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  debtAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  debtAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  debtAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  debtAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  debtAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  debtAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  maxDebtAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxDebtAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxDebtAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxDebtAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxDebtAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxDebtAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxDebtAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  maxDebtAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxDebtAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxDebtAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxDebtAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Strategy_Filter>>>;
  reportedAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  reportedAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportedAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  reportedAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportedAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reportedAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reportedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reportedAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reportedAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reportedAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reportedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  DebtAssetsRaw = 'debtAssetsRaw',
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
  ManagerMaxTotalStrategyDebtRaw = 'manager__maxTotalStrategyDebtRaw',
  ManagerTotalStrategyDebt = 'manager__totalStrategyDebt',
  ManagerTotalStrategyDebtRaw = 'manager__totalStrategyDebtRaw',
  ManagerTotalStrategyReportedAssets = 'manager__totalStrategyReportedAssets',
  ManagerTotalStrategyReportedAssetsRaw = 'manager__totalStrategyReportedAssetsRaw',
  ManagerUpdatedAtBlock = 'manager__updatedAtBlock',
  ManagerUpdatedAtTimestamp = 'manager__updatedAtTimestamp',
  MaxDebtAssets = 'maxDebtAssets',
  MaxDebtAssetsRaw = 'maxDebtAssetsRaw',
  ReportedAssets = 'reportedAssets',
  ReportedAssetsRaw = 'reportedAssetsRaw',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

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
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

export type ValuationReport_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ValuationReport_Filter>>>;
  assetsPerShare?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShareRaw?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShareRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  navAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  navAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  AssetsPerShareRaw = 'assetsPerShareRaw',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ComputedAt = 'computedAt',
  Id = 'id',
  MetadataHash = 'metadataHash',
  NavAssets = 'navAssets',
  NavAssetsRaw = 'navAssetsRaw',
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
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

export type VaultAccessControlEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<VaultAccessControlEvent_Filter>>>;
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
  newAdminRole?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRoleName?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_contains?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_gt?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_gte?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAdminRoleName_lt?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_lte?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_not?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_not_contains?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAdminRoleName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAdminRoleName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultAccessControlEvent_Filter>>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRoleName?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_contains?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_gt?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_gte?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousAdminRoleName_lt?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_lte?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_not?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_not_contains?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousAdminRoleName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousAdminRoleName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  roleName_contains?: InputMaybe<Scalars['String']['input']>;
  roleName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_ends_with?: InputMaybe<Scalars['String']['input']>;
  roleName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_gt?: InputMaybe<Scalars['String']['input']>;
  roleName_gte?: InputMaybe<Scalars['String']['input']>;
  roleName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roleName_lt?: InputMaybe<Scalars['String']['input']>;
  roleName_lte?: InputMaybe<Scalars['String']['input']>;
  roleName_not?: InputMaybe<Scalars['String']['input']>;
  roleName_not_contains?: InputMaybe<Scalars['String']['input']>;
  roleName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  roleName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roleName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  roleName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_starts_with?: InputMaybe<Scalars['String']['input']>;
  roleName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef?: InputMaybe<Scalars['String']['input']>;
  roleRef_?: InputMaybe<VaultRole_Filter>;
  roleRef_contains?: InputMaybe<Scalars['String']['input']>;
  roleRef_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef_ends_with?: InputMaybe<Scalars['String']['input']>;
  roleRef_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef_gt?: InputMaybe<Scalars['String']['input']>;
  roleRef_gte?: InputMaybe<Scalars['String']['input']>;
  roleRef_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roleRef_lt?: InputMaybe<Scalars['String']['input']>;
  roleRef_lte?: InputMaybe<Scalars['String']['input']>;
  roleRef_not?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_contains?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roleRef_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef_starts_with?: InputMaybe<Scalars['String']['input']>;
  roleRef_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  target?: InputMaybe<Scalars['Bytes']['input']>;
  targetType?: InputMaybe<Scalars['String']['input']>;
  targetType_contains?: InputMaybe<Scalars['String']['input']>;
  targetType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_ends_with?: InputMaybe<Scalars['String']['input']>;
  targetType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_gt?: InputMaybe<Scalars['String']['input']>;
  targetType_gte?: InputMaybe<Scalars['String']['input']>;
  targetType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  targetType_lt?: InputMaybe<Scalars['String']['input']>;
  targetType_lte?: InputMaybe<Scalars['String']['input']>;
  targetType_not?: InputMaybe<Scalars['String']['input']>;
  targetType_not_contains?: InputMaybe<Scalars['String']['input']>;
  targetType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  targetType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  targetType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  targetType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_starts_with?: InputMaybe<Scalars['String']['input']>;
  targetType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_contains?: InputMaybe<Scalars['Bytes']['input']>;
  target_gt?: InputMaybe<Scalars['Bytes']['input']>;
  target_gte?: InputMaybe<Scalars['Bytes']['input']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  target_lt?: InputMaybe<Scalars['Bytes']['input']>;
  target_lte?: InputMaybe<Scalars['Bytes']['input']>;
  target_not?: InputMaybe<Scalars['Bytes']['input']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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

export enum VaultAccessControlEvent_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  LogIndex = 'logIndex',
  NewAdminRole = 'newAdminRole',
  NewAdminRoleName = 'newAdminRoleName',
  PreviousAdminRole = 'previousAdminRole',
  PreviousAdminRoleName = 'previousAdminRoleName',
  Role = 'role',
  RoleName = 'roleName',
  RoleRef = 'roleRef',
  RoleRefActiveAccountCount = 'roleRef__activeAccountCount',
  RoleRefAdminRole = 'roleRef__adminRole',
  RoleRefAdminRoleName = 'roleRef__adminRoleName',
  RoleRefCreatedAtBlock = 'roleRef__createdAtBlock',
  RoleRefCreatedAtTimestamp = 'roleRef__createdAtTimestamp',
  RoleRefId = 'roleRef__id',
  RoleRefRole = 'roleRef__role',
  RoleRefRoleName = 'roleRef__roleName',
  RoleRefTarget = 'roleRef__target',
  RoleRefTargetType = 'roleRef__targetType',
  RoleRefUpdatedAtBlock = 'roleRef__updatedAtBlock',
  RoleRefUpdatedAtTimestamp = 'roleRef__updatedAtTimestamp',
  Sender = 'sender',
  Target = 'target',
  TargetType = 'targetType',
  TransactionHash = 'transactionHash',
  Type = 'type',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

export type VaultMetricSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultMetricSnapshot_Filter>>>;
  assetsPerShare?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShareRaw?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShareRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  cumulativeDepositAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeDepositAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeSettledRedeemAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeSettledRedeemAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeSettledRedeemAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeSettledRedeemAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeWithdrawAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeWithdrawAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  interestGainedAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestGainedAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestGainedAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  interestGainedAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  navAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  netFlowAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netFlowAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netFlowAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  netFlowAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultMetricSnapshot_Filter>>>;
  reportId?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharePrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePriceRaw?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharePriceRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharePrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sharePrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  totalAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupplyRaw?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupplyRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  tvl?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlRaw?: InputMaybe<Scalars['BigInt']['input']>;
  tvlRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tvlRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tvlRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tvlRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tvlRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tvlRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  tvlRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  yieldEarnedAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yieldEarnedAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yieldEarnedAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  yieldEarnedAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum VaultMetricSnapshot_OrderBy {
  AssetsPerShare = 'assetsPerShare',
  AssetsPerShareRaw = 'assetsPerShareRaw',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CumulativeDepositAssets = 'cumulativeDepositAssets',
  CumulativeDepositAssetsRaw = 'cumulativeDepositAssetsRaw',
  CumulativeSettledRedeemAssets = 'cumulativeSettledRedeemAssets',
  CumulativeSettledRedeemAssetsRaw = 'cumulativeSettledRedeemAssetsRaw',
  CumulativeWithdrawAssets = 'cumulativeWithdrawAssets',
  CumulativeWithdrawAssetsRaw = 'cumulativeWithdrawAssetsRaw',
  Id = 'id',
  InterestGainedAssets = 'interestGainedAssets',
  InterestGainedAssetsRaw = 'interestGainedAssetsRaw',
  LogIndex = 'logIndex',
  NavAssets = 'navAssets',
  NavAssetsRaw = 'navAssetsRaw',
  NetFlowAssets = 'netFlowAssets',
  NetFlowAssetsRaw = 'netFlowAssetsRaw',
  ReportId = 'reportId',
  SharePrice = 'sharePrice',
  SharePriceRaw = 'sharePriceRaw',
  Source = 'source',
  TotalAssets = 'totalAssets',
  TotalAssetsRaw = 'totalAssetsRaw',
  TotalSupply = 'totalSupply',
  TotalSupplyRaw = 'totalSupplyRaw',
  TransactionHash = 'transactionHash',
  Tvl = 'tvl',
  TvlRaw = 'tvlRaw',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw',
  YieldEarnedAssets = 'yieldEarnedAssets',
  YieldEarnedAssetsRaw = 'yieldEarnedAssetsRaw'
}

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
  StrategyManagerMaxTotalStrategyDebtRaw = 'strategyManager__maxTotalStrategyDebtRaw',
  StrategyManagerTotalStrategyDebt = 'strategyManager__totalStrategyDebt',
  StrategyManagerTotalStrategyDebtRaw = 'strategyManager__totalStrategyDebtRaw',
  StrategyManagerTotalStrategyReportedAssets = 'strategyManager__totalStrategyReportedAssets',
  StrategyManagerTotalStrategyReportedAssetsRaw = 'strategyManager__totalStrategyReportedAssetsRaw',
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
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

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

export type VaultRoleAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<VaultRoleAccount_Filter>>>;
  grantedAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  grantedAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  grantedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  grantedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  grantedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  grantedAtTransaction?: InputMaybe<Scalars['Bytes']['input']>;
  grantedAtTransaction_contains?: InputMaybe<Scalars['Bytes']['input']>;
  grantedAtTransaction_gt?: InputMaybe<Scalars['Bytes']['input']>;
  grantedAtTransaction_gte?: InputMaybe<Scalars['Bytes']['input']>;
  grantedAtTransaction_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  grantedAtTransaction_lt?: InputMaybe<Scalars['Bytes']['input']>;
  grantedAtTransaction_lte?: InputMaybe<Scalars['Bytes']['input']>;
  grantedAtTransaction_not?: InputMaybe<Scalars['Bytes']['input']>;
  grantedAtTransaction_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  grantedAtTransaction_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  grantedBy?: InputMaybe<Scalars['Bytes']['input']>;
  grantedBy_contains?: InputMaybe<Scalars['Bytes']['input']>;
  grantedBy_gt?: InputMaybe<Scalars['Bytes']['input']>;
  grantedBy_gte?: InputMaybe<Scalars['Bytes']['input']>;
  grantedBy_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  grantedBy_lt?: InputMaybe<Scalars['Bytes']['input']>;
  grantedBy_lte?: InputMaybe<Scalars['Bytes']['input']>;
  grantedBy_not?: InputMaybe<Scalars['Bytes']['input']>;
  grantedBy_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  grantedBy_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<VaultRoleAccount_Filter>>>;
  revokedAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revokedAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revokedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revokedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  revokedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revokedAtTransaction?: InputMaybe<Scalars['Bytes']['input']>;
  revokedAtTransaction_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revokedAtTransaction_gt?: InputMaybe<Scalars['Bytes']['input']>;
  revokedAtTransaction_gte?: InputMaybe<Scalars['Bytes']['input']>;
  revokedAtTransaction_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  revokedAtTransaction_lt?: InputMaybe<Scalars['Bytes']['input']>;
  revokedAtTransaction_lte?: InputMaybe<Scalars['Bytes']['input']>;
  revokedAtTransaction_not?: InputMaybe<Scalars['Bytes']['input']>;
  revokedAtTransaction_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revokedAtTransaction_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  revokedBy?: InputMaybe<Scalars['Bytes']['input']>;
  revokedBy_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revokedBy_gt?: InputMaybe<Scalars['Bytes']['input']>;
  revokedBy_gte?: InputMaybe<Scalars['Bytes']['input']>;
  revokedBy_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  revokedBy_lt?: InputMaybe<Scalars['Bytes']['input']>;
  revokedBy_lte?: InputMaybe<Scalars['Bytes']['input']>;
  revokedBy_not?: InputMaybe<Scalars['Bytes']['input']>;
  revokedBy_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revokedBy_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  roleName_contains?: InputMaybe<Scalars['String']['input']>;
  roleName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_ends_with?: InputMaybe<Scalars['String']['input']>;
  roleName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_gt?: InputMaybe<Scalars['String']['input']>;
  roleName_gte?: InputMaybe<Scalars['String']['input']>;
  roleName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roleName_lt?: InputMaybe<Scalars['String']['input']>;
  roleName_lte?: InputMaybe<Scalars['String']['input']>;
  roleName_not?: InputMaybe<Scalars['String']['input']>;
  roleName_not_contains?: InputMaybe<Scalars['String']['input']>;
  roleName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  roleName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roleName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  roleName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_starts_with?: InputMaybe<Scalars['String']['input']>;
  roleName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef?: InputMaybe<Scalars['String']['input']>;
  roleRef_?: InputMaybe<VaultRole_Filter>;
  roleRef_contains?: InputMaybe<Scalars['String']['input']>;
  roleRef_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef_ends_with?: InputMaybe<Scalars['String']['input']>;
  roleRef_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef_gt?: InputMaybe<Scalars['String']['input']>;
  roleRef_gte?: InputMaybe<Scalars['String']['input']>;
  roleRef_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roleRef_lt?: InputMaybe<Scalars['String']['input']>;
  roleRef_lte?: InputMaybe<Scalars['String']['input']>;
  roleRef_not?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_contains?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roleRef_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  roleRef_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleRef_starts_with?: InputMaybe<Scalars['String']['input']>;
  roleRef_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  target?: InputMaybe<Scalars['Bytes']['input']>;
  targetType?: InputMaybe<Scalars['String']['input']>;
  targetType_contains?: InputMaybe<Scalars['String']['input']>;
  targetType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_ends_with?: InputMaybe<Scalars['String']['input']>;
  targetType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_gt?: InputMaybe<Scalars['String']['input']>;
  targetType_gte?: InputMaybe<Scalars['String']['input']>;
  targetType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  targetType_lt?: InputMaybe<Scalars['String']['input']>;
  targetType_lte?: InputMaybe<Scalars['String']['input']>;
  targetType_not?: InputMaybe<Scalars['String']['input']>;
  targetType_not_contains?: InputMaybe<Scalars['String']['input']>;
  targetType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  targetType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  targetType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  targetType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_starts_with?: InputMaybe<Scalars['String']['input']>;
  targetType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_contains?: InputMaybe<Scalars['Bytes']['input']>;
  target_gt?: InputMaybe<Scalars['Bytes']['input']>;
  target_gte?: InputMaybe<Scalars['Bytes']['input']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  target_lt?: InputMaybe<Scalars['Bytes']['input']>;
  target_lte?: InputMaybe<Scalars['Bytes']['input']>;
  target_not?: InputMaybe<Scalars['Bytes']['input']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum VaultRoleAccount_OrderBy {
  Account = 'account',
  Active = 'active',
  GrantedAtBlock = 'grantedAtBlock',
  GrantedAtTimestamp = 'grantedAtTimestamp',
  GrantedAtTransaction = 'grantedAtTransaction',
  GrantedBy = 'grantedBy',
  Id = 'id',
  RevokedAtBlock = 'revokedAtBlock',
  RevokedAtTimestamp = 'revokedAtTimestamp',
  RevokedAtTransaction = 'revokedAtTransaction',
  RevokedBy = 'revokedBy',
  Role = 'role',
  RoleName = 'roleName',
  RoleRef = 'roleRef',
  RoleRefActiveAccountCount = 'roleRef__activeAccountCount',
  RoleRefAdminRole = 'roleRef__adminRole',
  RoleRefAdminRoleName = 'roleRef__adminRoleName',
  RoleRefCreatedAtBlock = 'roleRef__createdAtBlock',
  RoleRefCreatedAtTimestamp = 'roleRef__createdAtTimestamp',
  RoleRefId = 'roleRef__id',
  RoleRefRole = 'roleRef__role',
  RoleRefRoleName = 'roleRef__roleName',
  RoleRefTarget = 'roleRef__target',
  RoleRefTargetType = 'roleRef__targetType',
  RoleRefUpdatedAtBlock = 'roleRef__updatedAtBlock',
  RoleRefUpdatedAtTimestamp = 'roleRef__updatedAtTimestamp',
  Target = 'target',
  TargetType = 'targetType',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

export type VaultRole_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accounts_?: InputMaybe<VaultRoleAccount_Filter>;
  activeAccountCount?: InputMaybe<Scalars['BigInt']['input']>;
  activeAccountCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activeAccountCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activeAccountCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeAccountCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activeAccountCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activeAccountCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  activeAccountCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminRole?: InputMaybe<Scalars['Bytes']['input']>;
  adminRoleName?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_contains?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_ends_with?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_gt?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_gte?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  adminRoleName_lt?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_lte?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_not?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_not_contains?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  adminRoleName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_starts_with?: InputMaybe<Scalars['String']['input']>;
  adminRoleName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  adminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  adminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  adminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  adminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  adminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  adminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  adminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  adminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<VaultRole_Filter>>>;
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
  events_?: InputMaybe<VaultAccessControlEvent_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<VaultRole_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  roleName_contains?: InputMaybe<Scalars['String']['input']>;
  roleName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_ends_with?: InputMaybe<Scalars['String']['input']>;
  roleName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_gt?: InputMaybe<Scalars['String']['input']>;
  roleName_gte?: InputMaybe<Scalars['String']['input']>;
  roleName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roleName_lt?: InputMaybe<Scalars['String']['input']>;
  roleName_lte?: InputMaybe<Scalars['String']['input']>;
  roleName_not?: InputMaybe<Scalars['String']['input']>;
  roleName_not_contains?: InputMaybe<Scalars['String']['input']>;
  roleName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  roleName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roleName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  roleName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roleName_starts_with?: InputMaybe<Scalars['String']['input']>;
  roleName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  target?: InputMaybe<Scalars['Bytes']['input']>;
  targetType?: InputMaybe<Scalars['String']['input']>;
  targetType_contains?: InputMaybe<Scalars['String']['input']>;
  targetType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_ends_with?: InputMaybe<Scalars['String']['input']>;
  targetType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_gt?: InputMaybe<Scalars['String']['input']>;
  targetType_gte?: InputMaybe<Scalars['String']['input']>;
  targetType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  targetType_lt?: InputMaybe<Scalars['String']['input']>;
  targetType_lte?: InputMaybe<Scalars['String']['input']>;
  targetType_not?: InputMaybe<Scalars['String']['input']>;
  targetType_not_contains?: InputMaybe<Scalars['String']['input']>;
  targetType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  targetType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  targetType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  targetType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  targetType_starts_with?: InputMaybe<Scalars['String']['input']>;
  targetType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_contains?: InputMaybe<Scalars['Bytes']['input']>;
  target_gt?: InputMaybe<Scalars['Bytes']['input']>;
  target_gte?: InputMaybe<Scalars['Bytes']['input']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  target_lt?: InputMaybe<Scalars['Bytes']['input']>;
  target_lte?: InputMaybe<Scalars['Bytes']['input']>;
  target_not?: InputMaybe<Scalars['Bytes']['input']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum VaultRole_OrderBy {
  Accounts = 'accounts',
  ActiveAccountCount = 'activeAccountCount',
  AdminRole = 'adminRole',
  AdminRoleName = 'adminRoleName',
  CreatedAtBlock = 'createdAtBlock',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Events = 'events',
  Id = 'id',
  Role = 'role',
  RoleName = 'roleName',
  Target = 'target',
  TargetType = 'targetType',
  UpdatedAtBlock = 'updatedAtBlock',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

export type VaultSharePriceSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultSharePriceSnapshot_Filter>>>;
  assetsPerShare?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShareRaw?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShareRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  navAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  navAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultSharePriceSnapshot_Filter>>>;
  reportId?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharePrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePriceRaw?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharePriceRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharePriceRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharePrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sharePrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  AssetsPerShareRaw = 'assetsPerShareRaw',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  LogIndex = 'logIndex',
  NavAssets = 'navAssets',
  NavAssetsRaw = 'navAssetsRaw',
  ReportId = 'reportId',
  SharePrice = 'sharePrice',
  SharePriceRaw = 'sharePriceRaw',
  Source = 'source',
  TransactionHash = 'transactionHash',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

export type VaultSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultSnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDeposits?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDeposits_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDeposits_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDeposits_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeDeposits_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDeposits_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDeposits_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDeposits_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeSettledRedeems?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeSettledRedeemsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeSettledRedeems_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeems_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeems_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeSettledRedeems_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeems_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeems_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeems_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  interestGained?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedRaw?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestGainedRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestGained_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGained_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGained_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  interestGained_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGained_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGained_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGained_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  navAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultSnapshot_Filter>>>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_not?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum VaultSnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  CumulativeDeposits = 'cumulativeDeposits',
  CumulativeDepositsRaw = 'cumulativeDepositsRaw',
  CumulativeSettledRedeems = 'cumulativeSettledRedeems',
  CumulativeSettledRedeemsRaw = 'cumulativeSettledRedeemsRaw',
  Id = 'id',
  InterestGained = 'interestGained',
  InterestGainedRaw = 'interestGainedRaw',
  LogIndex = 'logIndex',
  NavAssets = 'navAssets',
  NavAssetsRaw = 'navAssetsRaw',
  Reason = 'reason',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

export type VaultTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultTransaction_Filter>>>;
  assets?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShareRaw?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShareRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsPerShareRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsPerShare_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsPerShare_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsPerShare_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  epochId?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epochId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_not?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<VaultTransaction_Filter>>>;
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
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  reportId?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reportId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not?: InputMaybe<Scalars['BigInt']['input']>;
  reportId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  shares?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharesRaw?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_contains?: InputMaybe<Scalars['String']['input']>;
  status_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  status_ends_with?: InputMaybe<Scalars['String']['input']>;
  status_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  status_gt?: InputMaybe<Scalars['String']['input']>;
  status_gte?: InputMaybe<Scalars['String']['input']>;
  status_in?: InputMaybe<Array<Scalars['String']['input']>>;
  status_lt?: InputMaybe<Scalars['String']['input']>;
  status_lte?: InputMaybe<Scalars['String']['input']>;
  status_not?: InputMaybe<Scalars['String']['input']>;
  status_not_contains?: InputMaybe<Scalars['String']['input']>;
  status_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  status_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  status_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  status_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  status_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  status_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  status_starts_with?: InputMaybe<Scalars['String']['input']>;
  status_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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

export enum VaultTransaction_OrderBy {
  Assets = 'assets',
  AssetsPerShare = 'assetsPerShare',
  AssetsPerShareRaw = 'assetsPerShareRaw',
  AssetsRaw = 'assetsRaw',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Controller = 'controller',
  EpochId = 'epochId',
  From = 'from',
  Id = 'id',
  LogIndex = 'logIndex',
  Owner = 'owner',
  Receiver = 'receiver',
  ReportId = 'reportId',
  RequestId = 'requestId',
  Sender = 'sender',
  Shares = 'shares',
  SharesRaw = 'sharesRaw',
  Status = 'status',
  To = 'to',
  TransactionHash = 'transactionHash',
  Type = 'type',
  Vault = 'vault',
  VaultActive = 'vault__active',
  VaultAddress = 'vault__address',
  VaultCumulativeDepositAssets = 'vault__cumulativeDepositAssets',
  VaultCumulativeDepositAssetsRaw = 'vault__cumulativeDepositAssetsRaw',
  VaultCumulativeSettledRedeemAssets = 'vault__cumulativeSettledRedeemAssets',
  VaultCumulativeSettledRedeemAssetsRaw = 'vault__cumulativeSettledRedeemAssetsRaw',
  VaultCumulativeWithdrawAssets = 'vault__cumulativeWithdrawAssets',
  VaultCumulativeWithdrawAssetsRaw = 'vault__cumulativeWithdrawAssetsRaw',
  VaultDepositFeeRate = 'vault__depositFeeRate',
  VaultDepositsPaused = 'vault__depositsPaused',
  VaultFeeRecipient = 'vault__feeRecipient',
  VaultId = 'vault__id',
  VaultInterestGainedAssets = 'vault__interestGainedAssets',
  VaultInterestGainedAssetsRaw = 'vault__interestGainedAssetsRaw',
  VaultLatestSharePrice = 'vault__latestSharePrice',
  VaultLatestSharePriceRaw = 'vault__latestSharePriceRaw',
  VaultLatestTvl = 'vault__latestTvl',
  VaultLatestTvlRaw = 'vault__latestTvlRaw',
  VaultManagementFeeRate = 'vault__managementFeeRate',
  VaultName = 'vault__name',
  VaultNavAssets = 'vault__navAssets',
  VaultNavAssetsRaw = 'vault__navAssetsRaw',
  VaultNetFlowAssets = 'vault__netFlowAssets',
  VaultNetFlowAssetsRaw = 'vault__netFlowAssetsRaw',
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
  VaultTotalAssetsRaw = 'vault__totalAssetsRaw',
  VaultTotalSupply = 'vault__totalSupply',
  VaultTotalSupplyRaw = 'vault__totalSupplyRaw',
  VaultUpdatedAtBlock = 'vault__updatedAtBlock',
  VaultUpdatedAtTimestamp = 'vault__updatedAtTimestamp',
  VaultVaultType = 'vault__vaultType',
  VaultVaultTypeName = 'vault__vaultTypeName',
  VaultYieldEarnedAssets = 'vault__yieldEarnedAssets',
  VaultYieldEarnedAssetsRaw = 'vault__yieldEarnedAssetsRaw'
}

export type Vault_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accessControlEvents_?: InputMaybe<VaultAccessControlEvent_Filter>;
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
  chartSnapshots_?: InputMaybe<VaultSnapshot_Filter>;
  cumulativeDepositAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeDepositAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeDepositAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeDepositAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeSettledRedeemAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeSettledRedeemAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeSettledRedeemAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeSettledRedeemAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeSettledRedeemAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeSettledRedeemAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeWithdrawAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeWithdrawAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeWithdrawAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeWithdrawAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  interestGainedAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestGainedAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestGainedAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestGainedAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  interestGainedAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  interestGainedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  latestSharePrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestSharePriceRaw?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePriceRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePriceRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePriceRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestSharePriceRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePriceRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePriceRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  latestSharePriceRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestSharePrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestSharePrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestSharePrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  latestSharePrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestSharePrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestSharePrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestSharePrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  latestTvl?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestTvlRaw?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvlRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvlRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvlRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestTvlRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvlRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvlRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  latestTvlRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestTvl_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestTvl_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestTvl_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  latestTvl_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestTvl_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestTvl_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestTvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  navAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  navAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  navAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  navAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  navAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  netFlowAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netFlowAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  netFlowAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netFlowAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  netFlowAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  netFlowAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  roleAccounts_?: InputMaybe<VaultRoleAccount_Filter>;
  roles_?: InputMaybe<VaultRole_Filter>;
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
  totalAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupplyRaw?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupplyRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  transactions_?: InputMaybe<VaultTransaction_Filter>;
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
  yieldEarnedAssets?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssetsRaw?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yieldEarnedAssetsRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  yieldEarnedAssetsRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yieldEarnedAssets_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssets_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  yieldEarnedAssets_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssets_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssets_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  yieldEarnedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Vault_OrderBy {
  AccessControlEvents = 'accessControlEvents',
  Active = 'active',
  Address = 'address',
  Asset = 'asset',
  AssetAddress = 'asset__address',
  AssetDecimals = 'asset__decimals',
  AssetId = 'asset__id',
  AssetName = 'asset__name',
  AssetSymbol = 'asset__symbol',
  ChartSnapshots = 'chartSnapshots',
  CumulativeDepositAssets = 'cumulativeDepositAssets',
  CumulativeDepositAssetsRaw = 'cumulativeDepositAssetsRaw',
  CumulativeSettledRedeemAssets = 'cumulativeSettledRedeemAssets',
  CumulativeSettledRedeemAssetsRaw = 'cumulativeSettledRedeemAssetsRaw',
  CumulativeWithdrawAssets = 'cumulativeWithdrawAssets',
  CumulativeWithdrawAssetsRaw = 'cumulativeWithdrawAssetsRaw',
  DepositFeeRate = 'depositFeeRate',
  DepositsPaused = 'depositsPaused',
  FeeRecipient = 'feeRecipient',
  Id = 'id',
  InterestGainedAssets = 'interestGainedAssets',
  InterestGainedAssetsRaw = 'interestGainedAssetsRaw',
  LatestSharePrice = 'latestSharePrice',
  LatestSharePriceRaw = 'latestSharePriceRaw',
  LatestTvl = 'latestTvl',
  LatestTvlRaw = 'latestTvlRaw',
  ManagementFeeRate = 'managementFeeRate',
  Name = 'name',
  NavAssets = 'navAssets',
  NavAssetsRaw = 'navAssetsRaw',
  NetFlowAssets = 'netFlowAssets',
  NetFlowAssetsRaw = 'netFlowAssetsRaw',
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
  RoleAccounts = 'roleAccounts',
  Roles = 'roles',
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
  StrategyManagerMaxTotalStrategyDebtRaw = 'strategyManager__maxTotalStrategyDebtRaw',
  StrategyManagerTotalStrategyDebt = 'strategyManager__totalStrategyDebt',
  StrategyManagerTotalStrategyDebtRaw = 'strategyManager__totalStrategyDebtRaw',
  StrategyManagerTotalStrategyReportedAssets = 'strategyManager__totalStrategyReportedAssets',
  StrategyManagerTotalStrategyReportedAssetsRaw = 'strategyManager__totalStrategyReportedAssetsRaw',
  StrategyManagerUpdatedAtBlock = 'strategyManager__updatedAtBlock',
  StrategyManagerUpdatedAtTimestamp = 'strategyManager__updatedAtTimestamp',
  Symbol = 'symbol',
  TotalAssets = 'totalAssets',
  TotalAssetsRaw = 'totalAssetsRaw',
  TotalSupply = 'totalSupply',
  TotalSupplyRaw = 'totalSupplyRaw',
  Transactions = 'transactions',
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
  YieldEarnedAssets = 'yieldEarnedAssets',
  YieldEarnedAssetsRaw = 'yieldEarnedAssetsRaw'
}

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


export type VaultDetailQuery = { __typename?: 'Query', vault?: { __typename?: 'Vault', id: any, address: any, name: string, symbol: string, vaultType: number, vaultTypeName: string, active: boolean, totalAssets: any, totalSupply: any, latestSharePrice: any, latestTvl: any, cumulativeDepositAssets: any, cumulativeWithdrawAssets: any, netFlowAssets: any, yieldEarnedAssets: any, depositFeeRate?: any | null, redeemFeeRate?: any | null, performanceFeeRate?: any | null, protocolFeeRate?: any | null, managementFeeRate?: any | null, feeRecipient?: any | null, protocolFeeRecipient?: any | null, depositsPaused?: boolean | null, redeemsPaused?: boolean | null, registeredAtBlock: any, registeredAtTimestamp: any, registeredAtTransaction: any, updatedAtBlock: any, updatedAtTimestamp: any, asset: { __typename?: 'Token', address: any, name?: string | null, symbol?: string | null, decimals?: number | null }, registry: { __typename?: 'VaultRegistry', address: any, vaultCount: any }, strategyManager: { __typename?: 'StrategyManager', address: any, totalStrategyDebt: any, totalStrategyReportedAssets: any, maxTotalStrategyDebt: any, allocationPaused: boolean, executionPaused: boolean, updatedAtTimestamp: any }, valuationOracle: { __typename?: 'ValuationOracle', address: any, latestReportId: any, maxReportAge: any, maxChangeBps: any, oracleCount: any, oracleQuorum: any, requireReportMetadataHash: boolean, updatedAtTimestamp: any }, roles: Array<{ __typename?: 'VaultRole', id: any, role: any, roleName?: string | null, activeAccountCount: any, updatedAtTimestamp: any, accounts: Array<{ __typename?: 'VaultRoleAccount', id: any, account: any, active: boolean, grantedAtTimestamp?: any | null, grantedBy?: any | null, updatedAtTimestamp: any }> }>, roleAccounts: Array<{ __typename?: 'VaultRoleAccount', id: any, account: any, role: any, roleName?: string | null, active: boolean, grantedAtTimestamp?: any | null, grantedBy?: any | null, updatedAtTimestamp: any }>, accessControlEvents: Array<{ __typename?: 'VaultAccessControlEvent', id: any, type: string, role: any, roleName?: string | null, account?: any | null, sender?: any | null, previousAdminRole?: any | null, previousAdminRoleName?: string | null, newAdminRole?: any | null, newAdminRoleName?: string | null, blockTimestamp: any, transactionHash: any }>, snapshots: Array<{ __typename?: 'VaultMetricSnapshot', id: any, source: string, sharePrice: any, tvl: any, totalAssets: any, totalSupply: any, cumulativeDepositAssets: any, cumulativeWithdrawAssets: any, netFlowAssets: any, yieldEarnedAssets: any, assetsPerShare?: any | null, navAssets?: any | null, reportId?: any | null, blockNumber: any, blockTimestamp: any, transactionHash: any }> } | null, valuationReports: Array<{ __typename?: 'ValuationReport', id: any, reportId: any, navAssets: any, assetsPerShare?: any | null, metadataHash: any, computedAt: any, submittedAt: any, reporter: any, blockNumber: any, blockTimestamp: any, transactionHash: any }>, depositEpoches: Array<{ __typename?: 'DepositEpoch', id: any, epochId: any, reportId: any, assets: any, shares: any, assetsPerShare: any, blockNumber: any, blockTimestamp: any, transactionHash: any }>, redeemEpoches: Array<{ __typename?: 'RedeemEpoch', id: any, epochId: any, reportId: any, shares: any, assets: any, assetsPerShare: any, blockNumber: any, blockTimestamp: any, transactionHash: any }>, depositRequests: Array<{ __typename?: 'DepositRequest', id: any, requestId: any, controller: any, owner: any, sender: any, assets: any, canceled: boolean, createdAtTimestamp: any, updatedAtTimestamp: any, createdAtTransaction: any }>, redeemRequests: Array<{ __typename?: 'RedeemRequest', id: any, requestId: any, controller: any, owner: any, sender: any, shares: any, canceled: boolean, createdAtTimestamp: any, updatedAtTimestamp: any, createdAtTransaction: any }>, strategies: Array<{ __typename?: 'Strategy', id: any, address: any, allowed: boolean, kind: number, debtAssets: any, reportedAssets: any, maxDebtAssets: any, updatedAtTimestamp: any }>, _meta?: { __typename?: '_Meta_', hasIndexingErrors: boolean, block: { __typename?: '_Block_', number: number, timestamp?: number | null } } | null };


export const VaultsDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VaultsDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vaultRegistries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"updatedAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"vaultCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vaults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"registeredAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"vaultTypeName"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"latestSharePrice"}},{"kind":"Field","name":{"kind":"Name","value":"latestTvl"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeDepositAssets"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeWithdrawAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netFlowAssets"}},{"kind":"Field","name":{"kind":"Name","value":"yieldEarnedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"registeredAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategyManager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrategyDebt"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrategyReportedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"maxTotalStrategyDebt"}},{"kind":"Field","name":{"kind":"Name","value":"allocationPaused"}},{"kind":"Field","name":{"kind":"Name","value":"executionPaused"}}]}},{"kind":"Field","name":{"kind":"Name","value":"valuationOracle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"latestReportId"}},{"kind":"Field","name":{"kind":"Name","value":"maxReportAge"}},{"kind":"Field","name":{"kind":"Name","value":"maxChangeBps"}},{"kind":"Field","name":{"kind":"Name","value":"oracleCount"}},{"kind":"Field","name":{"kind":"Name","value":"oracleQuorum"}},{"kind":"Field","name":{"kind":"Name","value":"requireReportMetadataHash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasIndexingErrors"}}]}}]}}]} as unknown as DocumentNode<VaultsDashboardQuery, VaultsDashboardQueryVariables>;
export const VaultDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VaultDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vault"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vault"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"vaultType"}},{"kind":"Field","name":{"kind":"Name","value":"vaultTypeName"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"latestSharePrice"}},{"kind":"Field","name":{"kind":"Name","value":"latestTvl"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeDepositAssets"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeWithdrawAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netFlowAssets"}},{"kind":"Field","name":{"kind":"Name","value":"yieldEarnedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"depositFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"redeemFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"performanceFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"protocolFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"managementFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"feeRecipient"}},{"kind":"Field","name":{"kind":"Name","value":"protocolFeeRecipient"}},{"kind":"Field","name":{"kind":"Name","value":"depositsPaused"}},{"kind":"Field","name":{"kind":"Name","value":"redeemsPaused"}},{"kind":"Field","name":{"kind":"Name","value":"registeredAtBlock"}},{"kind":"Field","name":{"kind":"Name","value":"registeredAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"registeredAtTransaction"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtBlock"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}}]}},{"kind":"Field","name":{"kind":"Name","value":"registry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"vaultCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategyManager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrategyDebt"}},{"kind":"Field","name":{"kind":"Name","value":"totalStrategyReportedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"maxTotalStrategyDebt"}},{"kind":"Field","name":{"kind":"Name","value":"allocationPaused"}},{"kind":"Field","name":{"kind":"Name","value":"executionPaused"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"valuationOracle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"latestReportId"}},{"kind":"Field","name":{"kind":"Name","value":"maxReportAge"}},{"kind":"Field","name":{"kind":"Name","value":"maxChangeBps"}},{"kind":"Field","name":{"kind":"Name","value":"oracleCount"}},{"kind":"Field","name":{"kind":"Name","value":"oracleQuorum"}},{"kind":"Field","name":{"kind":"Name","value":"requireReportMetadataHash"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"roleName"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"asc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"activeAccountCount"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"updatedAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"account"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"grantedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"grantedBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"roleAccounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"updatedAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"account"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"grantedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"grantedBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessControlEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"blockTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"account"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"previousAdminRole"}},{"kind":"Field","name":{"kind":"Name","value":"previousAdminRoleName"}},{"kind":"Field","name":{"kind":"Name","value":"newAdminRole"}},{"kind":"Field","name":{"kind":"Name","value":"newAdminRoleName"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snapshots"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"8"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"blockTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"sharePrice"}},{"kind":"Field","name":{"kind":"Name","value":"tvl"}},{"kind":"Field","name":{"kind":"Name","value":"totalAssets"}},{"kind":"Field","name":{"kind":"Name","value":"totalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeDepositAssets"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeWithdrawAssets"}},{"kind":"Field","name":{"kind":"Name","value":"netFlowAssets"}},{"kind":"Field","name":{"kind":"Name","value":"yieldEarnedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"assetsPerShare"}},{"kind":"Field","name":{"kind":"Name","value":"navAssets"}},{"kind":"Field","name":{"kind":"Name","value":"reportId"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"valuationReports"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"reportId"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reportId"}},{"kind":"Field","name":{"kind":"Name","value":"navAssets"}},{"kind":"Field","name":{"kind":"Name","value":"assetsPerShare"}},{"kind":"Field","name":{"kind":"Name","value":"metadataHash"}},{"kind":"Field","name":{"kind":"Name","value":"computedAt"}},{"kind":"Field","name":{"kind":"Name","value":"submittedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reporter"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depositEpoches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"epochId"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"epochId"}},{"kind":"Field","name":{"kind":"Name","value":"reportId"}},{"kind":"Field","name":{"kind":"Name","value":"assets"}},{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"assetsPerShare"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"redeemEpoches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"epochId"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"epochId"}},{"kind":"Field","name":{"kind":"Name","value":"reportId"}},{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"assets"}},{"kind":"Field","name":{"kind":"Name","value":"assetsPerShare"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depositRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"updatedAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"requestId"}},{"kind":"Field","name":{"kind":"Name","value":"controller"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"assets"}},{"kind":"Field","name":{"kind":"Name","value":"canceled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTransaction"}}]}},{"kind":"Field","name":{"kind":"Name","value":"redeemRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"updatedAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"requestId"}},{"kind":"Field","name":{"kind":"Name","value":"controller"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"canceled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTransaction"}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"updatedAtTimestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vault"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"allowed"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"debtAssets"}},{"kind":"Field","name":{"kind":"Name","value":"reportedAssets"}},{"kind":"Field","name":{"kind":"Name","value":"maxDebtAssets"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTimestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasIndexingErrors"}}]}}]}}]} as unknown as DocumentNode<VaultDetailQuery, VaultDetailQueryVariables>;