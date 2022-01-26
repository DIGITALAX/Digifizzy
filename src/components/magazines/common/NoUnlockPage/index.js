import React from 'react'
import Router from 'next/router'
import styles from './styles.module.scss'

const NoUnlockPage = (props) => {
  const { issueId } = props
  console.log(`issueId - ${ issueId}`)
  return (
    <>
      <div className={styles.wrapper} />
      <div className={styles.title}>
        View DIGIFIZZY Bundles
      </div>
      <div className={styles.description}>
        All magazine issues come with unique content bundles designed both in house and alongside a mix of creators across music, art, fashion and other creative industries. You can check out each rarity edition and unlockable bundle below!
      </div>
      <img className={styles.unlockArrow} src='/images/unlock-arrow.png' />
      <button
        className={styles.unlock}
        onClick={() => {
          if (issueId >= 7 || issueId <= 9) {
            Router.push('/unlockable/1')
          }
        }}
      >
        VIEW
      </button>
    </>
  )
}

export default NoUnlockPage
