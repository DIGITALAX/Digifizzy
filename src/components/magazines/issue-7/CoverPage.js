import React from 'react'
import styles from './coverpage.module.scss'

const CoverPage = () => {
  console.log('this is loaded.')
  return (
    <div className={styles.wrapper}>
      <img className={styles.background} src='/magazine/7/images/frontcover_background.jpg' />
      <img className={styles.image1} src='/magazine/7/images/backcover_image1.png' />
      <div className={styles.text1}>
        Web3 Gaming, Virtual Land Offerings <br />
        and the rise of interoperable Realms
      </div>
      <div className={styles.text2}>
        Indie Gaming & Crushing AAA Toxicity.
      </div>
      <div className={styles.text3}>
        AUSTRALIA
      </div>
      <div className={styles.text4}>
        & <br /><br />
        CRYPTO
      </div>
      <div className={styles.text5}>
        NIFTY ISLAND. NIFTY ISLAND. NIFTY ISLAND.
      </div>
      <div className={styles.text6}>
        Chainsafe & Unity x NFT Plugins
      </div>
      <div className={styles.text7}>
        Unbundling P2E & it’s derivatives.
      </div>
      <div className={styles.text8}>
        Open Source Gaming & Web3 Incentives.
      </div>
      <div className={styles.text9}>
        BLOCKADE GAMES & NEON DISTRICT
      </div>
      <div className={styles.text10}>
        DIGIFIZZY
      </div>
      <div className={styles.text11}>
        DIGIFIZZY
      </div>
      <div className={styles.text12}>
        DIGIFIZZY
      </div>

      <div className={styles.text13}>
        IssueSeven
      </div>
      <div className={styles.text14}>
        IssueSeven
      </div>
    </div>
  )
}

export default CoverPage
