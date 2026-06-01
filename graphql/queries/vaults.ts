import { graphql } from "../generated";

export const VAULTS_DASHBOARD = graphql(`
  query VaultsDashboard($vaultIds: [Bytes!]) {
    vaults(first: 100, orderBy: registeredAtTimestamp, orderDirection: desc, where: { id_in: $vaultIds }) {
      id
      address
      name
      symbol
      vaultTypeName
      active
      totalAssets
      totalSupply
      latestSharePrice
      latestTvl
      cumulativeDepositAssets
      cumulativeWithdrawAssets
      netFlowAssets
      yieldEarnedAssets
      registeredAtTimestamp
      updatedAtTimestamp
      asset {
        address
        name
        symbol
        decimals
      }
      strategyManager {
        address
        totalAllocation
        totalAllocationCap
        allocationPaused
      }
      valuationOracle {
        address
        latestReportId
        maxReportAge
        maxReportPriceDeviationBps
        oracleCount
        oracleQuorum
        reportVault
      }
    }
    _meta {
      block {
        number
        timestamp
      }
      hasIndexingErrors
    }
  }
`);

export const VAULT_DETAIL = graphql(`
  query VaultDetail($id: ID!, $vault: String) {
    vault(id: $id) {
      id
      address
      name
      symbol
      vaultType
      vaultTypeName
      active
      totalAssets
      totalSupply
      latestSharePrice
      latestTvl
      cumulativeDepositAssets
      cumulativeWithdrawAssets
      netFlowAssets
      yieldEarnedAssets
      depositFeeRate
      redeemFeeRate
      performanceFeeRate
      protocolFeeRate
      managementFeeRate
      feeRecipient
      protocolFeeRecipient
      depositsPaused
      redeemsPaused
      registeredAtBlock
      registeredAtTimestamp
      registeredAtTransaction
      updatedAtBlock
      updatedAtTimestamp
      asset {
        address
        name
        symbol
        decimals
      }
      strategyManager {
        address
        totalAllocation
        totalAllocationCap
        allocationPaused
        updatedAtTimestamp
      }
      valuationOracle {
        address
        latestReportId
        maxReportAge
        maxReportPriceDeviationBps
        oracleCount
        oracleQuorum
        reportVault
        updatedAtTimestamp
      }
      roles(first: 20, orderBy: roleName, orderDirection: asc) {
        id
        role
        roleName
        activeAccountCount
        updatedAtTimestamp
        accounts(first: 10, orderBy: updatedAtTimestamp, orderDirection: desc, where: { active: true }) {
          id
          account
          active
          grantedAtTimestamp
          grantedBy
          updatedAtTimestamp
        }
      }
      roleAccounts(first: 20, orderBy: updatedAtTimestamp, orderDirection: desc, where: { active: true }) {
        id
        account
        role
        roleName
        active
        grantedAtTimestamp
        grantedBy
        updatedAtTimestamp
      }
      accessControlEvents(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
        id
        type
        role
        roleName
        account
        sender
        previousAdminRole
        previousAdminRoleName
        newAdminRole
        newAdminRoleName
        blockTimestamp
        transactionHash
      }
      snapshots(first: 8, orderBy: blockTimestamp, orderDirection: desc) {
        id
        source
        sharePrice
        tvl
        totalAssets
        totalSupply
        cumulativeDepositAssets
        cumulativeWithdrawAssets
        netFlowAssets
        yieldEarnedAssets
        assetsPerShare
        navAssets
        reportId
        blockNumber
        blockTimestamp
        transactionHash
      }
    }
    valuationReports(first: 10, orderBy: reportId, orderDirection: desc, where: { vault: $vault }) {
      id
      reportId
      externalValueAssets
      activeNavAssets
      activeShareSupply
      navAssets
      assetsPerShare
      metadataHash
      computedAt
      submittedAt
      reporter
      blockNumber
      blockTimestamp
      transactionHash
    }
    depositEpoches(first: 10, orderBy: epochId, orderDirection: desc, where: { vault: $vault }) {
      id
      epochId
      reportId
      assets
      shares
      assetsPerShare
      blockNumber
      blockTimestamp
      transactionHash
    }
    redeemEpoches(first: 10, orderBy: epochId, orderDirection: desc, where: { vault: $vault }) {
      id
      epochId
      reportId
      shares
      assets
      assetsPerShare
      blockNumber
      blockTimestamp
      transactionHash
    }
    depositRequests(first: 10, orderBy: updatedAtTimestamp, orderDirection: desc, where: { vault: $vault }) {
      id
      requestId
      controller
      owner
      sender
      assets
      canceled
      createdAtTimestamp
      updatedAtTimestamp
      createdAtTransaction
    }
    redeemRequests(first: 10, orderBy: updatedAtTimestamp, orderDirection: desc, where: { vault: $vault }) {
      id
      requestId
      controller
      owner
      sender
      shares
      canceled
      createdAtTimestamp
      updatedAtTimestamp
      createdAtTransaction
    }
    strategies(first: 20, orderBy: updatedAtTimestamp, orderDirection: desc, where: { vault: $vault }) {
      id
      address
      allowed
      kind
      allocation
      allocationCap
      updatedAtTimestamp
    }
    _meta {
      block {
        number
        timestamp
      }
      hasIndexingErrors
    }
  }
`);
