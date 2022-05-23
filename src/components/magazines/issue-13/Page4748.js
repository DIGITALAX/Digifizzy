import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page4748.module.scss';

const Page4748 = () => (
  <div className={styles.wrapper}>
    <div className={styles.text1}>SELF SOVEREIGNTY & WEB3</div>
    <div className={styles.rect1}></div>
    <div className={styles.text2}>
      Anyone who has been around long enough in crypto will possess some degree of political and
      economic awareness.
      <br />
      <br />
      Back at the turn of the 90s, visionary tech guys got giddy about the advent of the internet –
      web1, as it were – but at the same time, wary about a dystopian future devoid of any
      meaningful privacy, herded like cattle by the new technological order.
      <br />
      <br />
      Crypto’s core fundamental philosophy is rooted in the original cypherpunk movement, the latter
      of which was rooted in individualistic political philosophies such as anarchism, liberalism,
      and libertarianism.
      <br />
      <br />
      Their writings served as the principles on which crypto – and web3, in particular – were
      built, long before a certain Satoshi Nakamoto published the original Bitcoin white paper in
      2013.
    </div>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/12/images/4344_image1.png`} height={440} width={246} />
    </div>
    <div className={styles.image2}>
      <Image src={`${DIGIFIZZY_S3}/12/images/4344_image1.png`} height={440} width={246} />
    </div>
    <div className={styles.image3}>
      <Image src={`${DIGIFIZZY_S3}/12/images/4344_image1.png`} height={440} width={246} />
    </div>
  </div>
);

export default Page4748;
