import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import bidActions from '@actions/bid.actions'
import global from '@actions/global.actions'
import {
  closeBuynowNftSubscriptionModal,
  openNftSubscriptionReadyModal
} from '@actions/modals.actions'

import { getMonaPerEth, getChainId } from '@selectors/global.selectors'
import { getModalParams } from '@selectors/modal.selectors'

import Button from '@components/buttons/button'
import Modal from '@components/modal'

import { DIGITALAX_FASHION_WEBSITE } from '@constants/urls'
import styles from './styles.module.scss'

const BuyNowNftSubscription = ({
  className, title, buttonText1, buttonText2
}) => {
  const dispatch = useDispatch()
  const requests = useRef([])
  const monaPerEth = useSelector(getMonaPerEth)

  const { id, priceEth } = useSelector(getModalParams)
  const chainId = useSelector(getChainId)
  const isMatic = chainId === '0x13881' || chainId === '0x89'

  const [isDisabled, setIsDisabled] = useState(false)
  const [showError, setShowError] = useState(null)
  const [approved, setApproved] = useState(false)

  const handleClose = () => {
    dispatch(closeBuynowNftSubscriptionModal())
  }

  const handleCloseSuccess = () => {
    handleClose()
    dispatch(global.setContentUnlocked(true))
    dispatch(openNftSubscriptionReadyModal())
  }

  const handleClick = (mode) => {
    setShowError(null)
    setIsDisabled(true)
    dispatch(bidActions.buyNowNftSubscription(id, mode === 0)).then((request) => {
      requests.current.push(request)
      request.promise
        .then(() => {
          if (mode === 0 && approved === false) {
            setApproved(true)
            setIsDisabled(false)
          } else {
            handleCloseSuccess()
          }
        })
        .catch((e) => {
          setShowError(e.message)
          setIsDisabled(false)
        })
    })
  }

  useEffect(() => {
    async function getMonaApproval() {
      dispatch(bidActions.getApprovedInMonaNft()).then((val) => {
        setApproved(val)
      })
    }

    getMonaApproval()

    return () => {
      requests.current.forEach((request) => request.unsubscribe())
      requests.current = []
    }
  }, [])

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={title}
          titleStyle={styles.textCenter}
          className={className}
        >
          <div className={styles.footer}>
            <p className={styles.footerCaption}>
              <span>
                Need to top up on $MONA? Get it{' '}
                <a href={`${DIGITALAX_FASHION_WEBSITE}/swap/`} target='_blank' rel='noreferrer'>
                  here.
                </a>
              </span>
            </p>
            <div className={styles.selectWrapper}>
              <span>
                {priceEth}
                $MONA
              </span>
              <Button
                isDisabled={isDisabled || !isMatic}
                background='black'
                onClick={() => handleClick(approved ? 1 : 0)}
                className={styles.button}
              >
                {approved ? buttonText1 : 'APPROVE $MONA'}
              </Button>
            </div>
            {showError && <p className={styles.error}>{showError}</p>}
          </div>
        </Modal>,
        document.body,
      )}
    </>
  )
}

BuyNowNftSubscription.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string
}

BuyNowNftSubscription.defaultProps = {
  className: '',
  title: 'BUY NOW',
  buttonText1: 'USE $MONA',
  buttonText2: 'USE ETH'
}

export default BuyNowNftSubscription
