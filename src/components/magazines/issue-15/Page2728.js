import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2728.module.scss';

const Page2728 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/15/images/Artboard 27.png`} width={960} height={1497} />
    </div>
    <div className={styles.imageBackground2}>
      <Image src={`${DIGIFIZZY_S3}/15/images/Artboard 28.png`} width={960} height={1497} />
    </div>
  </div>
);

export default Page2728;
