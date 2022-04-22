import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page7778.module.scss';

const Page7778 = () => (
  <div className={styles.wrapper}>
    <a href="https://twitter.com/HEATHEATHEAT__" target="_blank">
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/7778_image1.png`} width={313} height={313} />
      </div>
    </a>

    <a href="https://twitter.com/panthermodern__" target="_blank">
      <div className={styles.image2}>
        <Image src={`${DIGIFIZZY_S3}/12/images/7778_image2.png`} width={133} height={133} />
      </div>
    </a>
    <a href="https://twitter.com/0xProf" target="_blank">
      <div className={styles.image3}>
        <Image src={`${DIGIFIZZY_S3}/12/images/7778_image3.png`} width={133} height={133} />
      </div>
    </a>
    <a href="https://mobile.twitter.com/i_am_stav" target="_blank">
      <div className={styles.image4}>
        <Image src={`${DIGIFIZZY_S3}/12/images/7778_image4.png`} width={133} height={133} />
      </div>
    </a>

    <div className={styles.heat1}>HEAT HEAT HEAT</div>
    <div className={styles.heat2}>HEAT HEAT HEAT</div>
    <div className={styles.heat3}>HEAT HEAT HEAT</div>
    <div className={styles.heat4}>HEAT HEAT HEAT</div>

    <div className={styles.line1}></div>

    <div className={styles.text1}>
      Sitting down with the team from HEAT— Panther, Prof and STAV— as they pioneer on-chain
      kinesthetics.
    </div>

    <div className={styles.text2}>The how and why</div>
    <div className={styles.text3}>
      We all know each other through the LA music and art scene. Coincidentally, we all found each
      other online in multiple web3 communities around September of 2020. We kept in touch, and
      around October of 2021, Panther approached us with the idea for HEAT. We took the idea to Seed
      Club, where we joined the third cohort (SC03). From there, we have continued to refine our
      greater Metaverse thesis, which led us to iterate on HEAT to the point we’re at today.
    </div>

    <div className={styles.text4}>Panther</div>
    <div className={styles.text5}>Prof</div>
    <div className={styles.text6}>STAV</div>

    <div className={styles.text7}>
      I’m an artist, musician, and performer - I have been experimenting with virtual production and
      virtual identity for over a decade. I love creating immersive experiences, be them IRL or URL.
      My experiments with motion capture suits, movement in virtual worlds, and crypto led me to
      co-founding HEAT with Prof + Stav.
    </div>

    <div className={styles.text8}>
      I’m a defi degen, NFT enjoyooor, and a proponent of an open and interoperable metaverse. I met
      Panther and Stav in September of 2020, when I collected one of Panther’s pieces. We kept in
      touch, and when they came to me with the idea for HEAT, I knew I had to be a part of it.
    </div>
    <div className={styles.text9}>
      STAV is a contemporary media innovator living in Los Angeles. Boots on the ground. Eye in the
      sky. I believe I can fly.
    </div>
    <div className={styles.text10}>
      Movement is, on a fundamental level, a form of communication and expression. It can
      communicate language, express emotion, and tell a story. As we dive deeper into virtual
      realms, having a movement layer becomes increasingly important.. If we are to accurately
      represent our current level of physical communication in the virtual world, we must involve
      kinesthetics.
    </div>
    <div className={styles.text11}>
      Most motion capture tools, at least the more accessible ones, have reached a point of fidelity
      in which they can identify individual movement patterns. If you don't trust Facebook, don't
      use it. However, all of the VR, AR and motion capture technology, no matter the company, needs
      to be able to track you in order to capture this data. Doing your due diligence on the company
      and its tools really comes down to the user.
    </div>

    <div className={styles.text12}>
      Dance and movement-related content are among the most viewed and shared content on the
      internet today. Unfortunately, there is little protection in place to protect people from
      stealing and monetizing others’ dances and moves.
      <br />
      <br />
      One of the big catalysts for the idea behind HEAT is when we saw Black creators on TikTok go
      on strike because influencers on TikTok were taking their dances and monetizing them in music
      videos and performances. We believe having accurate structural data that is representative of
      your movement in 3D space can be used to help verify provenance.
      <br />
      <br />
      There are several ways you can track motion. It can be anything from an open-source
      webcam-based app, a mobile app, and for the creators looking for higher fidelity, we suggest
      taking a look at one of the many motion capture suits available to indie creators.
      <br />
      <br />
      Unless you're a 3D animator or technical artist, there isn't too much you can do with data
      now. But that is exactly one of the gaps we are trying to close. We want to make capturing and
      minting moves so easy that your grandma can do it.
      <br />
      <br />
      We have a lot going on behind the scenes right now. We are remaining heads down while building
      out the product, but we can say that we have never been more excited to be where we’re at
      right now.
    </div>

    <video autoPlay muted loop className={styles.video1}>
      <source src={`${DIGIFIZZY_S3}/12/videos/7778_video1.mp4`} />
    </video>
    <div className={styles.text13}>
      THE
      <br /> PROTOTYPE
    </div>
  </div>
);

export default Page7778;
