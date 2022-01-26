import BaseActions from '@actions/base-actions'
import { utils as ethersUtils } from 'ethers'
import { convertToWei } from '@helpers/price.helpers'
import {
  getMarketplaceContractAddressByChainId,
  getMarketplaceContractNFTAddressByChainId,
  getMonaContractAddressByChainId
} from '@services/network.service'

import auctionReducer from '../reducers/auction.reducer'
import {
  getContract,
  getMarketplaceContract,
  getMarketplaceNFTContract,
  getMonaTokenContract
} from '../services/contract.service'

class BidActions extends BaseActions {

  bid(id, value) {
    return async (_, getState) => {
      const account = getState().user.get('account')
      const auctionContractAddress = getState().global.get('auctionContractAddress')
      const contract = await getContract(auctionContractAddress)
      const weiValue = convertToWei(value)
      const chainId = getState().global.get('chainId')

      const monaContractAddress = await getMonaContractAddressByChainId(chainId)
      const monaContract = await getMonaTokenContract(monaContractAddress)
      const allowedValue = await monaContract.methods
        .allowance(account, auctionContractAddress)
        .call({ from: account })
      const jsAllowedValue = parseFloat(ethersUtils.formatEther(allowedValue))
      if (jsAllowedValue < 10000000000) {
        const listener = monaContract.methods
          .approve(auctionContractAddress, convertToWei(20000000000))
          .send({ from: account })
        const promise = new Promise((resolve, reject) => {
          listener.on('error', (error) => reject(error))
          listener.on('confirmation', (transactionHash) => resolve(transactionHash))
        })
        return {
          promise,
          unsubscribe: () => {
            listener.off('error')
            listener.off('transactionHash')
          }
        }
      }
      const listener = contract.methods.placeBid(id, weiValue).send({ from: account })
      const promise = new Promise((resolve, reject) => {
        listener.on('error', (error) => reject(error))
        listener.on('transactionHash', (transactionHash) => resolve(transactionHash))
      })
      return {
        promise,
        unsubscribe: () => {
          listener.off('error')
          listener.off('transactionHash')
        }
      }
    }
  }

  getAllowanceForAcution() {
    return async (_, getState) => {
      const account = getState().user.get('account')
      const chainId = getState().global.get('chainId')
      const auctionContractAddress = getState().global.get('auctionContractAddress')
      const monaContractAddress = await getMonaContractAddressByChainId(chainId)
      const monaContract = await getMonaTokenContract(monaContractAddress)
      const allowedValue = await monaContract.methods
        .allowance(account, auctionContractAddress)
        .call({ from: account })
      return allowedValue
    }
  }

  getApprovedInMona() {
    return async (_, getState) => {
      const account = getState().user.get('account')
      const chainId = getState().global.get('chainId')
      const marketplaceContract = await getMarketplaceContractAddressByChainId(chainId)
      const monaContractAddress = await getMonaContractAddressByChainId(chainId)
      const monaContract = await getMonaTokenContract(monaContractAddress)
      const allowedValue = await monaContract.methods
        .allowance(account, marketplaceContract)
        .call({ from: account })
      console.log({ allowedValue })
      const jsAllowedValue = parseFloat(ethersUtils.formatEther(allowedValue))
      return jsAllowedValue > 10000000000
    }
  }

