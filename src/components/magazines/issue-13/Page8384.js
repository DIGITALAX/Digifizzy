import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page8384.module.scss';

const Page8384 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/13/images/8384_back.png`} width={1920} height={1497} />
    </div>
  </div>
);

export default Page8384;
