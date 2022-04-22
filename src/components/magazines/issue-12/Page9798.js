import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page9798.module.scss';

const Page9798 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/12/images/9798_image1.png`} width={960} height={733.58} />
    </div>

    <div className={styles.image2}>
      <Image src={`${DIGIFIZZY_S3}/12/images/9798_image2.png`} width={960} height={256} />
    </div>

    <video autoPlay loop muted className={styles.video2}>
      <source src={`${DIGIFIZZY_S3}/12/videos/9798_video1.mp4`} />
    </video>
    <video autoPlay loop muted className={styles.video3}>
      <source src={`${DIGIFIZZY_S3}/12/videos/9798_video2.mp4`} />
    </video>
    <video autoPlay loop muted className={styles.video4}>
      <source src={`${DIGIFIZZY_S3}/12/videos/9798_video3.mp4`} />
    </video>
    <video autoPlay loop muted className={styles.video5}>
      <source src={`${DIGIFIZZY_S3}/12/videos/9798_video4.mp4`} />
    </video>
    <video autoPlay loop muted className={styles.video6}>
      <source src={`${DIGIFIZZY_S3}/12/videos/9798_video5.mp4`} />
    </video>

    <div className={styles.text1}>
      The Cypherpunk CC0 Streetwear Pop Up Series is co-hosted by DIGITALAX, Kinetic $pace DAO, CC0
      DAO and a close knit alliance of additional DAOs and contributors. This series includes a
      constellation of IRL and digital pop ups, on-site mints, immersive experiences and secret
      drops taking place over the course of the Spring 2022.
      <br />
      <br />
      The capstone event is Web3 Fashion Week, which rounds off the season.
      <br />
      <br />
      The entire series spotlights self sovereign streetwear, zero knowledge, CC0 utility and the
      cypherpunk keys to local creative production, with major highlights including pioneering music
      x fashion NFTs, web3 fashion and model showcases by the Global Models Syndicate and Global
      Designer Network, alongside immersive projective creator amplification labs.
    </div>
    <div className={styles.text2}>Cypher tier (1000 x $300)</div>
    <div className={styles.text3}>Rare tier (100 x $3000)</div>
    <div className={styles.text4}>Epic tier (30 x $10,000)</div>
    <div className={styles.text5}>Mythic tier (10 x $30,000</div>
    <div className={styles.text6}>Zero tier (3 x $100,000</div>

    <a href="https://www.web3fashionweek.xyz/" target="_blank" className={styles.link1}>
      Stay Up to Date
    </a>

    <a
      href="https://patrons.digitalax.xyz/dao/W3FW%20&%20CypherPunk%20CC0%20Series/"
      target="_blank"
      className={styles.link2}
    >
      Sponsor
    </a>

    <a
      href="https://patrons.digitalax.xyz/dao/W3FW%20&%20CypherPunk%20CC0%20Series/"
      target="_blank"
      className={styles.link2}
    >
      Sponsor
    </a>

    <a
      href="https://patrons.digitalax.xyz/dao/W3FW%20&%20CypherPunk%20CC0%20Series/"
      target="_blank"
      className={styles.link3}
    >
      Sponsor
    </a>

    <a
      href="https://patrons.digitalax.xyz/dao/W3FW%20&%20CypherPunk%20CC0%20Series/"
      target="_blank"
      className={styles.link4}
    >
      Sponsor
    </a>
    <a
      href="https://patrons.digitalax.xyz/dao/W3FW%20&%20CypherPunk%20CC0%20Series/"
      target="_blank"
      className={styles.link5}
    >
      Sponsor
    </a>
  </div>
);

export default Page9798;
