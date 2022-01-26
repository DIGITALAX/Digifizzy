import React from 'react'
import Image from 'next/image'
import styles from './coverpage.module.scss'

const CoverPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src='/magazine/8/images/frontcover_background.jpg'
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.image1}>
      <Image
        src='/magazine/8/images/frontcover_image1.png'
        width={256}
        height={316}
      />
    </div>

    <div className={styles.text1}>
      Metaverse cities and meta models IN the realm: NEW YORK <br />
      CITY
    </div>
    <div className={styles.text2}>
      ML TRAINING & DATA QUALITY : JONATHAN SPOONER
    </div>
    <div className={styles.text3}>
      Matthew Davis x Fashion NFTs
    </div>
    <div className={styles.text4}>
      PARSONS-SVA
    </div>
    <div className={styles.text5}>
      RUNWAYS OF THE REALMS
    </div>
    <div className={styles.text6}>
      Models, make up, hair beauty & more.
    </div>
    <div className={styles.text7}>
      DIGIFIZZY
    </div>
    <div className={styles.text8}>
      DIGIFIZZY
    </div>
    <div className={styles.text9}>
      DIGIFIZZY
    </div>
    <div className={styles.text10}>
      IssueEight
    </div>
    <div className={styles.text11}>
      IssueEight
    </div>
  </div>
)

export default CoverPage
