import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page4142.module.scss';

const Page4142 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/12/images/4142_back.png`} width={1920} height={1497} />
    </div>
    <div className={styles.text4}>Throughout the Metaverse</div>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/11/images/4142_image1.png`} width={518} height={76} />
    </div>
    <a className={styles.link1} href="https://models.digitalax.xyz/models/vihka/" target="_blank">
      ZERO
    </a>
    <div className={styles.text1}>
      Zero is the first among many navigators repping the upstart vanguard of a new ZK Cypherpunk
      Zeitgeist.
      <br />
      <br />
      Hardly every caught without her cypherline braided hyper visor lenses and gloves, she wears
      the daring found of all those that entered the verse slightly before its time.
      <br />
      <br />
      You might notice a few thin neon glowing strands across the side of her face and upper body.
      And then you might start to wonder just how exactly and who was it that managed to mark so
      much densely packed computation within each cell of her skin. A quick stolen glance from green
      eyes so piercing they shatter the very cliche of that phrase.
    </div>
  </div>
);

export default Page4142;
