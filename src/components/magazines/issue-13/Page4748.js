import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page4748.module.scss';

const Page4748 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/13/images/4748_back.png`} width={1920} height={1497} />
    </div>
    <div className={styles.text1}>HIGH PROFILE HACKS</div>
    <div className={styles.text2}>HIGH PROFILE HACKS</div>
  </div>
);

export default Page4748;
