import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page4142.module.scss';

const Page4142 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/13/images/4142_back.png`} width={1920} height={1497} />
    </div>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/13/images/4142_image1.png`} width={518} height={76} />
    </div>
    <div className={styles.text4}>Throughout the Metaverse</div>
    <a className={styles.link1} href="https://models.digitalax.xyz/models/zero" target="_blank">
      ZERO
    </a>
    <div className={styles.text1}>Cyber AI Model Scene on the Streets of NYC</div>
    <div className={styles.text2}>Created with Midjourney</div>
  </div>
);

export default Page4142;
