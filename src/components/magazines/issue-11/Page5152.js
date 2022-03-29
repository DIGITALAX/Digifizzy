import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page5152.module.scss'

const Page5152 = () => {

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

  console.log('play: ', play)

  return (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/5152_image1.png`}
        width={960}
        height={1497}
      />
    </div>

    <div className={styles.circle1}></div>
    <div className={styles.circle2}></div>
    <div className={styles.circle3}></div>
    <div className={styles.circle4}></div>
    <div className={styles.circle5}></div>

    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>

    <div className={styles.text1}>
      Community Catch up with 
    </div>
    <a
      className={styles.text2}
      href='https://twitter.com/Ezincr'
      target='_blank'
    >
      EZ
    </a>

    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/5152_image2.png`}
        width={283}
        height={236}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/5152_image3.png`}
        width={802}
        height={504}
      />
    </div>

    <a
      className={styles.text3}
      href='https://twitter.com/cdt_eth'
      target='_blank'
    >
      CDT.ETH      
    </a>
    <div className={styles.text4}>
      It all started with Nouns. I found out about the project the same week I started a Master’s program in Computer Science. I dropped out later that month to spend all my free time delving deep into the web3 space, and more specifically Nouns. I just “got it”, immediately. The idea behind Nouns was arresting, and I haven’t stopped thinking about it. I’ve met incredible people in this space via Nouns, and it’s literally set my life on a different trajectory. It feels like we’re in the Internet boom all over again, but this time I’m a dev, and not a kid watching it all happen. I can contribute. I can be a part of it. Nouns has unlocked my creativity and I’m inspired by the talent we have in the community.
    </div>
    <div className={styles.text5}>
      I built a Disney+ clone (<a href='https://disnyplus.plus/' target='_blank'>https://disnyplus.plus/</a>) from scratch using the Open Movie Database API, and it got me my first software engineering job. If there wasn’t open source I don’t think that I’d be an engineer. I learned from others graciously giving away their information. I’m a “self-taught” developer, meaning I learned from open-source projects on Github & YouTube. I didn’t get a Computer Science degree in college and I didn’t attend a bootcamp. I taught myself and used online resources to supplement my learning. 
    </div>
    <div className={styles.text6}>
      I created the SharkDAO (<a href='https://sharks.wtf/' target='_blank'>https://sharks.wtf/</a>) site the first week I joined the web3 space. They a sub-DAO of Nouns. I just jumped in and started contributing however I could, which was building frontends. 
      <br /><br />
      I then built & still maintain ToadzToolz (<a href='https://toadztoolz.com/' target='_blank'>https://toadztoolz.com/</a>), a community site for Cryptoadz. They are easily one of the best and most vibrant communities. There are so many amazing people that have such great attitudes and love to build. I created ToadzToolz long before I ever owned a Cryptoadz because I just wanted to support them and the project. It’s a site that aggregates and showcases all the derivatives projects, news articles, games, songs, and resources created by and about the Cryptoadz community. Then I was part of the Nouns POAP project (<a href='https://nounspoap.com/' target='_blank'>https://nounspoap.com/</a>) which went through the official on-chain Nouns proposal process (<a href='https://nouns.wtf/vote/9' target='_blank'>https://nouns.wtf/vote/9</a>). 
      <br /><br />
      Next came a personal project I worked on with two extremely talented teammates (@12bnoun & @Messhup). We created the Lost Nouns project (<a href='https://lostnouns.wtf/' target='_blank'>https://lostnouns.wtf/</a>). It’s a complete fork of Nouns including the on-chain NFTs and auction mechanics. Basically, we found all the unused & drafts Nouns traits from their Github commit history (thanks open-source), compiled them, and are currently auctioning off 404 Lost Nouns created using these “lost” assets.
    </div>
    <div className={styles.text7}>
      <br /><br />
      Lastly, there’s Nouns Center (<a href='https://nouns.center/' target='_blank'>https://nouns.center/</a>). It’s the community site for Nouns projects and tools. I so believe in Nouns that I’m doing all I can to make this site be a knowledge center and resource hub. The on-ramp to building with Nouns should be seamless and I aim to make it so.      
    </div>
    <div className={styles.text8}>
      It’s incredible. It’s all I think about. I’ve made all my projects and code open-source (<a href='https://github.com/christiandavidturner' target='_blank'>https://github.com/christiandavidturner</a>). It’s very different than traditional work. We build in the open and encourage collaboration.
      <br /><br />
      I want to do all I can to support new people entering the space and learning as much as possible. Open source helps to demystify the perceived barrier to entry in this space, and we all benefit from shared ideas. It’s paramount that we be as open and inviting as possible to the next ten thousand builders in web3.
    </div>
    <div className={styles.text9}>
      The newest project is a weekly Spaces, created by our Lost Nouns team, that I host called Noun O’ Talk. You can listen to all past episodes here (<a href='https://nouns.center/talks' target='_blank'>https://nouns.center/talks</a>). We have several people from the Nouns community on each week to discuss a different project or topic. I interview project creators and Noun owners in the ecosystem, and we have some very exciting guests coming on soon that were ambitious “gets” for us.       
    </div>
    <div className={styles.text10}>
      This space is amazing because I get the opportunity to interface and connect with people I would never get the chance to IRL. We’re all equal in web3. You are your reputation and builders can develop a positive one fast.      
    </div>

    <a className={styles.imagePlayButton} onClick={play ? pauseAudio : startAudio}>  
      <img
        src={`${DIGIFIZZY_S3}/11/images/${play ? '2728_pausebutton.png' : '2728_playbutton.png'}`}
        alt='playbutton'
      />
    </a>
    <audio ref={refAudio} loop>
      <source
        src={`${DIGIFIZZY_S3}/11/sounds/5152_sound1.mp3`}
        type='audio/mp3'
      />
    </audio>
  </div>
  )
}

export default Page5152
