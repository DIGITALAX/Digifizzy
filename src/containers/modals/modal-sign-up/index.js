import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Button from '@components/buttons/button'
import Modal from '@components/modal'
import Loader from '@components/loader'

import { USERNAME_ERROR, USERNAME_ALREADY_EXISTS } from '@constants/global.constants'
import { closeSignupModal } from '@actions/modals.actions'
import userActions from '@actions/user.actions'

import { getAccount, getIsLoading } from '@selectors/user.selectors'
import { getModalParams } from '@selectors/modal.selectors'

import { useSignMessage, useUserNameAvailable, useMyIP } from '@hooks/espa/user.hooks'
import styles from './styles.module.scss'

const ModalSignUp = ({ className, title }) => {
  const dispatch = useDispatch()
  const params = useSelector(getModalParams)

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState(params?.email)

  const account = useSelector(getAccount)
  const isLoading = useSelector(getIsLoading)
  const signMsg = useSignMessage(account)
  const isUserNameAvailable = useUserNameAvailable(userName)
  const myIP = useMyIP()

  const handleClose = () => {
    dispatch(closeSignupModal())
  }

  const validateUserName = (username) => {
    const regEx = /^[A-Za-z0-9]*$/
    return regEx.test(String(username))
  }

  const validateEmail = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regEx.test(String(email).toLowerCase())
  }

  const handleClick = () => {
    if (!signMsg) {
      if (!validateUserName(userName)) {
        toast('User ID must contains letters and numbers only!')
        return
      }
      if (!validateEmail(email)) {
        toast('You have entered an invalid Email address!')
        return
      }
    }
    dispatch(userActions.tryToSignup(account, userName, email, signMsg, myIP))
  }

  const userNameChanged = (username) => {
    setUserName(username)
  }

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={title}
          className={(className, styles.modalWrapper)}
        >
          <span>{`CURRENT ETH ADDRESS: ${account || 'WALLET NOT CONNECTED'}`}</span>
          {signMsg === null ? (
            <Loader size='large' className={styles.loader} />
          ) : (
            <>
              {signMsg === ''
                && (myIP === null ? (
                  <Loader size='large' className={styles.loader} />
                ) : (
                  <>
                    <div className={styles.inputItem}>
                      <div className={styles.userIdRow}>
                        <label>USER ID</label>
                        <span className={styles.questionMark}>?</span>
                        <span className={styles.hint}>
                          Username must not exceed 10 characters. No special characters allowed,
                          only numbers and letters.
                        </span>
                      </div>
                      <input value={userName} onChange={(e) => userNameChanged(e.target.value)} />
                      {
                        isUserNameAvailable === USERNAME_ALREADY_EXISTS && (
                          <p>That User ID is already taken. Please choose another one</p>
                        )
                      }
                      {
                        isUserNameAvailable === USERNAME_ERROR && (
                          <p>Something went wrong on our side. Don't worry, we are working on fixing that right now! Try again soon!</p>
                        )
                      }
                    </div>
                    <div className={styles.inputItem}>
                      <label>EMAIL</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={params?.email}
                      />
                    </div>
                  </>
                ))}
              {isLoading ? (
                <Loader size='large' className={styles.loader} />
              ) : (
                <Button
                  className={styles.modalButton}
                  background='black'
                  onClick={() => handleClick()}
                >
                  {signMsg ? 'SIGN IN' : 'SIGN UP'}
                </Button>
              )}
            </>
          )}
        </Modal>,
        document.body,
      )}
    </>
  )
}

ModalSignUp.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

ModalSignUp.defaultProps = {
  className: '',
  title: 'CREATE AN ACCOUNT'
}

export default ModalSignUp
