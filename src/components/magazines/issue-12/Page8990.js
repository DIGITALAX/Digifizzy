import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page8990.module.scss'

const Page8990 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground1}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/9192_background.jpg`}
          width={960}
          height={1497}
        />
      </div>
      <div className={styles.imageBackground2}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/9192_background.jpg`}
          width={960}
          height={1497}
        />
      </div>
      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/8990_image1.png`}
          width={845}
          height={1497}
        />
      </div>
      <div className={styles.image2}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/8990_image2.png`}
          width={570}
          height={570}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/8990_image2.png`}
          width={570}
          height={570}
        />
      </div>
      <div className={styles.image4}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/8990_image3.png`}
          width={1140}
          height={881}
        />
      </div>
      <div className={styles.text1}>
        The Origins of Copyright and IP
      </div>
      <div className={styles.text2}>
        The establishment of rights over thoughts, ideas, and innovation ever since mankind emerged from the primordial soup has helped us to build what we now know as modern civilization.
        <br /><br />
        All of it.
        <br /><br />
        The history of intellectual property may be distilled into the fact that humankind has always had innovation at the core of the communities that comprise it. 
        <br /><br />
        Creativity has always driven societal innovation.
        <br /><br />
        And the modern world, for better or for worse, is a shining exemplar of this. Society has been, throughout the development of human history, proven that creativity innovates community.
        <br /><br />
        Innovation is a core human value that we instinctively draw from creativity.
        <br /><br />
        But just as the ancient Greeks of yore recognized their innovations as the fruit of their god-given creativity, modern man has also given recognition to the individual brilliance of the creative process in the form of intellectual property rights.        
      </div>
    </div>
  )
}

export default Page8990
