import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page34.module.scss';

const Page34 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/13/images/0304_left.png`} width={960} height={1497} />
    </div>
    <div className={styles.image2}>
      <Image src={`${DIGIFIZZY_S3}/13/images/0304_right.png`} width={960} height={1497} />
    </div>
    <div className={styles.image3}></div>
    <div className={styles.text1}>Meme for thought.</div>
    <div className={styles.text4}>contributors</div>
    <div className={styles.text5}>
      {' '}
      Emma-Jane MacKinnon-Lee <br />
      Isramae Visales <br />
      Peezy R <br />
      Victor <br />
      Haruto Inoue <br />
    </div>
    <div className={styles.text6}>
      Stan McLygin <br />
      Glitch Faced King <br />
      Cameron Sato <br />
      James Lin <br />
      Ana Rivera <br />
    </div>
    <div className={styles.text7}>
      S.T.O.P <br />
      Yevgeniy Dodis <br />
      Swagtimus <br />
      Masnah.eth <br />
    </div>
    <div className={styles.text8}>
      ZK Skate <br />
      The Sticky <br />
      Dom Francis <br />
      F3Manifesto <br />
    </div>
    <div className={styles.text9}>
      MidJourney
      <br />
      Edit
      <br />
      Zero
      <br />
      Nim
      <br />
    </div>
    <div className={styles.text10}>
      PostPlaza
      <br />
      zJMS
      <br />
      Mir Protocol
      <br />
    </div>
    <div className={styles.text11}>
      Bobby Puleo
      <br />
      El Toro
      <br />
      DB
      <br />
      CityKitty
      <br />
    </div>
    <div className={styles.text12}>
      PrivateWoman.Eth
      <br />
      V3
      <br />
      Layer X<br />
    </div>
  </div>
);

export default Page34;
