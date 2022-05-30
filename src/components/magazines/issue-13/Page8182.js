import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page8182.module.scss';

const Page8182 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/13/images/8182_image1.png`} width={247} height={321} />
    </div>
    <div className={styles.image2}>
      <Image src={`${DIGIFIZZY_S3}/13/images/8182_image2.png`} width={761} height={701} />
    </div>
    <div className={styles.text1}>ZK SKATE</div>
    <div className={styles.text2}>
      Zero Knowledge Skate is the latest amateur skate series to come out of NYC— bringing the world
      of skate culture to web three, NFT streetwear, ZKs and more.
      <br />
      <br />
      It’s led in collaboration with <a className={styles.f3m}>F3M</a> and the core of the local skate community here in NY, from
      nineties legends to new up and comers.
    </div>
    <div className={styles.text3}>
      The series will combine a mix between jams and runs across skates parks in all five boroughs +
      Long Island, before expanding globally.
      <br />
      <br />
      Znarky is leading the pack on this one, set to bring his poignant guide to an avid community
      of culture shapers.
      <br />
      <br />
      <a className={styles.f3m}>F3M</a> is the champion streetwear provider, with DIGITALAX as a core infrastructure partner,
      alongside other local skateshop + web three native DAO sponsors.
      <br />
      <br />
      The first event will take place this summer, mid July… more details and sign ups to be
      announced soon!
    </div>
    <div className={styles.rect2} />
    <div className={styles.text4}>Bobby Puleo</div>
    <div className={styles.text5}>
      OG NY Skate Legend. From the early days of Zoo York to Street Larking for Art. We catch up
      with Bobby Puleo ahead of The Sticky release & his new video content channel going live.
    </div>
    <div className={styles.text6}>Street Larking With Bobby Puleo</div>
    <div className={styles.image3}>
      <Image src={`${DIGIFIZZY_S3}/13/images/8182_image3.png`} width={279} height={279} />
    </div>
    <div className={styles.image4}>
      <Image src={`${DIGIFIZZY_S3}/13/images/8182_image4.png`} width={279} height={279} />
    </div>
    <div className={styles.image5}>
      <Image src={`${DIGIFIZZY_S3}/13/images/8182_image5.png`} width={279} height={279} />
    </div>
    <iframe
      className={styles.video3}
      src="https://www.youtube.com/embed/lY893bwmjE4?autoplay=1&mute=1&controls=0&loop=1"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  </div>
);

export default Page8182;
