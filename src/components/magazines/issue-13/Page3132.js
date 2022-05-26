import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page3132.module.scss';

const Page3132 = () => (
  <div className={styles.wrapper}>
    <div className={styles.back}>
      <Image src={`${DIGIFIZZY_S3}/13/images/3132_back.png`} width={1920} height={1497} />
    </div>
    <div className={styles.rect1} />
    <div className={styles.text1}>Crypto Art</div>
    <div className={styles.text2}>Hall of</div>
    <div className={styles.text3}>Fame</div>
    <a href="https://foundation.app/@amzdoodles/mms-7efd/3" target="_blank">
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/3132_image1.png`} width={735} height={841} />
      </div>
    </a>
    <img src={`${DIGIFIZZY_S3}/13/images/3132_path1.png`} className={styles.path1} />
    <img src={`${DIGIFIZZY_S3}/13/images/3132_path2.png`} className={styles.path2} />
    <div className={styles.text4}>Dream Slimes</div>
    <div className={styles.text5}>amzdoodles</div>
    <div className={styles.text6}>May 7th 2022</div>
    <div className={styles.text7}>#08 - Neptune</div>
    <div className={styles.text8}>Smeafsculpts</div>
    <div className={styles.text9}>March 18th 2022</div>
    <a
      href="https://superrare.com/0x2a32efe09db57ea47e1f80e0b3893525bda3b00a/triple-perception-2"
      target="_blank"
    >
      <img src={`${DIGIFIZZY_S3}/13/images/3132_image2.png`} className={styles.gif1} />
    </a>
    <a href="https://foundation.app/@Smeafsculpts/spaceheadz/8" target="_blank">
      <video autoPlay muted loop className={styles.video1}>
        <source src={`${DIGIFIZZY_S3}/13/videos/3132_video1.mp4`} />
      </video>
    </a>
    <a href="https://foundation.app/@whalesink/m3m3/5" target="_blank">
      <video autoPlay muted loop className={styles.video2}>
        <source src={`${DIGIFIZZY_S3}/13/videos/3132_video2.mp4`} />
      </video>
    </a>
    <div className={styles.text10}>Triple Perception</div>
    <div className={styles.text11}>simonclowes</div>
    <div className={styles.text12}>May 2nd 2022</div>
    <div className={styles.text13}>The Icefrog Pepe Hof</div>
    <div className={styles.text14}>Whalesink</div>
    <div className={styles.text15}>Whalesink</div>
    <div className={styles.text16}>Whalesink</div>
    <div className={styles.text17}>Whalesink</div>
    <div className={styles.text18}>Whalesink</div>
    <div className={styles.text19}>Whalesink</div>
    <div className={styles.text20}>Whalesink</div>
    <div className={styles.text21}>Whalesink</div>
    <div className={styles.text22}>April 15th 2022</div>
  </div>
);

export default Page3132;
