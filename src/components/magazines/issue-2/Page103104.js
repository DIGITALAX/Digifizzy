import React from 'react'
import Link from 'next/link'
import styles from './page103104.module.scss'

const Page103104 = () => (
  <div className={styles.wrapper}>
    <img src='./magazine/2/images/103_104/image1.png' className={styles.image1} />
    <img src='./magazine/2/images/103_104/image4.png' className={styles.image4} />
    <img src='./magazine/2/images/103_104/image4.png' className={styles.image5} />
    <img src='./magazine/2/images/103_104/image3.png' className={styles.image3} />
    <img src='./magazine/2/images/103_104/image5.png' className={styles.image6} />
    <video className={styles.image2} muted loop autoPlay>
      <source src='./magazine/2/images/103_104/espa_skin.mp4' type='video/mp4' />
    </video>
    <Link href='https://instagram.com/pr.esc/'><a className={styles.text1}>
      Jessica Schott
    </a>
    </Link>
    <p className={styles.text2}>BBLUNDERR</p>
    <p className={styles.text3}>minecraft</p>
  </div>
)

export default Page103104
