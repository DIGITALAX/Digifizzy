import React from 'react'
import Image from 'next/image'

import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page9596.module.scss'

const Page9596 = () => {
 
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/9596_background.jpg`}
          width={960}
          height={1497}
        />
      </div>
      <div className={styles.text1}>
        WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text2}>
        WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text3}>
        WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text4}>
        WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text5}>
        WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text6}>
        FASHION FOR THE METAVERSE
      </div>
      <div className={styles.rect1}>
      </div>
      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/9596_image1.jpg`}
          width={960}
          height={295}
        />
      </div>
      <div className={styles.image2}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/9596_image2.png`}
          width={378}
          height={169}
        />
      </div>
      <div className={styles.text1}>
        Models A La Mode is our newly launched podcast within the Global Models Syndicate— it’s similar to the Tales of Web3 Tailors, with a kinesthetic twist of non-fungible poses. 
        <br /><br />
        It’s not just about releasing some audio tracks for anyone in the community to jack in the aux and get to know more about their favourite web3 models. It goes much deeper than that. 
        <br /><br />
        Modeling is so much more than just a surface look. 
        <br /><br />
        It’s an exploration of the relationships between motion and space and what actually drives us towards our attraction to each other, what we wear, how we express ourselves and so much more. 
        <br /><br />
        Discovering the stories of what we otherwise only see in front of the lense provides greater perspective on what we can begin to imagine and expect to happen as the metaverse and digital-physical NPC and human hybrid models become the norm. 
      </div>
      <div className={styles.text2}>
        Listen in to some of the first episodes below!        
      </div>
    </div>
  )
}

export default Page9596
