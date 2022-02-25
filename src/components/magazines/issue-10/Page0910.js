import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page0910.module.scss'

const Page0910 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/0708_image2.png`}
        width={326}
        height={456}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/0708_image2.png`}
        width={326}
        height={456}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/0708_image2.png`}
        width={326}
        height={456}
      />
    </div>

    <div className={styles.text1}>
      The hesitation for some indie creators is understandable as the dictatorial powers-that-be have forced them to sit there, own nothing, and be happy. Or it might come in the form of bells and whistles distracting them from actually creating something worthwhile apart from vapid 30-second
    </div>
    <div className={styles.text2}>
      snapshots that can be shut down at a moment’s notice anyway. 
      <br /><br />
      Some revel in the fantasy that aping the actions of the corporations responsible for making the environment toxic protects them by retreating to the confines of outdated regulations that the big players can flaunt anyway.
      <br /><br />
      But what makes CC0 a mechanism to unlock value and prosperity for web3?
    </div>
    <div className={styles.text3}>
      It’s an incredibly powerful tool to amplify a web3 or NFT startup’s public image and brand, while allowing all sorts of new, independent, and fresh creators the tools to produce, reimagine, and create anew, without the constraints of archaic copyright law which, quite frankly, is out of touch with the digital new order anyway. Toothless and without power to enforce. CC0’s permissiveness allows anyone and everyone to freely use content without fear of a murder of lawyers out to hit you with a fat copyright infringement lawsuit. 
    </div>
    <div className={styles.text4}>
      It might be odd to think that a license waiving all copyright protection is what will create the most economic value and network effects. But that’s just what’s exactly happening in web3. CC0 is the most “web3 friendly” model for governing IP and will be the primary licensing model of choice for true web3.
    </div>
    <div className={styles.text5}>
      That isn’t to say that every web3 startup involved in NFTs needs to embrace CC0, as evidenced by Cryptopunks, whose creators Larva Labs explicitly retain copyright and intellectual property around the whole Punk universe. But CC0 undercuts and releases the leverage corporate web3 has on the 
    </div>
    <div className={styles.text6}>
      entire digital ecosystem. Why? Because the Creative Commons appellation is synonymous with an open, decentralized environment developing intellectual property and how they will be used as one community–and every derivative arising thereof of said NFT or product for that matter.
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
    
  </div>
)

export default Page0910
