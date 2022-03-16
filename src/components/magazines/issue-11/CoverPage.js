import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './coverpage.module.scss'

const CoverPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/frontcover_background.jpg`}
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.imageIssueNo}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/frontcover_issueNo.png`}
        width={239}
        height={264.8}
      />
    </div>
    <div className={styles.text1}>
      Open access, Open Markets, Open Code, Open Libraries.
    </div>
    <div className={styles.text2}>
      Astro Aggy & Creative Empowerment
    </div>
    <div className={styles.text3}>
      Arpeggi
      <br /><br />
      Labs
    </div>
    <div className={styles.text4}>
      The CC0 Revolution
    </div>
    <div className={styles.text4Shadow}>
      The CC0 Revolution
    </div>
    <div className={styles.text5}>
      The origins of copyright and ip. where it went wrong.
    </div>
    <div className={styles.text6}>
      Stellabelle & CryptoStellas
    </div>
    <div className={styles.text7}>
      a noun a day. Everyday.
    </div>
    <div className={styles.text8}>
      Street Art & the Pirate Canvas. Fully Open Modern Content.
    </div>
    <div className={styles.text9}>
      DIGIFIZZY
    </div>
    <div className={styles.text10}>
      DIGIFIZZY
    </div>
    <div className={styles.text11}>
      DIGIFIZZY
    </div>
    <div className={styles.text12}>
      Issue<br/><br/>Eleven
    </div>
    <div className={styles.text13}>
      Issue<br/><br/>Eleven
    </div>
  </div>
)

export default CoverPage
