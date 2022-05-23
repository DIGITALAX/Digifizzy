import React from 'react';
import Image from 'next/image';

import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page9798.module.scss';

const Page9798 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src={`${DIGIFIZZY_S3}/12/images/9596_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/9798_image.png`} width={960} height={152} />
      </div>
      <div className={styles.image2}>
        <Image src={`${DIGIFIZZY_S3}/12/images/9798_image.png`} width={960} height={152} />
      </div>
      <div className={styles.text1}>
        CC0 means that the work can’t be cut off or choked by anyone in the market. it remains free,
        accessible and open for all to use as essential base ingredients, to remix and derive from.
        <br />
        <br />
        on-chain verification provides a clear transparent and time stamped history which allows for
        far lower friction coordination between everyone involved in the creative process.
        <br />
        <br />
        and finally, providing informative creative step by steps helps you’re customer base and
        fellow creators better understand how to relate to and frame everything you are doing within
        their broader world view.
        <br />
        <br />
        it might all sound counter intuitive, where often anyone driven to create might focus first
        on how to gain recognition for how much you've already done, but usually it's actually far
        more direct to focus first on what we can give rather than what we are going to get.
      </div>
      <div className={styles.text2}>summer 2022 | june 20th - 23rd NYC</div>
      <div className={styles.text3}>
        Four days and nights of official events and immersive experiences to rock your self
        sovereign world:
      </div>
      <ul className={styles.text4}>
        <li>Grok zero knowledge</li>
        <li>Amplify CC0 derivatives and surprise mints with the utility that matters most</li>
        <li>
          Settle the debate between which has more instant and long term $$$ worth: CC0 vs limited
          rights
        </li>
        <li>Digital & physical apparel NFT pop ups throughout the city</li>
        <li>Realm Runway #2: Cypherpunk Zeitgeist 2K</li>
        <li>Iconographic keys to access, usage, and token governed coordination</li>
        <li>
          Local production workshops + open labs: from pattern printing to decentralised fabrication
        </li>
        <li>Music x fashion immersive audio sessions</li>
        <li>
          Show up during the week at select locations to solve a series of challenges, including
          minting and amplifying cc0 derivatives, to gain access to the mint list for unique
          membership tokens which allow you to participate in the second part of the extra special
          public / private auction of a self sovereign CC0 collection with hidden contributors and
          plenty of other obviously cool benefits
        </li>
      </ul>
      <video autoPlay loop muted className={styles.video1}>
        <source src={`${DIGIFIZZY_S3}/12/videos/9596_video1.mp4`} />
      </video>
    </div>
  );
};

export default Page9798;
