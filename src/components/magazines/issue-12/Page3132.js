import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page3132.module.scss';

const Page3132 = () => (
  <div className={styles.wrapper}>
    <div className={styles.back}>
      <Image src={`${DIGIFIZZY_S3}/12/images/3132_back.png`} width={1920} height={1497} />
    </div>
    <div className={styles.rect1} />
    <div className={styles.text1}>Crypto Art</div>
    <div className={styles.text2}>Hall of</div>
    <div className={styles.text3}>Fame</div>
    <a href="https://foundation.app/@danielleezzo/inhtw/1" target="_blank">
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/3132_image1.png`} width={735} height={841} />
      </div>
    </a>
    <img src={`${DIGIFIZZY_S3}/12/images/3132_path1.png`} className={styles.path1} />
    <img src={`${DIGIFIZZY_S3}/12/images/3132_path2.png`} className={styles.path2} />
    <div className={styles.text4}>Prathamesh Rumaji Shedge</div>
    <div className={styles.text5}>dielamaharanie</div>
    <div className={styles.text6}>March 11th 2022</div>
    <a href="https://foundation.app/@artistation_ps/weshall/1" target="_blank">
      <div className={styles.text7}>DEATHminis #2: Zombie Brain Electric Boogaloo</div>
      <div className={styles.text8}>FEB 18th 2022</div>
      <div className={styles.text9}>deathimself</div>
    </a>
    <a
      href="https://superrare.com/0x4e52ea0d29f14e2f5bace4054229bf387de388f1/deathminis-2:-zombie-brain-electric-boogaloo-2"
      target="_blank"
    >
      <img src={`${DIGIFIZZY_S3}/12/images/3132_gif1.gif`} className={styles.gif1} />
    </a>
    <a
      href="https://superrare.com/0x3f95f48b99f864913f697ef6c45dbcde1beef2ae/cloud-9-1"
      target="_blank"
    >
      <video autoPlay muted loop className={styles.video1}>
        <source src={`${DIGIFIZZY_S3}/12/videos/3132_video1.mp4`} />
      </video>
    </a>
    <a href="https://makersplace.com/ursfischer/chaos-141-spirit-1-of-1-365573/" target="_blank">
      <video autoPlay muted loop className={styles.video2}>
        <source src={`${DIGIFIZZY_S3}/12/videos/3132_video2.mp4`} />
      </video>
    </a>
    <div className={styles.text10}>Cloud 9</div>
    <div className={styles.text11}>Camila Nogueira</div>
    <div className={styles.text12}>March 9th 2022</div>
    <div className={styles.text13}>CHAOS #141 Spirit</div>
    <div className={styles.text14}>Urs Fischer</div>
    <div className={styles.text15}>14 Apr 2022</div>
  </div>
);

export default Page3132;
