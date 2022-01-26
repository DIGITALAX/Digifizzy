import React, { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router, { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'
import cn from 'classnames'
import Link from 'next/link'
import Button from '@components/buttons/button'
import SmallPhotoWithText from '@components/small-photo-with-text'
import { getUser } from '@selectors/user.selectors'
import { getChainId } from '@selectors/global.selectors'
import { openConnectMetamaskModal } from '@actions/modals.actions'
import accountActions from '@actions/user.actions'
import { getEnabledNetworkByChainId } from '@services/network.service'

import Logo from './logo'
import styles from './styles.module.scss'

const HeaderTopLine = ({
  className, isShowStaking, buttonText, linkText, isMagazineContents
}) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isCollapse, setIsCollapse] = useState(false)

  const router = useRouter()
  const { pathname } = router
  const isMobile = !(window.innerWidth > 768)

  const [isShowMenu, setIsShowMenu] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0
      const { scrollTop } = document.documentElement
      const scrolled = scrollTop > offset

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled)
      }
    }, 200)

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const chainId = useSelector(getChainId)
  const network = useMemo(() => {
    console.log(chainId)
    return getEnabledNetworkByChainId(chainId)
  }, [chainId])

  if (isMagazineContents && !isMobile) {
    return null
  }

  const isLandingPage = pathname === '/'

  const isOnRightNetwork = pathname !== '/bridge' && pathname !== '/bridge/deposit'
    ? chainId === '0x89'
    : chainId === '0x1'

  const wrongNetworkText = pathname !== '/bridge' && pathname !== '/bridge/deposit'
    ? network.alias !== 'matic'
      ? 'Please switch to Matic Network'
      : ''
    : 'Please switch to Mainnet'

  if (!user) {
    dispatch(accountActions.checkStorageAuth())
  }

  const handleClick = () => dispatch(openConnectMetamaskModal())
  const onIconHander = () => {
    setIsCollapse(!isCollapse)
  }

  const handleProfileClick = () => {
    setIsShowMenu(false)
    Router.push('/profile')
  }
  const handleLogoutClick = () => {
    setIsShowMenu(false)
    dispatch(accountActions.logout())
  }

  return (
    <div
      className={cn(
        className,
        styles.wrapper,
        isMobile ? styles.mobileNav : '',
        hasScrolled ? styles.floatingNav : '',
      )}
    >
      {!isOnRightNetwork && <p className={styles.notification}>{wrongNetworkText}</p>}
      <div className={styles.leftBox}>
        <Logo isMobile={isMobile} />
      </div>
      <div
        className={cn(
          styles.rightBox,
          pathname.includes('purchase')
            || pathname.includes('contact')
            ? styles.blackWrapper
            : styles.whiteWrapper,
        )}
      >
        <div className={cn(styles.links, isCollapse ? styles.expandedMenu : '')}>
          <Link href='/all-issues'>
            <a className={styles.link}>All Issues</a>
          </Link>
          <Link href='/contact'>
            <a className={styles.link}>Contact</a>
          </Link>
          <Link href='/unlockables'>
            <a className={styles.link}>Unlockable nft drops</a>
          </Link>
          <div className={styles.signBtn}>
            {user ? (
              <div className={styles.buttonWrapper}>
                <SmallPhotoWithText
                  photo={user.get('avatar') ? user.get('avatar') : './images/image.png'}
                  address={user.get('username')}
                  className={styles.hashAddress}
                >
                  <button className={styles.arrowBottom} onClick={() => setIsShowMenu(!isShowMenu)}>
                    <img
                      className={styles.arrowBottomImg}
                      src='./images/icons/arrow-bottom.svg'
                      alt='arrow-bottom'
                    />
                  </button>
                </SmallPhotoWithText>
                {isShowMenu && (
                  <div className={styles.menuWrapper}>
                    <button onClick={() => handleProfileClick()} className={styles.menuButton}>
                      Profile
                    </button>
                    <button onClick={() => handleLogoutClick()} className={styles.menuButton}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button className={styles.signinButton} onClick={() => handleClick()}>
                {buttonText}
              </Button>
            )}
          </div>
          <a href='javascript:void(0);' className={styles.collapseIcon} onClick={onIconHander}>
            &#9776;
          </a>
        </div>
      </div>
    </div>
  )
}

HeaderTopLine.propTypes = {
  className: PropTypes.string,
  isShowStaking: PropTypes.bool,
  buttonText: PropTypes.string,
  linkText: PropTypes.string
}

HeaderTopLine.defaultProps = {
  className: '',
  isShowStaking: false,
  buttonText: 'SIGN IN',
  linkText: 'Staking'
}

export default HeaderTopLine
