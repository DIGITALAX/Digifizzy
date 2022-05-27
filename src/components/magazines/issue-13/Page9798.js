import React, { useState } from 'react';
import Image from 'next/image';

import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page9798.module.scss';

const Page9798 = () => {
  const [mute1, setMute1] = useState(true);
  const [mute2, setMute2] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9596_image1.png`} width={244} height={244} />
      </div>
      <div className={styles.image2}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9596_image1.png`} width={244} height={244} />
      </div>
      <div className={styles.image3}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9596_image1.png`} width={244} height={244} />
      </div>
      <div className={styles.image4}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9596_image1.png`} width={244} height={244} />
      </div>
      <div className={styles.image5}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9596_image1.png`} width={244} height={244} />
      </div>
      <div className={styles.image6}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9596_image1.png`} width={244} height={244} />
      </div>

      <div className={styles.text1}>DIMENSIONAL ASSETS</div>
      <div className={styles.text2}>How to make it in web3.</div>

      <div className={styles.text3}>How to make it in web3.</div>
      <div className={styles.text4}>KEYS TO WEB3</div>

      <video autoPlay loop muted={mute1} className={styles.video1}>
        <source src={`${DIGIFIZZY_S3}/13/videos/9798_video1.mp4`} />
      </video>
      <video autoPlay loop muted={mute2} className={styles.video2}>
        <source src={`${DIGIFIZZY_S3}/13/videos/9798_video2.mp4`} />
      </video>

      <button className={styles.play} onClick={() => setMute1(!mute1)}>
        <img src={`${DIGIFIZZY_S3}/13/images/9596_${mute1 ? 'play' : 'pause'}.png`} />
      </button>
      <button className={styles.play1} onClick={() => setMute2(!mute2)}>
        <img src={`${DIGIFIZZY_S3}/13/images/9596_${mute2 ? 'play' : 'pause'}.png`} />
      </button>
    </div>
  );
};

export default Page9798;
