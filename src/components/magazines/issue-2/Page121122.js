import React from 'react'
import Link from 'next/link'
import styles from './page121122.module.scss'

const Page121122 = () => (
  <div className={styles.wrapper}>
    <img src='./magazine/2/images/121_122/image1.png' className={styles.image1} />
    <img src='./magazine/2/images/121_122/image1.png' className={styles.image2} />
    <img src='./magazine/2/images/121_122/image1.png' className={styles.image3} />
    <img src='./magazine/2/images/121_122/image1.png' className={styles.image4} />
    <img src='./magazine/2/images/121_122/image2.png' className={styles.image5} />
    <img src='./magazine/2/images/121_122/image3.png' className={styles.image6} />
    <img src='./magazine/2/images/121_122/image4.png' className={styles.image7} />
    <img src='./magazine/2/images/121_122/image5.png' className={styles.image8} />
    <p className={styles.text1}> Mask of Sanity</p>
    <Link href='https://the-dots.com/users/tania-viegas-918782'><a className={styles.text2}>
      Tania Viegas
    </a>
    </Link>
    <Link href='https://paolaguivel.com'><a className={styles.text3}>
      Paola Olaguivel
    </a>
    </Link>
  </div>
)

export default Page121122
