import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page1718.module.scss';

const Page1718 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <Image src={`${DIGIFIZZY_S3}/13/images/1718_image1.png`} width={1618} height={1497} />
      </div>
      <div className={styles.text1}>MXVOID</div>
      <div className={styles.text2}>MXVOID</div>
      <div className={styles.text3}>MXVOID</div>
      <div className={styles.text4}>
        Like nearly every artist that got into NFTs in March 2021, it was Beeple's Everydays that
        got me interested in the space. Also, the unexpected turning point that persuaded me to
        participate was a Planet Money podcast episode from around that time that described the
        specifics of what NFTs are and how they work. The idea of royalties from secondary sales is
        what really tipped the scales for me.
        <br />
        <br />I wanted to fight the widespread perception that NFTs are just "expensive pfps." I
        also wanted to create a large, inexpensive, and open-edition series that I could use to
        onboard friends, family, and acquaintances into NFTs, to airdrop to collectors, and to offer
        to other people to collect and share, all in-line with gifting culture. Additionally, I
        wanted to curate and celebrate CC0 and public domain works, especially those that I may want
        to remix in the future!
        <br />
        <br />I release my work with a mix of CC0 and CC-BY (and rarely CC-BY-SA if I use ShareAlike
        media in a remix). I support artists releasing their works with whatever terms they
        like—whether that's the full legal protection of copyright, CC0, or anything in between. CC0
        is valuable for making works totally free, open, and meme-able, but also comes with the
        relinquishment of the creator's moral rights, which is why I'm selective about which works I
        CC0. CC-BY preserves my moral rights and requires attribution—it's the most permissive
        license option while also preserving those rights, which is why it's my default license
        option. Ultimately, I see the power of CC0 as bringing the issues of IP to the forefront of
        artists' and collectors' minds, and showing viable and remix culture-friendly alternatives
        to the highly restrictive nature of copyright.
        <br />
        <br />
        Self-sovereignty as an artist has been extremely important to me! My creative approach is
        heavy on experimentation and exploration, which doesn't work when someone else is dictating
        the terms of my work, be it a client or employer. I've never had a successful commission,
        and personally, I find commission work to drain all the fun out of making art. I've also
        tried to get compensation for my art with all the other pre-NFT channels—selling physical
        pieces, micropayments, crowdfunding, etc.—and none of them worked well for me, either. Since
        the majority of my work is digital, NFTs—a digitally-native format of distributing art—have
        been the best fit for me and my work. I'm far from making a living from my art, but making
        cryptoart has brought me more compensation, by orders of magnitude, than everything else
        I've tried.
        <br />
        <br />
        In my opinion, event tickets and passes will be the next turning point to widen the adoption
        of Web3 and NFTs. Looking ahead, I think the CC0 community (and the ethos from the
        gifting/free/open/remix cultures it represents) will shape the NFT space for the better. In
        fact, the first cryptoartists were working in the CC0 milieu before they formally recognized
        what they were doing as CC0, so it's part of the idea space woven into the very fabric of
        NFTs. CC0 has always been there, and it always will be.
      </div>
      <a
        className={styles.link1}
        href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18213777350840045628186174046519911781917879366610239382278114219047748894721"
        target="_blank"
        rel="noreferrer"
      >
        <img src={`${DIGIFIZZY_S3}/13/images/1718_image2.png`} />
      </a>
      <a
        className={styles.link2}
        href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18213777350840045628186174046519911781917879366610239382278114093703423328257"
        target="_blank"
        rel="noreferrer"
      >
        <img src={`${DIGIFIZZY_S3}/13/images/1718_image3.png`} />
      </a>
      <a
        className={styles.link3}
        href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18213777350840045628186174046519911781917879366610239382278114186062400061441"
        target="_blank"
        rel="noreferrer"
      >
        <img src={`${DIGIFIZZY_S3}/13/images/1718_image4.png`} />
      </a>
      <a
        className={styles.link4}
        href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18213777350840045628186174046519911781917879366610239382278114213550190755841"
        target="_blank"
        rel="noreferrer"
      >
        <img src={`${DIGIFIZZY_S3}/13/images/1718_image5.png`} />
      </a>
      <a
        className={styles.link5}
        href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/18213777350840045628186174046519911781917879366610239382278114194858493083649"
        target="_blank"
        rel="noreferrer"
      >
        <img src={`${DIGIFIZZY_S3}/13/images/1718_image6.png`} />
      </a>
      <div className={styles.leftSideFrame} />
      <div className={[styles.animationFrame, styles.leftSideImageWrapper].join(' ')}>
        <img src="./magazine/1/images/howtogetintext 2.png" alt="" />
        <img src="./magazine/1/images/howtogetintext 2.png" alt="" />
        <img src="./magazine/1/images/howtogetintext 2.png" alt="" />
        <img src="./magazine/1/images/howtogetintext 2.png" alt="" />
      </div>
      <div className={styles.rightSideFrame} />
      <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
        <img src="./magazine/1/images/howtogetintext 1.png" alt="" />
        <img src="./magazine/1/images/howtogetintext 1.png" alt="" />
        <img src="./magazine/1/images/howtogetintext 1.png" alt="" />
        <img src="./magazine/1/images/howtogetintext 1.png" alt="" />
      </div>
    </div>
  );
};

export default Page1718;
