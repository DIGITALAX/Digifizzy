import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2930.module.scss';

const Page4748 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/14/images/Artboard 45.png`} width={960} height={1497} />
    </div>
    <div className={styles.imageBackground2}>
      <Image src={`${DIGIFIZZY_S3}/14/images/Artboard 46.png`} width={960} height={1497} />
    </div>
  </div>
);

export default Page4748;
