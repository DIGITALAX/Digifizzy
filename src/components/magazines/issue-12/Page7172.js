import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page7172.module.scss';

const Page7172 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/12/images/7172_back.png`} width={1920} height={1497} />
    </div>
    <div className={styles.text1}>NFT BUNDLES</div>
    <div className={styles.text2}>
      Through DIGIFIZZY we are proving out a new publishing model with NFT based decentralised
      subscriptions. All of the content is free to read, and, people can subscribe to NFT bundles
      that bring together a mix of well known and upcoming/undervalued talent across music, art,
      fashion, gaming, other collectibles etc. This is not an auction or a typical drop, but unlike
      where if creators were featured on the cover of a magazine they would get nothing for it or
      sometimes have to pay for placement, here they get a share distributed across the contributors
      to the bundle, whilst the publication is still able to prove out the model through a majority
      share, being the core creator, engineer, distributor and contributor.
    </div>
    <div className={styles.text3}>ERC-998 BUNDLE</div>
    <div className={styles.text4}>
      BURN YOUR ERC-721 <span>THROUGH THE DIGIFIZZY.XYZ WEBSITE</span> TO UNLOCK A COLLECTION OF
      ERC-1155 NFTs + HIDDEN MAGAZINE CONTENT AND DYNAMIC NFT AIRDROPS. 3 x BUNDLES: COMMON,
      SEMI-RARE, EXCLUSIVE.
    </div>
    <div className={styles.text5}>Web3 wizards collectibles</div>
    <div className={styles.text6}>f3m I GROK ZERO KNOWLEDGE T-SHIRTS</div>
    <div className={styles.text7}>f3m CYPHERPUNK PGP HOODIES</div>

    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/12/images/7172_image1.png`} width={866} height={243.9} />
    </div>

    <div className={styles.text8}>f3m WALLET SET UP LONG SLEEVE</div>

    <div className={styles.text9}>DIFFUSION MODEL cyber scenes</div>

    <div className={styles.image2}>
      <Image src={`${DIGIFIZZY_S3}/12/images/7172_image2.png`} width={821} height={274} />
    </div>

    <div className={styles.image5}>
      <Image src={`${DIGIFIZZY_S3}/12/images/7172_image4.png`} width={519} height={260} />
    </div>
    <div className={styles.image6}>
      <Image src={`${DIGIFIZZY_S3}/12/images/7172_image5.png`} width={660} height={395} />
    </div>

    <div className={styles.image7}>
      <Image src={`${DIGIFIZZY_S3}/12/images/7172_image3.png`} width={528} height={264} />
    </div>

    <a className={styles.textWrapper} href="/unlockable/1/" target="_blank">
      <div className={styles.text12}>SEE MORE</div>
      <div className={styles.text13}>SEE MORE</div>
    </a>
  </div>
);

export default Page7172;
