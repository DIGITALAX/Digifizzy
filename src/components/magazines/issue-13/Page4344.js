import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page4344.module.scss';

const Page4344 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/13/images/4344_back.png`} width={1920} height={1497} />
    </div>
    <a className={styles.link1} href="https://models.digitalax.xyz/models/edit" target="_blank">
      EDIT
    </a>
    <div className={styles.text1}>Cyber AI Model Scene on the Streets of NYC</div>
    <div className={styles.text2}>Created with Midjourney</div>
  </div>
);

export default Page4344;
