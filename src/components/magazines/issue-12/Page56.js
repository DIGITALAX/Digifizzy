import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page56.module.scss';

const Page56 = () => (
  <div className={styles.wrapper}>
    <div className={styles.background}>
      <Image width={1920} height={1497} src={`${DIGIFIZZY_S3}/12/images/56_back.png`} />
    </div>
  </div>
);

export default Page56;
