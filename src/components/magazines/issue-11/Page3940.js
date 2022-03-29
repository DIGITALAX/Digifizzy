import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page3940.module.scss'

const Page3940 = () => {

  const [play, setPlay] = useState(false)
  const refAudio = useRef()

  const startAudio = () => {
    refAudio.current.play()
    setPlay(true)
  }

  const pauseAudio = () => {
    refAudio.current.pause()
    setPlay(false)
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3940_background.jpg`}
          width={1920}
          height={1497}
        />
      </div>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>

      <div className={styles.text1}>
        I have been writing and making music since 2002, 20 Years! I started writing raps and making beats for my friends in high school. In 2003, I joined a rap group (3CD) with some of my friends and we released over 100 songs, 5 mixtapes and 2 albums. In 2005 I attended University for a Music Technology degree. Through my college years I continued to release music with 3CD as well as music on my own.
      </div>
      <div className={styles.text2}>
        The music industry has been stagnant and held captive to the mercy of digital streaming services. Web3 places the artist and the art back in the control of the creators... It is the future and I’m so excited about the possibilities. Imagine being able to reach your fans in a more intimate level whilst also making them a part of the creative process... mind-blowing!
        <br /><br />
        I have not released an NFT track yet! I have the perfect song to release but I would also like the timing to be perfect. May 20th is the date I have my heart set on, but I will be announcing very soon.... The process for creating NFT drops is completely raw. It’s like you’re a chef who typically cooks buffet style, but now you get to prepare a 5 course meal for a more invested smaller group... it’s more intimate!
      </div>
      <div className={styles.text3}>
        My single “IPRAY” releases March 28th on all digital streaming platforms. I would love the community to follow my social media accounts... @RichieJmusic on all platforms. I believe the more platforms, the more ways you can connect with a possible fan or someone who needs to hear your message.
        <br /><br />
        Web3 is why you create your art and in this way is how it will truly be appreciated. The future of music is entirely all things web3 based and NFT first... things are changing fast!
      </div>
      <div className={styles.text4}>
        I developed the ability to record through the years I was at University. In 2010 I moved to Atlanta, Georgia where I began to produce and ghostwrite for many local acts. I still write, produce and record today.
        <br /><br />
        I came across NFTs/web3 from a mentor of mine! He has been investing in NFTs since early early 2021. I’ve always been interested in the growing community but hadn’t decided to jump on board until I saw one of my favorite artists, Devin Tracy, release a NFT song... then I was completely sold.
      </div>
      <div className={styles.text5}>
        Richie J
      </div>
      <div className={styles.text6}>
        Better
      </div>

      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3940_image1.png`}
          width={692}
          height={694}
        />
      </div>
      <div className={styles.image2}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3940_image2.png`}
          width={354}
          height={357}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3940_image3.png`}
          width={354}
          height={357}
        />
      </div>
      <div className={styles.image4}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3940_image4.png`}
          width={354}
          height={357}
        />
      </div>
      <div className={styles.image5}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3940_image5.png`}
          width={354}
          height={357}
        />
      </div>
      <div className={styles.image6}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3940_image6.png`}
          width={312}
          height={312}
        />
      </div>
      <div className={styles.image7}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3940_image3.png`}
          width={354}
          height={357}
        />
      </div>

      <a className={styles.imagePlayButton} onClick={startAudio}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3940_playbutton.png`}
          width={312}
          height={312}
        />
      </a>
      <a className={styles.imagePauseButton} onClick={pauseAudio}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3940_pausebutton.png`}
          width={312}
          height={312}
        />
      </a>
      <audio ref={refAudio} loop>
        <source
          src={`${DIGIFIZZY_S3}/11/sounds/3940_sound1.mp3`}
          type='audio/mp3'
        />
      </audio>
    </div>
  )
}

export default Page3940
