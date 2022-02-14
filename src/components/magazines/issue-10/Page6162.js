import React, { useState, useRef } from 'react'
import { DIGIFIZZY_S3 } from '@constants/urls'
import Image from 'next/image'
import styles from './page6162.module.scss'

const Page6162 = () => {
  const [isPlaying1, setIsPlaying1] = useState(false)
  const refAudio = useRef()

  const startAudio1 = () => {
    refAudio.current.play()
    setIsPlaying1(true)
  }

  const pauseAudio1 = () => {
    refAudio.current.pause()
    setIsPlaying1(false)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/1/videos/moshed-05-02-1-15-28.mp4' type='video/mp4' />
      </video>
      <div className={styles.image1}>
        <Image src='/magazine/9/images/6162_image1.png' width={262} height={1640} />
      </div>
      <div className={styles.text1}>ARGENTINA</div>
      <div className={styles.text2}> INTERNATIONAL PLAYERS</div>
      <div className={styles.image2}>
        <Image src='/magazine/9/images/6162_image2.png' width={398} height={360} />
      </div>
      <div className={styles.image3}>
        <Image src='/magazine/9/images/6162_image2.png' width={398} height={360} />
      </div>
      <div className={styles.image4}>
        <Image src='/magazine/9/images/6162_image2.png' width={398} height={360} />
      </div>
      <div className={styles.image5}>
        <Image src='/magazine/9/images/6162_image2.png' width={398} height={360} />
      </div>
      <div className={styles.image6}>
        <Image src='/magazine/9/images/6162_image3.png' width={243} height={89} />
      </div>
      <div className={styles.image7}>
        <Image src='/magazine/9/images/6162_image4.png' width={1346} height={545} />
      </div>

      <a
        className={styles.text3}
        href='https://twitter.com/Kleros_io'
        target='_blank'
      >
        KLEROS
      </a>
      <a 
        className={styles.text4}
        href='https://twitter.com/Kleros_io'
        target='_blank'
      >
        KLEROS
      </a>
      <div className={styles.text5}>
        when you think about the kind of problems you run into that seem to repeat almost every day, no matter who you are, where in the world you might be, or even if you turn the timeline dial back to the dawn of humanity, you're likely to come up with a long, long list far before you mention the root of pretty much all of them. Unless of course you're a total web3 ner.. err, curious mind and mechanism design wonk like us, and the fascinating folks at Kleros.
      </div>
      <div className={styles.text6}>
        Check out the interview with Kleros Founder <a href='https://twitter.com/federicoast' target='_blank'>Federico Ast</a>
      </div>
      <audio ref={refAudio} loop>
        <source src='/magazine/9/sounds/6162_sound1.mp3' type='audio/mpeg' />
      </audio>

      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        <div className={styles.imageBack} />
        {
          !isPlaying1
            ? <img className={styles.imagePlay} src='/magazine/7/images/1516_playbutton.png' />
            : <img className={styles.imagePause} src='/magazine/7/images/1516_pausebutton.png' />
        }
      </div>
    </div>
  )
}

export default Page6162
