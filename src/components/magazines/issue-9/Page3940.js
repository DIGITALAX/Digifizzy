import React, { useRef } from 'react'
import Image from 'next/image'
import styles from './page3940.module.scss'

const Page3940 = () => {
  const refAudio = useRef()

  const startAudio = () => {
    refAudio.current.play()
  }

  const pauseAudio = () => {
    refAudio.current.pause()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src='/magazine/9/images/3940_background.jpg' width={1920} height={1497} />
      </div>
      <div className={styles.image1}>
        <Image src='/magazine/9/images/3940_image1.jpg' width={504} height={378} />
      </div>
      <div className={styles.image2}>
        <Image src='/magazine/9/images/3940_image2.jpg' width={504} height={378} />
      </div>
      <a className={styles.link1} href='https://twitter.com/serboynft' target='_blank'>
        SERBOY
      </a>
      <div className={styles.rect1} />
      <div className={styles.rect2} />
      <div className={styles.text1}>
        I started my music education at the age of 8 in the Turkish Ministry of Culture State Polyphonic Children's Choir. It was my greatest luck that my family discovered my talent. A year later, I took piano lessons from the State Opera and Ballet pianist. Later, I worked as a choirist for 4 years in the Carmen Opera under the conductorship of Antonio Pirolli. In those years, I took part in Presidential Symphony Orchestra concerts and Aspendos Opera and Ballet festivals. When I was 15, I started performing with my own music groups. Throughout my time at university, I performed many live performances with many bands. Then I decided to study music production in Istanbul and left my hometown to chase my dreams. I graduated from the Music Production Department at Galatasaray Music Academy in Istanbul. Then I went back to my hometown and started writing songs but I was disappointed with where the music industry was going. In this process, my sound started to form and I even won a songwriting competition. I came back to Istanbul and started to meet professionals here.
        <br /><br />
        I didn't give up and kept writing, learning, sharing and a few months ago I met web3, crypto, NFT and music family. At first, I guess, like everyone else, I came across those famous JPEGs and as soon as I saw them I thought that this work should be done for music as well. I sent messages to a few influencers who gave their hearts to this world, I tried my luck. Just at this time, I met “Catalog” and “Sound” projects on twitter, joined the family and you can guess the rest.        
      </div>
      <div className={styles.text2}>
        As I mentioned above, the current music industry is rotten and I really feel sorry for the mental health of the artists in it. Sometimes I find a good reason why my work doesn't get there. I am sure that the enablement of Web3 will rebuild the industry and fortunately I am still one of the early adopters. This meeting got me excited more than anything. The success of the musicians here, the team leaders of music NFT projects and the strength of the community gave me goosebumps and my crypto adventure began.
        <br /><br />
        At the moment, besides traditional platforms, I released my first single "i'm rare" in the project called Mint Songs. The thing that impressed me most in this process is that artists, listeners and team leaders are on the same platform at the same time, thanks to Discord and Twitter, so that a work you publish receives instant feedback. This is an incredibly nice difference.
        <br /><br />
        There is definitely! I want to fulfill my childhood dream, namely to release my 8-song EP, and I am currently in preparation for this wonderful EP and a music video, with support through “Crowdfund”. This is the most important thing I'm working on right now. After this happens, I want to bring art lovers together with unforgettable productions.
        <br /><br />
        It’s never too late, but I would like them to seize this wonderful opportunity without wasting time and live and let live this experience. Let's not forget that we are in crazy times and this is the moment!
      </div>
      <div
        className={styles.play}
        onClick={() => {
          startAudio()
        }}
      >
        <img src='/magazine/9/images/3940_playbutton.png' height={201} width={201} />
      </div>
      <div
        className={styles.pause}
        onClick={() => {
          pauseAudio()
        }}
      >
        <img src='/magazine/9/images/3940_pausebutton.png' height={201} width={201} />
      </div>
      <audio ref={refAudio} loop>
        <source src='/magazine/9/sounds/3940_sound1.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page3940
