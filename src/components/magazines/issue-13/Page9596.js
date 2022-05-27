import React, { useState } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page9596.module.scss';

const Page9596 = () => {
  const [muted, setMuted] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9596_left.png`} width={960} height={1497} />
      </div>
      <div className={styles.rect1} />
      <div className={styles.rect2}>
        <div className={styles.text1}>WHAT ARE YOU WEARING?</div>
        <div className={styles.text2}>WHAT ARE YOU WEARING?</div>
        <div className={styles.text3}>WHAT ARE YOU WEARING?</div>
        <div className={styles.text4}>WHAT ARE YOU WEARING?</div>
        <div className={styles.text5}>WHAT ARE YOU WEARING?</div>
        <div className={styles.text6}>FASHION FOR THE METAVERSE</div>
      </div>
      <div className={styles.text7}>How to make it in web3.</div>
      <div className={styles.text8}>composable machines</div>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9596_image1.png`} width={244} height={244} />
      </div>
      <div className={styles.image2}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9596_image1.png`} width={244} height={244} />
      </div>
      <div className={styles.image3}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9596_image1.png`} width={244} height={244} />
      </div>
      <video autoPlay loop muted={muted} playsInline webkit-playsInline className={styles.video}>
        <source src={`${DIGIFIZZY_S3}/13/videos/9596_video.mp4`} />
      </video>
      <button className={styles.play} onClick={() => setMuted(!muted)}>
        <img src={`${DIGIFIZZY_S3}/13/images/9596_${muted ? 'play' : 'pause'}.png`} />
      </button>
    </div>
  );
};

export default Page9596;
