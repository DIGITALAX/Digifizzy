import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page1112.module.scss'

const Page1112 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/1112_image1.png`}
        width={847}
        height={1452}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/0708_image3.png`}
        width={125}
        height={125}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/0708_image3.png`}
        width={125}
        height={125}
      />
    </div>
    <div className={styles.text1}>
      CC0 empowers creators way beyond copyright–and in fact protects them from the same monoliths and giants that have had a sterling record in arbitrarily deplatforming and censoring individuals thought to have crossed the company line, allowing their creations to live forever freely, and open doors to more creative liquidity that the spirit of CC0 ultimately fosters. It protects against the toxic culture of carny exploitative cliquism that goes against every single fiber of web3. Participating in CC0 culture is an act of solidarity with the latter’s principles. 
      <br /><br />
      In the end, web3 is at its most naked and powerful when it is open, decentralized, and permissionless. 
      <br /><br />
      Ultimately, Creative Commons is the path forward for web3–and its importance to building entirely new web3 brands and industries is understood by those in the know.
    </div>

    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>

    <div className={styles.line1}></div>
    <div className={styles.line2}></div>
    <div className={styles.line3}></div>

    <div className={styles.line4}></div>
    <div className={styles.line5}></div>
    <div className={styles.line6}></div>
    <div className={styles.line7}></div>
    <div className={styles.line8}></div>
    <div className={styles.line9}></div>
    <div className={styles.line10}></div>
    <div className={styles.line11}></div>
    <div className={styles.line12}></div>
    <div className={styles.line13}></div>
    <div className={styles.line14}></div>
    <div className={styles.line15}></div>
    <div className={styles.line16}></div>
    <div className={styles.line17}></div>
  </div>
)

export default Page1112
