import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page8990.module.scss';

const Page8990 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1} />
      <div className={styles.text1}>
        This next industrial revolution will no longer have the creators beholden to any platform or
        entity – and physical production and supply chains are facing obsolescence, since productive
        capacity is all within your pocket, your fate all within your hands, in an open,
        interoperable, and permissionless metaverse. A metaverse that literally creates value from
        ether.
        <br />
        <br />
        The greatest power of web3 is that the individual, creative, and economic sovereignty it
        offers makes us our own factories with limitless capacity to innovate, iterate, and make new
        – CC0 enables endless iterations where others can freely build on existing ideas, engaging
        and collaborating with their purveyors, therefore generating even more potential for
        undeniable technological progress.
        <br />
        <br />
        Ultimately, web3 has turned us into our own digital factories running with our own capital,
        talent, creativity – no single brand, animal, vegetable, or mineral can tell you what you
        should do with your “factory”.
        <br />
        <br />
        Web3 puts you in control, in full ownership, and full responsibility over your destiny.
        Everyone is a creator.
        <br />
        <br />
        We have nothing to lose but our chains, and a world to gain.
      </div>
      <video autoPlay muted loop className={styles.video1}>
        <source src={`${DIGIFIZZY_S3}/12/videos/8990_video1.mp4`} />
      </video>
      <video autoPlay muted loop className={styles.video2}>
        <source src={`${DIGIFIZZY_S3}/12/videos/8990_video2.mp4`} />
      </video>
      <video autoPlay muted loop className={styles.video3}>
        <source src={`${DIGIFIZZY_S3}/12/videos/8990_video3.mp4`} />
      </video>
    </div>
  );
};

export default Page8990;
