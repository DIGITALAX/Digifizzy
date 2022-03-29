import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2728.module.scss'

const Page2728 = () => {

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
    <div className={styles.background1}></div>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2728_image1.png`}
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2728_image2.png`}
        width={960}
        height={320}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2728_image3.png`}
        width={960}
        height={320}
      />
    </div>
    <a href='https://twitter.com/superbloxNFT' target='_blank'>
      <div className={styles.image4}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/2728_image4.png`}
          width={1045}
          height={387}
        />
      </div>
    </a>
    <a href='https://twitter.com/toady_hawk' target='_blank'>
      <div className={styles.image5}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/2728_image5.png`}
          width={128}
          height={128}
        />
      </div>
    </a>

    <a href='https://twitter.com/NounPunks' target='_blank'>
      <div className={styles.text1}>
        NounPunks
      </div>
    </a>
    <div className={styles.text2}>
      CC0 3D NFTS + M0RE. TUNE <br />
      IN FOR A CONVERSATION WITH PROJECT TEAM MEMBER TOADY HAWK      
    </div>
    <a href='https://twitter.com/arpeggi_labs' target='_blank'>
      <div className={styles.text3}>
        Arpeggi Studio
      </div>
    </a>
    <div className={styles.text4}>
      We all keep hearing that music NFTs are the next big thing, but what's it actually going to take to get to a breakthrough moment?
      <br /><br />
      One of the key under recognised essential components is the infrastructure required to ignite more open on-chain improvisation, collaboration, pattern sharing, know-how sharing and other genuinely distinctive web3 music trends. 
      <br /><br />
      Arpeggi Labs is pioneering a leading path to bring this much needed infrastructure through its watershed moment. Their engineering allows artists to remix and produce music with direct on-chain minting functionality. The best part about the lab is the low level of friction from ideation, experimentation to production, minting and sale. 
      <br /><br />
      It's no big secret that music is one of the most exploitative creative industries that is almost completely run by the cartels and labels that have a very clear history of abusing artist relations.       
    </div>
    <div className={styles.text5}>
      One of the strongest tools in the kit for pushing back against anti creative industry exploitation and control is through CC0. It removes the ability for these cartels to limit creative free expression and speech with a promised trade off of riches that usually never appears.
      <br /><br />
      Arpeggi is building out an on-chain CC0 music library that will include samples, beats, rhythms, loops and more, establishing as the basic building blocks for any creator to then use, create, derive from and propogate complete songs and their many parts. 
      <br /><br />
      This approach also radically reduces barriers to entry and initial production costs for music artists by giving them direct access to a never ending supply of high quality creative source material, instead of being at the whims and checkpoints of any who would prefer that musicians create less.        
    </div>

    <a className={styles.imagePlayButton} onClick={startAudio}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2728_playbutton.png`}
        width={169}
        height={170}
      />
    </a>
    <a className={styles.imagePauseButton} onClick={pauseAudio}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2728_pausebutton.png`}
        width={169}
        height={170}
      />
    </a>
    <audio ref={refAudio} loop>
      <source
        src={`${DIGIFIZZY_S3}/11/sounds/2728_sound1.mp3`}
        type='audio/mp3'
      />
    </audio>
  </div>
  )
}

export default Page2728
