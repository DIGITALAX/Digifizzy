import React from 'react';
import { DIGIFIZZY_S3 } from '@constants/urls';
import Image from 'next/image';
import styles from './page5758.module.scss';

const Page5758 = () => (
  <div className={styles.wrapper}>
    <div className={styles.right}>
      <Image src={`${DIGIFIZZY_S3}/13/images/5758_gif.gif`} width={2400} height={1497} />
    </div>
    <div className={styles.leftBack} />
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/13/images/5758_left.png`} width={960} height={1497} />
    </div>
    <div className={styles.text1}>
      Cryptic messages deciphered through fighting, running, gathering, in a portal shock gate
      jumping world.
    </div>
    <div className={styles.text2}>
      Collect and unravel the keys to regain the lost empire. Discover and survive in a bitter-sweet
      and closely connected world of unpredictable adversity and challengers. Become one of the many
      world’s most legendary sovereigns.
      <br />
      <br />
      It’s a pixelated microverse that evolves with players over time.
      <br />
      It’s all developed in-house by hand (F₃Manifesto) and entirely CC0. Including all sprites and
      assets!
      <br />
      <br />
      The game will switch between a platformer, runner, RPG elements and multiplayer fighters, all
      with web3 connect and associated collectible and utility based NFTs.
    </div>
    <div className={styles.text3}>
      The game maintains a strong focus on being highly moddable— the wiki also has a dedicated
      Modding Tools section where you can learn the ropes of how to mod and remix the game— from the
      characters, scenes, physics and sound.
    </div>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/13/images/5758_image1.png`} width={414} height={414} />
    </div>
    <a href="https://mypocketempire.xyz/" target="_blank">
      <div className={styles.link1}>
        <div className={styles.linkText1}>start training</div>
      </div>
    </a>
    <a href="https://docs.mypocketempire.xyz/" target="_blank">
      <div className={styles.link2}>
        <div className={styles.linkText2}>GAME MODDING TOOLS</div>
        <img src={`${DIGIFIZZY_S3}/13/images/5758_heart.png`} />
      </div>
    </a>
  </div>
);

export default Page5758;
