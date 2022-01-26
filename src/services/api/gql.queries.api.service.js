import { gql } from 'graphql-request'
import {
  HISTORY_BID_PLACED_EVENT,
  HISTORY_BID_WITHDRAWN_EVENT
} from '@constants/history.constants'

export const getLiveAuctions = gql`
  {
    digitalaxGarmentAuctions(first: 1000, where: { resulted_not_in: [true] }) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`

export const getAuctionsByIds = gql`
  query getAuctionsByIds($ids: [ID!]) {
    digitalaxGarmentAuctions(first: 1000, where: { id_in: $ids }) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`

export const getGarmentsByIds = gql`
  query getGarmentsByIds($ids: [ID!]) {
    digitalaxGarments(first: 1000, where: { id_in: $ids }) {
      id
      designer
      owner
      primarySalePrice
      tokenUri
      children {
        amount
        tokenUri
        id
      }
    }
  }
`

export const getDesignersByIds = gql`
  query getDesignersByIds($ids: [ID!]) {
    digitalaxGarmentDesigners(first: 1000, where: { id_in: $ids }) {
      id
      garments(first: 1000) {
        id
        tokenUri
      }
      listings {
        reservePrice
        startTime
        endTime
        resulted
        topBidder {
          id
        }
        topBid
        lastBidTime
      }
    }
  }
`

export const getGarmentsByDesignerId = gql`
  query getGarmentsByDesignerId($ids: [Bytes!]) {
    digitalaxGarments(first: 1000, where: { designer_in: $ids }) {
      id
      designer
      owner
      primarySalePrice
      tokenUri
      children {
        amount
        tokenUri
        id
      }
    }
  }
`

export const getAuctionsHistoryByIds = gql`
  query getAuctionsHistoryByIds($ids: [ID!]) {
    digitalaxGarmentAuctionHistories(first: 1000, where: { token_in: $ids }) {
      id
      eventName
      timestamp
      transactionHash
      bidder {
        id
      }
      value
      token {
        id
        owner
        primarySalePrice
        tokenUri
        children {
          id
          amount
          tokenUri
        }
      }
    }
  }
`

export const getAuctionsHistoryByTimestampGt = gql`
  query getAuctionsHistoryByTimestampGt($timestamp: BigInt!) {
    digitalaxGarmentAuctionHistories(first: 1000, where: {
      eventName_in: ["${HISTORY_BID_PLACED_EVENT}",
       "${HISTORY_BID_WITHDRAWN_EVENT}"], 
       timestamp_gt: $timestamp}) {
      id
      eventName
      timestamp
      value
    }
  }
`

export const getAuctionContracts = gql`
  {
    digitalaxAuctionContracts(first: 1000) {
      id
      minBidIncrement
      bidWithdrawalLockTime
      platformFee
      platformFeeRecipient
      totalSales
    }
  }
`

export const getResultedAuctionsByEndTimeGt = gql`
  query getAuctionsHistoryByTimestampGt($endTime: BigInt!) {
    digitalaxGarmentAuctions(
      first: 1000
      where: { resulted_not_in: [false], endTime_gt: $endTime }
    ) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`

export const getDigitalaxSubscriptionCollectorSimple = gql`
  query digitalaxSubscriptionCollectors($address: ID!) {
    digitalaxSubscriptionCollectors(where: { id: $address }) {
      id
      parentsOwned {
        id
        primarySalePrice
        tokenUri
        designer
        image
        animation
        name
        description
        attributes {
          type
          value
        }
      }
    }
  }
`

export const getDigitalaxSubscriptionCollector = gql`
  query digitalaxSubscriptionCollector($address: ID!) {
    digitalaxSubscriptionCollector(id: $address) {
      id
      childrenOwned {
        childId
        amount
        tokenUri
        owner
      }
    }
  }
`

export const getDigitalaxSubscriptionPurchaseHistory = gql`
  query digitalaxSubscriptionPurchaseHistory($tokenId: ID!) {
    digitalaxSubscriptionPurchaseHistory(id: $tokenId) {
      id
      bundleId
      timestamp
    }
  }
`

export const getDigitalaxSubscriptionMarketplaceOffer = gql`
  query digitalaxSubscriptionMarketplaceOffer($tokenId: ID!) {
    digitalaxSubscriptionMarketplaceOffer(id: $tokenId) {
      id
      amountSold
      primarySalePrice
      amountSold
      startTime
      endTime
    }
  }
`
