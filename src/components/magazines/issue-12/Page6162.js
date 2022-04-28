import React from 'react';
import { DIGIFIZZY_S3 } from '@constants/urls';
import Image from 'next/image';
import styles from './page6162.module.scss';

const Page6162 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>

      <video autoPlay muted loop className={styles.video1}>
        <source src="./magazine/1/videos/moshed-05-02-1-15-28.mp4" type="video/mp4" />
      </video>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/6162_image3.png`} width={262} height={1640} />
      </div>
      <div className={styles.text1}>SOUTH KOREA</div>
      <div className={styles.text2}> INTERNATIONAL PLAYERS</div>

      <div className={styles.image3}>
        <Image src={`${DIGIFIZZY_S3}/12/images/6162_image2.png`} width={1025} height={1538} />
      </div>
      <div className={styles.image2}>
        <Image src={`${DIGIFIZZY_S3}/12/images/6162_image1.png`} width={484} height={1311} />
      </div>
      <div className={styles.text3}>
        The South Korean population, whilst only representing 0.6% of the world’s population, has
        always been an early adopter of new technologies in the modern era. One of Asia’s fastest
        growing economies in the post WW2 era, it’s no surprise that they have been eager in their
        uptake of crypto and NFTs.
        <br />
        <br />
        The relatively young population has been one of the most digitally native on the planet.
        From video games to mobile banking, 37.1% of workers in their twenties were surveyed in 2021
        to have owned crypto, and 49.8% for those ages between 30-39 years old.
        <br />
        <br />
        It was back in March 2020, when the South Korean National Assembly passed new legislation
        that paved the way for the regulation and legalization of cryptocurrencies and crypto
        exchanges. And although this cracked down with harsher implementations of KYC and AML laws,
        the country’s overall trajectory appears to be on the upswing now with the election of the
        new vocally pro crypto president. Whilst other elements of his platform are certainly up for
        debate, the active embrace of South Korea’s leading position in the further pioneering of
        web3 is certainly to be encouraged.
        <br />
        <br />
        The full policy menu is yet to be released, and, as always, actions speak louder than words
        and the devil is in the details. Yet, at this point, it’s almost impossible to put the web3
        genie back in the bottle without destroying the global economy. It will be interesting to
        watch the next five years of this new presidency unfold within.
      </div>
    </div>
  );
};

export default Page6162;
