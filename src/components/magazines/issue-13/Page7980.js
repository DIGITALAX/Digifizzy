import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page7980.module.scss';

const Page7980 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/13/images/7980_image1.png`} width={256} height={256} />
    </div>
    <div className={styles.image2}>
      <Image src={`${DIGIFIZZY_S3}/13/images/7980_image2.png`} width={256} height={256} />
    </div>
    <div className={styles.image3}>
      <Image src={`${DIGIFIZZY_S3}/13/images/7980_image3.png`} width={1261} height={482} />
    </div>
    <div className={styles.image4}>
      <Image src={`${DIGIFIZZY_S3}/13/images/7980_image4.png`} width={668} height={408} />
    </div>
    <a href="https://www.digitalax.xyz/layer-x" target="_blank">
      <div className={styles.text1}>LAYER X</div>
    </a>
    <div className={styles.text2}>
      DIGITALAX’s Open Composable Game Layer for the IRL Metaverse and Beyond.
    </div>
    <div className={styles.text3}>
      In order to truly unlock the ownership of NFTs day to day in a way that massive multiplayer
      markets of people actually understand, we have to build for where people already are, and the
      economic and cultural behaviours that we all already engage in.
      <br />
      <br />
      We all have super computer phones in our pockets everywhere we go.
      <br />
      <br />
      It’s time to unlock their full potential to act as keys, transporting us into VIP experiences,
      private galleries, secret drops, new means of media distribution and specialty DAOs that align
      us with the people we both already explore our worlds with and those that we aspire to compete
      and collaborate alongside with, as we all solve these vast real world social puzzles.
    </div>
    <div className={styles.text4}>
      The next phase of engineering is actively leading the architecture and engineering of core
      game layer functionality necessary for that long overdue world to finally be available to
      everyone.
      <br />
      <br />
      This is essential for scaling the web3 fashion economy, so that digital {'<>'} physical
      wardrobes, unlockable merch drops and the design of digital fashion moving beyond game skins
      and metamask wallets to active use on the daily, can reach collectors, wearers and producers
      everywhere.
      <br />
      <br />
      DIGITALAX is not alone for this endeavour, and is partnering up with select collaborators and
      builders that share the same resolute dedication to the core principles of web3, open source
      and cc0.
    </div>
  </div>
);

export default Page7980;
