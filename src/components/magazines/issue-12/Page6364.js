import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page6364.module.scss';

const Page6364 = () => (
  <div className={styles.wrapper}>
    <div className={styles.back}>
      <Image src={`${DIGIFIZZY_S3}/12/images/6364_back.png`} width={1920} height={1497} />
    </div>
    <a href="https://twitter.com/terra_money" className={styles.link1}>
      TERRAFORM LABS & DO KWON
    </a>
    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>
    <div className={styles.rect3}></div>
    <div className={styles.rect4}></div>
    <div className={styles.text1}>
      Do Kwon is one of the biggest South Korean crypto names to hit the scene over the last few
      years, and the founder of Terraform Labs— you might have heard of $LUNA.
      <br />
      <br />
      Terra’s initial vision was to build the algorithmic stablecoin infrastructure and stack for
      crypto.
    </div>
    <div className={styles.text2}>
      Despite the SEC having no clear jurisdiction over Kwon or Terra, and Kwon already being
      proactive in voluntary cooperation for the SEC’s investigation of Terra DAPP, Mirror Protocol,
      the SEC once again showed it’s hunger to abuse power.
    </div>
    <div className={styles.text3}>
      Back in 2019 this was a pretty big deal, because choice was limited outside of USDT (which
      still to this day inspires a lot of question marks around it) and decentralised protocols like
      MakerDAO were still experimenting with the likes of DAI. Since then, Terra has expanded to
      build out an entire public blockchain and compete head to head with Ethereum.
      <br />
      <br />
      One of the more interesting moments unlong Do Kwon’s journey was the unexpected, very public
      subpoena handed to him at the Messari Mainnet conference last year.
    </div>
    <div className={styles.text4}>
      Kwon isn’t shying away however and has already has filed suit against the SEC. Which, frankly,
      should be done a lot more often.
      <br />
      <br />
      Not to go on a tangeant here, but, the only way to truly reform the regulatory landscape is to
      fight head to head on the offensive. The current anti-crypto attitudes from the SEC Chairman
      are completely counter productive to fair markets and the continued growth of innovation, both
      in the US and worldwide.
    </div>
    <video autoPlay muted loop className={styles.video1}>
      <source src={`${DIGIFIZZY_S3}/12/videos/6364_video1.mp4`} />
    </video>
    <video autoPlay muted loop className={styles.video2}>
      <source src={`${DIGIFIZZY_S3}/12/videos/6364_video1.mp4`} />
    </video>
    <video autoPlay muted loop className={styles.video3}>
      <source src={`${DIGIFIZZY_S3}/12/videos/6364_video1.mp4`} />
    </video>
    <video autoPlay muted loop className={styles.video4}>
      <source src={`${DIGIFIZZY_S3}/12/videos/6364_video1.mp4`} />
    </video>
  </div>
);

export default Page6364;
