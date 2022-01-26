import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAccount } from '@selectors/user.selectors'
import { getChainId } from '@selectors/global.selectors'
import userActions from '@actions/user.actions'
import { getUser } from '@helpers/user.helpers'
import useMaticPosClient from './useMaticPosClient'

export default function useExitFromMatic() {
  const [posClientParent] = useMaticPosClient()
  const account = useSelector(getAccount)
  const chainId = useSelector(getChainId)
  const dispatch = useDispatch()
  const profile = useSelector(getUser)
  const existingTxs = profile?.withdrawalTxs || []

  const exitCallback = useCallback(
    (txId) => {
      if (posClientParent && account && chainId) {
        posClientParent
          .exitERC20(txId, {
            from: account
          })
          .then((res) => {
            const index = existingTxs.findIndex((tx) => tx.txHash === txId)
            const newTxs = [...existingTxs]
            newTxs.splice(index, 1)
            dispatch(userActions.updateProfile({ withdrawalTxs: newTxs }))
          })
      }
    },
    [posClientParent, account],
  )

  return exitCallback
}
