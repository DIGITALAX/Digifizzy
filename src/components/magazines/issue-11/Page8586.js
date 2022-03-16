import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page8586.module.scss'

const Page8586 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/8586_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/8586_image1.png`}
        width={1555}
        height={749}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/8586_image2.png`}
        width={456}
        height={557}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/8586_image3.png`}
        width={408}
        height={596}
      />
    </div>
    <div className={styles.image4}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/8586_image4.png`}
        width={413}
        height={601}
      />
    </div>
    
    <a
      className={styles.text1}
      href='https://twitter.com/Micahs_Universe'
      target='_blank'
    >
      Micah’s Universe
    </a>
    <div className={styles.text2}>
      I started acting nine years ago! I always loved mimicking what I saw on screen and when I was a teenager, I decided I wanted to go into the profession. Acting was my source of liberation and modeling became another channel of freedom for me! I want to use my talents to help change the world. I wish for others to stand up for what’s right and to do it in style. 
    </div>
    <div className={styles.text3}>
      One unexpeted and memoriable moments in my own life journey was when  I ran into Bill Clinton. I was on my way back home from eating dinner with a friend. I then saw him about to go into his hotel… of course me being me I had to say hello! I took a pic with him (we were blinded by the flash on my phone lol!).
    </div>
    <div className={styles.text4}>
      Another unforgettable experience that I will never forget was when I got to walk in my first protest for the BLM movement in June 2020. This experience was so moving for me. My grandfather was a huge advocate for being an active citizen and pushing to get rights for black and brown communities. I’ve always wanted to follow his footsteps and fight for a good cause. 
    </div>
    <div className={styles.text5}>
      In terms of bigger changes that still need to be made on a societal level, well, for me it is simple- more spaces for POC, LGBTQ+, and women! It’s expected for creatives to have this mind set, that there should be a safe space, for any and all identities. There needs to be an expansion of open spaces, for all job fields around the globe!
      <br /><br />
      More inclusion in all spaces and areas. Everyone should be given more access to resources. There should be specific platforms for types of artists such as, one for emerging artists, established artists, and going all the way up to veterans. These platforms would already have a base of people, that want to buy, share, or partake in someones art.
    </div>
    <div className={styles.text6}>
      We live in an ever changing world. Sometimes it’s for face value and other times it’s for a deeper purpose. I haven’t gotten into buying or selling NFT’s yet. I can’t wait to apply what I’ve learned, over the past month. This is a safer and efficient way for creatives to share their work. I am honored to be apart of this.
    </div>

    
  </div>
)

export default Page8586
