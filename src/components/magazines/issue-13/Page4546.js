import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page4546.module.scss';

const Page4546 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/13/images/4546_back.png`} width={1920} height={1497} />
    </div>
  </div>
);

export default Page4546;
