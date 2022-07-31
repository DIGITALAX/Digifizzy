import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2122.module.scss';

const Page2122 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/15/images/Artboard 21.png`} width={960} height={1497} />
    </div>
    <div className={styles.imageBackground2}>
      <Image src={`${DIGIFIZZY_S3}/15/images/Artboard 22.png`} width={960} height={1497} />
    </div>
  </div>
);

export default Page2122;
