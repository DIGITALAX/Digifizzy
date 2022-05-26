import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page1718.module.scss';

const Page1718 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay loop muted className={styles.video}>
        <source src={`${DIGIFIZZY_S3}/13/videos/1718_video.mp4`} type="video/mp4" />
      </video>
      <div className={styles.text0}>An inside look with the team</div>
      <div className={styles.text1}>
        We were one of the very first people who minted Loot when it was launched. We were
        fascinated by how Loot is different from other NFT projects at the time. Loot is a building
        block that allows others to build on top of it. But, while watching many projects build on
        top of Loot, we realized that they all lack something – the arts. One of the challenges that
        we have seen in the Loot ecosystem is that many projects do not focus on visualizing the
        items inside each Loot bag themselves as drawing all the different pieces and combinations
        is a tonne of work. Also, having compelling imagery that tells the story visually solves
        another major challenge with Loot: the language barrier for non-English speakers. When we
        visualize the items inside Loot bags, we make the Loot ecosystem compelling and easy to
        understand globally, which of course then reaches more users and expands the Loot universe.
      </div>
      <div className={styles.text2}>
        We believe that CC0 is the closest thing to the idea of decentralization. Plus, HyperLoot is
        meant to be a visualization layer on top of Loot and a layer that allows others to utilize
        and build apps on top it. We believe that public domain will maximize the creativity from
        the community of what can be built on top of the project without worrying about license and
        legal terms. We also decided to open source everything we build – from our source code all
        the way to Photoshop files and everything in-between. We want HyperLoot to be a public-good
        project. If other builders can take our source code and files and extend it into something
        else, we are more than happy to see it happen. Moreover, by us providing the source code to
        the public, it also means that down the road, the community can also contribute to the core
        of the project and grow the ecosystem together.
      </div>
      <div className={styles.text3}>
        We were inspired by the CC0 movement from Blitmap and Nouns. We saw how the communities
        helped expand the Blitmap and Nouns universe on their own, instead of waiting for the
        creators to do something. Plus, we took a look at the works that have already been in the
        public domain like Mona Lisa, Shakespeare, Dracula, Peter Pan, and King Arthur. We saw that
        the value of these works doesn’t decrease simply because Hollywood makes a movie about them,
        but in fact, their value increases as the exposure and the popularity of the original work
        increase when there are more derivatives being built based on it.
        <br />
        <br />
        That is when we realized that just because someone else can utilize your work released in
        public domain, it doesn’t mean that the value will go down, instead it's the complete
        opposite.
      </div>
      <div className={styles.text4}>
        Even though we are a huge fan of public domain, we understand that there are pros and cons
        to every type of license and IP. There is no right or wrong answer. Creators should study
        about the differences between each type of license and choose whatever they feel is best for
        themselves and their community. Regardless of the what type of license the NFT has, if the
        work is good, it’s good.
      </div>
      <div className={styles.text5}>
        We are fascinated by the intercompatibility and the bottom-up approach of NFTs, gaming, and
        web3. Together with the CC0 movement, we believe that public domain will speed up
        intercompatibility of each media. We expect to see more creativity being created at a rapid
        speed that we haven’t seen before. People can get creative without worrying about legal
        stuff anymore. Plus, when you build on top of an existing project or incorporate another
        project into yours, the network effects can grow very fast. This would be the same with
        digital-IRL realms. Brands would be able to cross over the digital media to IRL products and
        services faster. We already see this happening with Nouns.
      </div>
      <div className={styles.text6}>
        Since we want other people, projects, and companies to be able to utilize HyperLoot, we will
        be spending a lot of time building the foundation of the HyperLoot ecosystem. Starting off
        with open sourcing our code and art-related files, then following with SDK, APIs, and tools
        for builders and creators to easily integrate HyperLoot into any idea they have. We will
        also be building a game using these tools as well.
        <br />
        <br />
        We have built HyperLoot’s website as a platform to be able to become the entry point for any
        ideas being built on top of HyperLoot. Our community will be taking a huge role in defining
        HyperLoot’s future and we will all be building together.
      </div>
      <a
        className={styles.link1}
        href="https://twitter.com/hyperloot_"
        target="_blank"
        rel="noreferrer"
      >
        <img src={`${DIGIFIZZY_S3}/13/images/1718_link1.png`} />
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
