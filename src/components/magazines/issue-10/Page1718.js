import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page1718.module.scss'

const Page1718 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1718_background.jpg`}
          width={1618}
          height={1497}
        />
      </div>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
      <div className={styles.rect6}></div>
      <div className={styles.rect7}></div>
      <div className={styles.rect8}></div>
      <div className={styles.rect9}></div>

      <div className={[styles.image1].join(' ')}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1718_image1.png`}
          width={252}
          height={447}
        />
      </div>
      <div className={[styles.image2].join(' ')}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1718_image2.png`}
          width={438}
          height={441}
        />
      </div>
      <div className={[styles.image3].join(' ')}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1718_image3.png`}
          width={425}
          height={249}
        />
      </div>
      <div className={[styles.image4].join(' ')}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1718_image4.png`}
          width={266}
          height={249}
        />
      </div>

      <a
        className={styles.link1}
        href='https://twitter.com/akim_funk'
        target='_blank'
      >
        <div className={styles.text1}>
          Akim Funk Buddha
        </div>
        <div className={styles.text2}>
          Akim Funk Buddha
        </div>
      </a>

      <a
        className={styles.link2}
        href='https://twitter.com/akim_funk'
        target='_blank'
      >
        <div className={styles.text3}>
          Akim Funk Buddha
        </div>
        <div className={styles.text4}>
          Akim Funk Buddha
        </div>
      </a>

      <div className={styles.text5}>
        I've had the blessing of being brought up two different continents during the emergence of Hip Hop.  Born in Syr
        <br /><br />
        acuse New York ,but later grew up in Zimbabwe / South Africa. I've always wanted to know more than what was given or told. From a young age  I always had a different way of processing information. 
        <br /><br />
        This way of being would only begin to make more sense when I stepped into my performance art persona, what I call 'Funk Buddha.' Although I came upon  this name spontaneously, it has become somewhat of an alter ego. Buddha means awakened mind, and Funk represents the power of the groove that also pulls people together and inspires  movement.        
      </div>
      <div className={styles.text6}>
        I've always had an attraction to dance and creative expression. 
        <br /><br />
        Back in the early '90s when I would body paint myself gold and do performances in Parks, streets and even Subway, I began to explore my ability to enter trans like state. When I would finally decide to move, I would feel energy moving through my body. 
        <br /><br />
        This led me to an even deeper path of intuitive  movement exploration. 
        <br /><br />
        Began to develop an animated  creature-like aesthetic. Almost like I was a conductor of energy moving through me. Then one day I thought I saw myself on channel 13 and I was beginning to wonder who had filmed me without my permission. 
        <br /><br />
        As I looked further, I realized it was a documentary that had a section on Temple dancers in Asia. These dancers moved both smooth and fast, slow then staccato. 
        <br /><br />
        This also reminded me of how I moved also. It was then at that moment when I committed to travel to the east. After exploring different countries I began to focus on the Balinese dance called the Baris. This also became the first time I decided to study a dance formally. 
        <br /><br />
        Before this, everything I had learned was self-taught. I use to throat singing inspired by Tuva. This is a technique where one makes more than one tone at the same time. This is also known as overtone and or harmonic singing. My method combines the sound with my movement and therefore  emphasizes that I'm interacting with other dimensions. I'm excited to explore the dimension of the multiverse also known as the metaverse.        
      </div>
      <div className={styles.text7}>
        The true power of the  the arts is something society has  to reconcile with. The artists  need to realize the power within themselves and how this power  amplifies when the correct partnerships come together. 
        <br /><br />
        Artists have become conditioned to compete with each other and so  many great opportunities are missed. Then the people who do not have our best interest in mind  wind up banding together and either taking advantage of us and or just  messing things up. 
        <br /><br />
        Artists need to shift how they generate income & learn how to build together. I'm hopeful that this is what can manifest within the web 3 nft community.
      </div>

      <div className={styles.leftSideFrame} />
      <div className={[styles.animationFrame, styles.leftSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
      </div>
      <div className={styles.rightSideFrame} />
      <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
      </div>
    </div>
  )
}

export default Page1718
