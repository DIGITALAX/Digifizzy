import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page105106.module.scss';

const Page105106 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src={`${DIGIFIZZY_S3}/13/images/105106_back.png`} width={1920} height={1497} />
      </div>
    </div>
  );
};

export default Page105106;
