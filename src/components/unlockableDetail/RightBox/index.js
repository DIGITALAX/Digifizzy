import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  openBuynowNftLimitModal,
  openBuynowNftSubscriptionModal,
  openConnectMaticModal,
  openConnectMetamaskModal,
  openBuynowNftCoolDownModal,
  closeBuynowNftSubscriptionModal
} from '@actions/modals.actions'
import { getChainId } from '@selectors/global.selectors'
import { getAccount } from '@selectors/user.selectors'

import api from '@services/api/api.service'
import Button from '@components/buttons/button'

import styles from './styles.module.scss'

const RightBox = ({ details, id, activeImage }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { issueId } = router.query
  const [amountSold, setAmountSold] = useState(0)
  const [buyAvailable, setBuyAvailable] = useState(true)
  const account = useSelector(getAccount)
  const chainId = useSelector(getChainId)
  const [collectionIds, setCollectionIds] = useState([])
  const [lastPurchasedTime, setLastPurchasedTime] = useState(0)
  const isMatic = chainId === '0x13881' || chainId === '0x89'
  const modals = useSelector((state) => state.modals.toJS())
  const { isShowBuyNowNftSubscription } = modals
  const { contentUnlocked } = useSelector((state) => state.global.toJS())

  useEffect(() => {
    const fetchSubscriptionOffer = async () => {
      try {
        const { digitalaxSubscriptionMarketplaceOffer } = await api.getDigitalaxSubscriptionOffer(
          details.id,
        )
        setAmountSold(digitalaxSubscriptionMarketplaceOffer.amountSold)
      } catch (e) {
        console.log('error happend on fetching: ', e)
      }
    }

    const fetchSubscriptionStatus = async () => {
      const ids = []

      try {
        const { digitalaxSubscriptionCollectors } = await api.getSubscriptionNftStatus(account)

        for (let i = 0; i < digitalaxSubscriptionCollectors.length; i += 1) {
          for (let j = 0; j < digitalaxSubscriptionCollectors[i].parentsOwned.length; j += 1) {
            const { digitalaxSubscriptionPurchaseHistory } = await api.getDigitalaxSubscriptionPurchase(
              digitalaxSubscriptionCollectors[i].parentsOwned[j].id,
            )
            if (digitalaxSubscriptionPurchaseHistory.bundleId === details.id) {
              ids.push(digitalaxSubscriptionPurchaseHistory)
              if (lastPurchasedTime < parseInt(digitalaxSubscriptionPurchaseHistory.timestamp)) {
                setLastPurchasedTime(parseInt(digitalaxSubscriptionPurchaseHistory.timestamp))
              }
            }
          }
        }
      } catch (e) {
        console.log('getSubscriptionNftStatus error: ', e)
      }

      setCollectionIds(ids)
      setBuyAvailable(true)
    }

    if (!isShowBuyNowNftSubscription) {
      setBuyAvailable(false)
      fetchSubscriptionOffer()
      fetchSubscriptionStatus()
    }
  }, [isShowBuyNowNftSubscription])

  const checkLastPurchasedTime = (id) => {
    const now = new Date()
    return parseInt(lastPurchasedTime) + 60 < now.getTime() / 1000
  }

  const onUnlock = () => {
    if (!checkLastPurchasedTime(details.id)) {
      dispatch(openBuynowNftCoolDownModal())
      return
    }
    if (collectionIds.length >= 10) {
      dispatch(openBuynowNftLimitModal())
      return
    }
    if (account) {
      if (amountSold >= details.amountAvailable) {
        window.alert('No available items.')
      } else {
        if (!isMatic) {
          dispatch(openConnectMaticModal())
          return
        }
        if (account) {
          dispatch(
            openBuynowNftSubscriptionModal({
              id: details.id,
              priceEth: details.price
            }),
          )
        } else {
          dispatch(openConnectMetamaskModal())
        }
      }
    } else {
      window.alert('Please sign in to purchase this item!')
    }
  }

  const onUnlockChild = () => {
    router.push('/profile')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {details.title}
        {`${details.subTitle ? `: ${details.subTitle[activeImage]}` : ''}`}
      </div>
      <div className={styles.body}>
        {typeof details.body === 'string' ? details.body : details.body[activeImage]}
      </div>
      <div className={styles.price}>
        {details.price} $MONA
        {/* <span>{`${amountSold} of ${details.amountAvailable}`}</span>{' '} */}
      </div>
      {contentUnlocked ? (
        <Button className={styles.unlockChildButton} onClick={onUnlockChild}>
          {' '}
          UNLOCK 1155 TRESURES{' '}
        </Button>
      ) : null}
      <div className={styles.actionGroup}>
        <Button isDisabled={!buyAvailable} background='black' onClick={onUnlock}>
          {buyAvailable ? 'UNLOCK' : <div className={styles.spinner} />}
        </Button>
        {contentUnlocked ? (
          <Link href={`/magazines/${issueId}/hidden`}>
            <Button background='black' className={styles.showHiddenButton}>
              SEE HIDDEN CONTENT
            </Button>
          </Link>
        ) : null}
      </div>
      {/* <div className={styles.poapWrapper}>
        <a href="https://poap.website/digifizzy6" target="_blank" rel="noreferrer">
          <Button className={styles.poapClaimButton}>CLAIM ISSUE 6 POAP!</Button>
        </a>
        <img src="/images/poap.png" />
      </div> */}
    </div>
  )
}

export default RightBox
