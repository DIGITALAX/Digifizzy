import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page2122.module.scss'

const Page2122 = () => {
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
      <audio ref={refAudio} loop>
        <source src='/magazine/8/sounds/2122_sound1.mp3' type='audio/mpeg' />
      </audio>

      <div className={styles.image1}>
        <Image
          src='/magazine/8/images/2122_image1.jpg'
          width={1920}
          height={1497}
        />
      </div>

      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        {
          !isPlaying1
            ? <img className={styles.imagePlay} src='/magazine/8/images/2122_playbutton.png' />
            : <img className={styles.imagePause} src='/magazine/8/images/2122_pausebutton.png' />
        }
      </div>

      <div className={styles.rect1} />
      <div className={styles.rect2} />

      <div className={styles.image2}>
        <Image
          src='/magazine/8/images/2122_image2.png'
          width={275}
          height={289}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src='/magazine/8/images/2122_image2.png'
          width={275}
          height={289}
        />
      </div>
      <div className={styles.image4}>
        <Image
          src='/magazine/8/images/2122_image2.png'
          width={275}
          height={289}
        />
      </div>
      <div className={styles.image5}>
        <Image
          src='/magazine/8/images/2122_image2.png'
          width={275}
          height={289}
        />
      </div>
      <div className={styles.image6}>
        <Image
          src='/magazine/8/images/2122_image2.png'
          width={275}
          height={289}
        />
      </div>
      <div className={styles.image7}>
        <Image
          src='/magazine/8/images/2122_image2.png'
          width={275}
          height={289}
        />
      </div>
      <a
        className={styles.image8}
        href='https://stacksandjoules.org/team'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src='/magazine/8/images/2122_image5.png'
          width={406}
          height={295}
        />
      </a>

      <div className={styles.whiteArrow1}>
        <Image
          src='/magazine/8/images/2122_image4.png'
          width={158}
          height={158}
        />
      </div>
      <div className={styles.whiteArrow2}>
        <Image
          src='/magazine/8/images/2122_image4.png'
          width={158}
          height={158}
        />
      </div>
      <div className={styles.whiteArrow3}>
        <Image
          src='/magazine/8/images/2122_image4.png'
          width={158}
          height={158}
        />
      </div>
      <div className={styles.whiteArrow4}>
        <Image
          src='/magazine/8/images/2122_image4.png'
          width={158}
          height={158}
        />
      </div>
      <div className={styles.whiteArrow5}>
        <Image
          src='/magazine/8/images/2122_image4.png'
          width={158}
          height={158}
        />
      </div>
      <div className={styles.whiteArrow6}>
        <Image
          src='/magazine/8/images/2122_image4.png'
          width={158}
          height={158}
        />
      </div>

      <div className={styles.greyArrow1}>
        <Image
          src='/magazine/8/images/2122_image3.png'
          width={158}
          height={158}
        />
      </div>
      <div className={styles.greyArrow2}>
        <Image
          src='/magazine/8/images/2122_image3.png'
          width={158}
          height={158}
        />
      </div>
      <div className={styles.greyArrow3}>
        <Image
          src='/magazine/8/images/2122_image3.png'
          width={158}
          height={158}
        />
      </div>
      <div className={styles.greyArrow4}>
        <Image
          src='/magazine/8/images/2122_image3.png'
          width={158}
          height={158}
        />
      </div>
      <div className={styles.greyArrow5}>
        <Image
          src='/magazine/8/images/2122_image3.png'
          width={158}
          height={158}
        />
      </div>
      <div className={styles.greyArrow6}>
        <Image
          src='/magazine/8/images/2122_image3.png'
          width={158}
          height={158}
        />
      </div>

      <div className={styles.image9}>
        <Image
          src='/magazine/8/images/2122_image6.png'
          width={237}
          height={237}
        />
      </div>

      <div className={styles.text1}>
        Empowering Access to Emerging Tech & Metaverse Native Tooling.
      </div>
      <div className={styles.text2}>
        Jonathan Spooner on Engaging Young Creators and Programmers Across Machine Learning & Other Metaverse Native Tooling.
      </div>
      <div className={styles.text3}>
        Stacks + Joules is a non-profit organisation building out the strength of access for students to the creator and emerging tech economies. 
      </div>
      <div className={styles.text4}>
        In a city like NYC it’s too easy to get lost amongst the crowds and feel overwhelmed by the constant movement through the streets as people of all kinds go about their day to day building in obscurity and in the spotlight. Stacks and Joules is providing a clear path for some of the brightest young minds to find their way in this bustling metropolis. 
      </div>
    </div>
  )
}

export default Page2122
