import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './page3738.module.scss'

const Page3738 = () => {
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
        <Image src='/magazine/8/images/3738_back.jpg' width={1920} height={1497} />
      </div>
      <a href='https://stacks.org/' target='_blank' rel='noreferrer'>
        <div className={styles.image1}>
          <Image src='/magazine/8/images/3738_image1.png' width={846} height={105} />
        </div>
      </a>
      <a href='https://twitter.com/br_ttany' target='_blank' rel='noreferrer'>
        <div className={styles.image2}>
          <Image src='/magazine/8/images/3738_image2.jpg' width={227} height={227} />
        </div>
      </a>
      <div className={styles.image3}>
        <Image src='/magazine/8/images/3738_image3.png' width={571} height={180} />
      </div>
      <div
        className={styles.play}
        onClick={() => {
          play ? pauseAudio() : startAudio()
        }}
      >
        {!play ? (
          <img src='/magazine/8/images/3738_play.png' height={270} width={270} />
        ) : (
          <img src='/magazine/8/images/3738_pause.png' height={270} width={270} />
        )}
      </div>
      <audio ref={refAudio} loop>
        <source src='/magazine/8/sounds/3738_sound1.mp3' type='audio/mp3' />
      </audio>
      <div className={styles.text1}>Brittany Laughlin</div>
      <div className={styles.text2}>
        Programmability for the Bitcoin Blockchain with Stacks and the Stacks Foundation Grants
        Program.
      </div>
      <div className={styles.text3}>More About Brittany</div>
      <div className={styles.text4}>
        Brittany is the Executive Director of the Stacks Foundation, where she supports builders and founders through grants for them to build associated apps, products and tooling on top of Stacks/Bitcoin. 
        <br /><br />
        She’s been at the heart of how startups, community and capital intersect since the late 2000s, and with onset of web3 she has dedicated herself to helping to scale a fully user owned internet. 
      </div>
    </div>
  )
}

export default Page3738
