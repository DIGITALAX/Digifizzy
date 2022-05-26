import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page9192.module.scss';

const Page9192 = () => (
  <div className={styles.wrapper}>
    <div className={styles.rect1}></div>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/13/images/9192_back.png`} width={1920} height={1497} />
    </div>
    <a href="https://twitter.com/mirprotocol" target="_blank">
      <div className={styles.link1}>Mir Protocol</div>
    </a>
    <div className={styles.text1}>The Right to Privacy</div>

    <div className={styles.text3}>
      The enumeration in the Constitution, of certain rights, shall not be construed to deny or
      disparage others retained by the people.
      <br />
      <br />
      Our rights are inherent. They can’t be taken away. They can only be violated.
      <br />
      <br />
      The 9th amendment, and in fact all amendments, despite what some may think were never intended
      a grant of rights but rather a limitation of government powers.
      <br />
      <br />
      Our self sovereignty remains inalienable, but it has rarely been genuinely protected from
      violent government intrusion.
      <br />
      <br />
      The latest draft opinion leaked from the Supreme Court offers a worrying warning of just how
      much worse it is going to get as 50 years of explicit recognition of our rights to self
      ownership, personal and relationship autonomy, and yes, privacy, are about to go by the
      wayside.
      <br />
      <br />
      When we consider the implications beyond whether you are forced to give birth, can choose the
      race and gender of who you marry, and so many other personal decisions we’ve come to take for
      granted, to what impact no practical expectation of governments and institutions expecting our
      privacy and primacy in private or public decision making will have on the tech and data
      landscape.
      <br />
      <br />
      In these times, what we can do is go on the offensive— build more, create more,
      out-coordinate, out-organise, out-fund, out-compete the competition.
    </div>
    <div className={styles.text4}>
      <b>Scaling Ethereum</b>
      <br />
      with zero-knowledge proofs
    </div>
    <div className={styles.text5}>
      Wen zero?
      <br />
      <br />
      No this isn’t another fear fest about impending bear cataclysms or a paean about the collapse
      of Luna. It’s a deeper look at one of the leading projects to spearhead the adoption of zero
      knowledge proofs as much needed EVM scaling solutions.
      <br />
      <br />
      Mir Protocol was one of the earliest dedicated ZK projects on the scene, spearheading a large
      part of the burden to scale Ethereum beyond 12 transactions per second. We all know now that
      ZKs will be the most promising advancement in anything blockchain related since the launch of
      Ethereum itself, and Mir’s groundbreaking technology allows these proofs to be generated 100x
      faster than existing ZK alternatives.
      <br />
      <br />
      More recently they joined the Polygon Zero team to expand their open source development even
      further.
      <br />
      <br />
      To take a deeper look behind the hood, what actually makes Mir different?
      <br />
      <br />
      Well, it comes in the form of a pretty funny sounding acronym: Plonky… and now Plonky2.
      <br />
      <br />
      Plonky2 showcases a new approach to building vastly more performant SNARK/STARKs using what’s
      called small fields and recursive FRI.
      <br />
      <br />
      The Goldilocks Field does it appears— it overcomes the trade off for a just right fit.
      Previously ZK solutions had to compromise between either being fast and small or slow and
      large. But how do you get to fast and large?
      <br />
      <br />
      Recursion solves this by taking advantage of the structure of CPUs to speed up the arithmetic,
      where the Blowup factor combines fast provers with small proofs for transformative results.
      <br />
      <br />
      Plonky2 represents a 100x speed up on recursion performance for Ethereum relative to other
      proof systems. And the most significant part is that this acceleration is entirely Independent
      of any hardware advancements. It is purely software based. As hardware continues to follow
      Moore’s Law in new and surprising ways, the results will be even more dramatic.
      <br />
      <br />
      It truly is an exciting time to be building with ZKs and is incredibly promising for everyone
      in this space.
    </div>
  </div>
);

export default Page9192;
