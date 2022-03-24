import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './backcover.module.scss'

const Backcover = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/backcover_background.jpg`}
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.text1}>
      DIGIFIZZY
    </div>
    <div className={styles.text2}>
      DIGIFIZZY
    </div>
    <div className={styles.text3}>
      DIGIFIZZY
    </div>
    <div className={styles.imageIssueNo}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/frontcover_issueNo.png`}
        width={239}
        height={250}
      />
    </div>
  </div>
)

export default Backcover
