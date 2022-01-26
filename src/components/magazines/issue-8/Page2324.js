import React from 'react'
import Image from 'next/image'
import styles from './page2324.module.scss'

const Page2324 = () => (
  <div className={styles.wrapper}>
    <div className={styles.background}>
      <Image
        width={1920}
        height={1497}
        src='/magazine/8/images/2324_background.jpg'
      />
    </div>
    <div className={styles.rect1}></div>
    <div className={styles.text1}>
      Air Rights for Metaverse Real Estate Developers
    </div>
    <div className={styles.text2}>
      Peezy
    </div>
  </div>
)

export default Page2324
