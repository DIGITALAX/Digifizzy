import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2122.module.scss';

const Page2122 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/2122_image1.jpg`} width={960} height={1497} />
      </div>
      <div className={styles.image2}>
        <Image src={`${DIGIFIZZY_S3}/12/images/2122_image2.jpg`} width={960} height={1497} />
      </div>
      <div className={styles.text1}>
        Imagine if every single machine with a cryptographic function conked out for just a few
        moments.
        <br />
        <br />
        The pandemonium would be of biblical proportions.
        <br />
        <br />
        Internet access will grind to a halt, bank transfers and remittances that could be the
        difference between life and death would stop going through, and the necessary functions we
        need from our mobile devices would suddenly go kaput.
        <br />
        <br />
        And in that small window of complete and total disconnection, every single detail of our
        literal lives – the personal information we grant access to third parties without even
        thinking twice – can and WILL be used against us to unfathomable harm.
      </div>
    </div>
  );
};

export default Page2122;
