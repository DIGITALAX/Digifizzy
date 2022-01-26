import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { getAccount } from '@selectors/user.selectors'
import config from '@utils/config'
import { getChainId } from '@selectors/global.selectors'
import { getEnabledNetworkByChainId } from '@services/network.service'
import { convertToWei } from '@helpers/price.helpers'
import useMaticPosClient from './useMaticPosClient'
import { useIsMainnet } from './useIsMainnet'

export default function useDepositToMatic() {
  const [posClient] = useMaticPosClient()
  const account = useSelector(getAccount)
  const chainId = useSelector(getChainId)
  const isMainnet = useIsMainnet()

  const depositCallback = useCallback(
    (amount) => {
      if (posClient && account && chainId) {
        posClient
          .depositERC20ForUser(
            config.MONA_TOKEN_ADDRESSES[isMainnet ? 'mainnet' : 'goerli'],
            account,
            convertToWei(amount),
            {
              from: account
            },
          )
          .then((res) => {
            console.log('deposit resp', res)
          })
      }
    },
    [posClient, account],
  )

  return depositCallback
}
