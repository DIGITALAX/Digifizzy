import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import cn from 'classnames'
import { INDEX_PATH } from '@constants/router-constants'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

const Logo = ({ className, isMobile }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Link href={INDEX_PATH}>
      <a className={cn(className, styles.wrapper)}>
        <img
          src={
            pathname.includes('purchase') || pathname.includes('contact') || isMobile
              ? './images/icons/logo.svg'
              : './images/DIGITALAX-white.png'
          }
          alt='logo'
        />
        <p className={styles.description}>Web3 Fashion Economy</p>
      </a>
    </Link>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool
}

Logo.defaultProps = {
  className: '',
  isMobile: false
}

export default memo(Logo)
