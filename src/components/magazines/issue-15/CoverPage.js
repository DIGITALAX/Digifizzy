import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './coverpage.module.scss';

const CoverPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/15/images/Artboard 0.png`} width={960} height={1497} />
    </div>
  </div>
);

export default CoverPage;
