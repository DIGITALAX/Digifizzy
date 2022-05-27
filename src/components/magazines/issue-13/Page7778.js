import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page7778.module.scss';

const Page7778 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/13/images/7778_image1.png`} width={456} height={307} />
    </div>

    <div className={styles.image2}>
      <Image src={`${DIGIFIZZY_S3}/13/images/7778_image2.png`} width={456} height={307} />
    </div>
    <iframe
      className={styles.video1}
      src="https://www.youtube.com/embed/AWVYBE8r0Bg?autoplay=1&mute=1&controls=0&loop=1"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
    <iframe
      className={styles.video2}
      src="https://www.youtube.com/embed/lY893bwmjE4?autoplay=1&mute=1&controls=0&loop=1"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
    <video autoPlay loop muted playsInline webkit-playsInline className={styles.video3}>
      <source src={`${DIGIFIZZY_S3}/13/videos/7778_video1.mp4`} type="video/mp4" />
    </video>

    <div className={styles.text1}>THE STICKY UNCUT</div>
    <div className={styles.text2}>the sticky indie Series</div>
    <div className={styles.text3}>
      An indie miniseries takes you through the flipside of skater, street art, and streetwear
      subcultures.
      <br />
      <br />
      Starring Bobby Puleo, City Kitty, Buy.it, El Toro, DB, Double X, Emma-Jane MacKinnon-Lee,
      Choice Royce and more.
    </div>
    <div className={styles.text4}>
      <div>
        NYC
        <br /> Skate
      </div>
      Sticker ART
      <br /> Street Art
      <br /> Streetwear
    </div>
  </div>
);

export default Page7778;
