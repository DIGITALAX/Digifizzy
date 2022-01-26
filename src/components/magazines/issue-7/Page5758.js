import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page5758.module.scss'

const Page5758 = () => {
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
      <div className={styles.imageBackground1}>
        <Image
          src='/magazine/7/images/5758_background1.jpg'
          width={960}
          height={1497}
        />
      </div>
      <video autoPlay muted loop className={styles.video1}>
        <source src='/magazine/7/videos/5758_video1.mp4' type='video/mp4' />
      </video>
      <div className={styles.rect1} />
      <a href='https://twitter.com/tarunchitra' target='_blank' rel='noreferrer'>
        <div className={styles.text1}>
          Tarun Chitra
        </div>
      </a>
      <div className={styles.text2}>
        Web3 & Incentive Mechanisms
      </div>
      <div className={styles.text3}>
        Gatekeeper Gardens
      </div>
      <div className={styles.text4}>
        Sifting through the web2 weeds— spotlighting stories from the walled gardens where they love to tangle and lurk.
      </div>
      <div className={styles.text5}>
        STEAM.
      </div>
      <div className={styles.text6}>
        When you hear the news that Gabe Newell has pronounced from on-high that NFTs are the devil, it makes you stop and wonder if he really ever was a gamer, nevermind being in it for the love of the game. For after all any genuine gamer would be familiar with the adventeror’s impulse and forging forward on their journey to build up their base, create micro-economies, gain loot from gameplay, build up their inventory and at the end of the days, months, years and decades put in to gathering so much have it actually count for something that can’t be shut down by a self declared tyrant or other third party.
        <br /><br />
        Steam doesn’t owe it to anyone to run a dominant chokepoint gaming app store with antiquated interfaces, but when new technologies come along to unbundle what they offer and provide genuine ownership to the players and devs, a true gamer would have the mindset to embrace this as an obviously massive new quest to embark on— and this time with a massively multiplayer coallition of guilds around them.
        <br /><br />
        It won’t be Steam, but the web3 version of game discovery, feedback and monetisation is going to be the harbinger of a better, more interactive, more fun to play life for us all.
      </div>
      <div className={styles.text7}>
        I guess when you look at it, it’s really no surprise that centralised top down culture would breathe so much toxicity in the recent era of gaming. Video games don’t train to be toxic. But centralisation does, in fact it actively rewards and incentivises it. Because, when the only option that you are used to is having to put up with others treating you really badly and being rewarded when you treat others badly as well, then that shit is going to perpetuate.
        <br /><br />
        But just because far too much of gaming today is controlled by centralising winner take all anti-player captive economies, doesn’t mean
      </div>
      <div className={styles.text8}>
        that we should find an internet connected cave to go and hide in for a few years until emerging with some industry changing masterpiece to overthrow it all. Particularly because that has already been taking place for the past number of years being developed out in the open through web3, NFTs and the decentralisation of the entire core gaming stack.
        <br /><br />
        We still have quite a ways to go but which true gamer isn’t always up for a massive multiplayer open world metaverse epic quest to otherthrow the twisted by greed and rage old shadowlords of the Mordor resembling dark lands.
      </div>
      <div className={styles.text9}>
        Destroy the wall
      </div>
      <div className={styles.image1}>
        <Image
          src='/magazine/7/images/5758_image1.png'
          width={291}
          height={291}
        />
      </div>
      <div className={styles.image2}>
        <Image
          src='/magazine/7/images/5758_image1.png'
          width={291}
          height={291}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src='/magazine/7/images/5758_image1.png'
          width={291}
          height={291}
        />
      </div>

      <audio ref={refAudio} loop>
        <source src='/magazine/7/sounds/5758_sound1.mp3' type='audio/mpeg' />
      </audio>

      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        {
          !isPlaying1
            ? <img className={styles.imagePlay} src='/magazine/7/images/5758_playbutton.png' />
            : <img className={styles.imagePause} src='/magazine/7/images/5758_pausebutton.png' />
        }
      </div>
    </div>
  )
}

export default Page5758
