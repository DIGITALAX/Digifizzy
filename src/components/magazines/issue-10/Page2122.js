import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2122.module.scss'

const Page2122 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/2122_image1.png`}
          width={899}
          height={641}
        />
      </div>
      <div className={styles.background}></div>

      <a
        href='https://twitter.com/eyemaguinia'
        target='_blank'
      >
        <div className={styles.link1}>
          Aggy
        </div>
      </a>
      <a
        href='https://twitter.com/eyemaguinia'
        target='_blank'
      >
        <div className={styles.link2}>
          Aggy
        </div>
      </a>

      <div className={styles.text1}>
        I've been creating from the moment I started playing with toys. For about 3 years I've been focused on modeling & recently started posting on tik tok vlogs, increasing my knowledge on divination and spirituality while constructing makeup or modeling sets. I eventually plan on having a service where I give guidance with divination.
        <br /><br />
        I learnt the importance of creative expression and empowerment through dance. I oftened struggled with expressing myself fully and used to use dance as a main release for whatever I was going through. Then one day it hit me; If dance can change the way I feel and think, imagine what dance, modeling, acting, etc. can do in combination? But it'll only have a genuine impact when authenticity is in place.
      </div>
      <div className={styles.text2}>
        In middle school, I met my best friend, Amilta who created content with me during the remainder of our school years. We first started with uploading gaming videos on YouTube and live-streaming on Shou. By constantly streaming on Shou, I had so many views at one point I thought I was famous! Fast forward to highschool, Amilta and I created a whole new YouTube where we posted vlogs, tutorials, workshops, etc. We didn't stick with this, but it did teach me that creativity is narrowed to one area— all types of creation correlate with one another.
      </div>
      <div className={styles.text4}>
        Towards the middle of 2019, I started to become more interested in spirituality and divination. But I never really got fully into it until Dec. 2019 where two not so great happenings fell into my life. It made me meditate to the universe for clarification on whether or not things will be okay and I found that through taking a step back and listening, you can achieve a lot. When I began studying and practicing astrology and tarot, it led me to quit my job in 2020 and go full time self employed with divination. That was scary but I loved guiding people on this thing we call life way more than being a cashier or something else. I got to genuinely connect with others and work with them, not for them. The main thing I learned on this journey is that do what YOU want to do, you’re the director of your life, the main character in the movie, game, show, whatever you want to call it.
      </div>
      <div className={styles.text5}>
        I am now networking with more creatives on Discord, Twitter, and other IRL and web3 related project events and happenings. Recently on 2/2/22, I hosted an event alongside Emma and the GMS in NYC, where models, artists, photographers, and models came together to create cool content and network for free, killing two birds with one stone! It doesn’t end there though…we used the cc0 content from the event to grow out more of our production base and even have these sold as NFTs. I’m planning more of these for the future, and connecting even more artists together, with knowledge and new ways to earn.
        <br /><br />
        One of the most impactful social changes that can help achieve this so much faster, is for created content to be more freely exchanged between artists and creators, not gatekept and locked down. It is super hard these days to profit off your dream career as an actor, model, musician etc. BUT, if we all came together and just exchanged services directly, collaborated with each other directly, saw ourselves as primary producers, then so much friction could be cut out of the process. I sum this up through a lyric from my favorite song, “Good Life” by ZHU. Here he states, “it’s not the human race, it’s just the human race”.
      </div>
      <div className={styles.image2}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/2122_image2.jpg`}
          width={300}
          height={375}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/2122_image3.jpg`}
          width={510}
          height={467}
        />
      </div>

      <div className={styles.image4}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/2122_image4.png`}
          width={111}
          height={192}
        />
      </div>
      <div className={styles.image5}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/2122_image4.png`}
          width={111}
          height={192}
        />
      </div>
      <div className={styles.image6}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/2122_image4.png`}
          width={111}
          height={192}
        />
      </div>

      <video muted loop autoPlay className={styles.video1}>
        <source
          src={`${DIGIFIZZY_S3}/10/videos/2122_video1.mp4`}
          type='video/mp4'
        />
      </video>
      <video muted loop autoPlay className={styles.video2}>
        <source
          src={`${DIGIFIZZY_S3}/10/videos/2122_video2.mp4`}
          type='video/mp4'
        />
      </video>
      <video muted loop autoPlay className={styles.video3}>
        <source
          src={`${DIGIFIZZY_S3}/10/videos/2122_video3.mp4`}
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default Page2122