  buyNow(id, value, isMona) {
    return async (_, getState) => {
      const account = getState().user.get('account')
      const chainId = getState().global.get('chainId')
      const marketplaceContract = await getMarketplaceContractAddressByChainId(chainId)
      const contract = await getMarketplaceContract(marketplaceContract)
      if (isMona) {
        const monaContractAddress = await getMonaContractAddressByChainId(chainId)
        const monaContract = await getMonaTokenContract(monaContractAddress)
        const allowedValue = await monaContract.methods
          .allowance(account, marketplaceContract)
          .call({ from: account })
        const jsAllowedValue = parseFloat(ethersUtils.formatEther(allowedValue))
        if (jsAllowedValue < 10000000000) {
          const listener = monaContract.methods
            .approve(marketplaceContract, convertToWei(20000000000))
            .send({ from: account })
          const promise = new Promise((resolve, reject) => {
            listener.on('error', (error) => reject(error))
            listener.on('confirmation', (transactionHash) => resolve(transactionHash))
          })
          return {
            promise,
            unsubscribe: () => {
              listener.off('error')
              listener.off('transactionHash')
            }
          }
        }
      }

      const listener = contract.methods
        .buyOffer(id, isMona)
        .send({ from: account, value: isMona ? 0 : value })
      const promise = new Promise((resolve, reject) => {
        listener.on('error', (error) => reject(error))
        listener.on('transactionHash', (transactionHash) => resolve(transactionHash))
      })
      return {
        promise,
        unsubscribe: () => {
          listener.off('error')
          listener.off('transactionHash')
        }
      }
    }
  }

  getApprovedInMonaNft() {
    return async (_, getState) => {
      const account = getState().user.get('account')
      const chainId = getState().global.get('chainId')
      const marketplaceContract = await getMarketplaceContractNFTAddressByChainId(chainId)
      const monaContractAddress = await getMonaContractAddressByChainId(chainId)
      const monaContract = await getMonaTokenContract(monaContractAddress)
      const allowedValue = await monaContract.methods
        .allowance(account, marketplaceContract)
        .call({ from: account })
      const jsAllowedValue = parseFloat(ethersUtils.formatEther(allowedValue))
      return jsAllowedValue > 10000000000
    }
  }

  buyNowNftSubscription(id, isMona) {
    return async (_, getState) => {
      const account = getState().user.get('account')
      const chainId = getState().global.get('chainId')
      const marketplaceContract = await getMarketplaceContractNFTAddressByChainId(chainId)
      const contract = await getMarketplaceNFTContract(marketplaceContract)
      if (isMona) {
        const monaContractAddress = await getMonaContractAddressByChainId(chainId)
        const monaContract = await getMonaTokenContract(monaContractAddress)
        const allowedValue = await monaContract.methods
          .allowance(account, marketplaceContract)
          .call({ from: account })
        const jsAllowedValue = parseFloat(ethersUtils.formatEther(allowedValue))
        if (jsAllowedValue < 10000000000) {
          const listener = monaContract.methods
            .approve(marketplaceContract, convertToWei(20000000000))
            .send({ from: account })
          const promise = new Promise((resolve, reject) => {
            listener.on('error', (error) => reject(error))
            listener.on('confirmation', (transactionHash) => resolve(transactionHash))
          })
          return {
            promise,
            unsubscribe: () => {
              listener.off('error')
              listener.off('transactionHash')
            }
          }
        }
      } else {
        const listener = contract.methods.buyOffer(id).send({ from: account })
        const promise = new Promise((resolve, reject) => {
          listener.on('error', (error) => reject(error))
          listener.on('confirmation', (transactionHash) => resolve(transactionHash))
        })
        return {
          promise,
          unsubscribe: () => {
            listener.off('error')
            listener.off('transactionHash')
          }
        }
      }
    }
  }

  withdraw(id) {
    return async (_, getState) => {
      const account = getState().user.get('account')
      const auctionContractAddress = getState().global.get('auctionContractAddress')
      const contract = await getContract(auctionContractAddress)
      const listener = contract.methods.withdrawBid(id).send({ from: account })
      const promise = new Promise((resolve, reject) => {
        listener.on('error', (error) => reject(error))
        listener.on('transactionHash', (transactionHash) => resolve(transactionHash))
      })

      return {
        promise,
        unsubscribe: () => {
          listener.off('error')
          listener.off('transactionHash')
        }
      }
    }
  }

}

export default new BidActions(auctionReducer)
