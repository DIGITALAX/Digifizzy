import React from 'react';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page1920.module.scss';

const Page1920 = () => (
  <div className={styles.wrapper}>
    <div className={styles.rect1} />
    <div className={styles.rect2} />

    <img src="./magazine/7/images/1920_image1.png" className={styles.image1} />
    <img src={`${DIGIFIZZY_S3}/13/images/1920_image1.png`} className={styles.image2} />

    <h1>
      RUG
      <span className={styles.impact1}>PULLS </span>
      <span className={styles.impact2}>&</span>
      <span className={styles.impact3}> SCAMS</span>
    </h1>

    <div className={styles.text1}>It’s ok to be anon. But, how to keep transparency?</div>
    <div className={styles.text2}>Creativity, experimentation & on-chain reputation.</div>
    <div className={styles.text3}>
      Strike a balance between maintaining the freedom of action necessary for creativity, remixing
      and combinatorial experimentation without compromising on transparency
    </div>
    <div className={styles.text4}>The Anonymity RugPull</div>
    <div className={styles.text5}>
      Are NFTs really nothing more than a stock market wannabe, racetrack betting, thrift store
      racking, ebay sniping, garage sale rummaging, antiques road show addicted, pawn shop hustling,
      garbage pale kids flip game?
      <br />
      <br />
      Hello Anon, welcome to this bizarre bazaar.
      <br />
      <br />
      What happens when one of the most successful PFP collections in the space self doxxes for a
      pre-rug run?
      <br />
      <br />
      If you’ve been paying attention to the latest Twitter melodrama and bear market fears, Azuki
      just answered that question for us. Zagabond just outed himself as the rug artist behind three
      previous projects.
    </div>
    <div className={styles.text6}>
      There’s been a lot of debate about just what it all means for Azuki itself as it hasn’t yet
      become a rug. But let’s run through the high and low points.
      <br />
      <br />
      May 9th Zagabond releases a Builder’s Story mirror article with a tell all— from Phunks, to
      tendies, to zunks, this guy has built and ran away from multiple high profile PFP projects.
      He’s even shadow switched on 5% royalties during times of high volume. We won’t go into each
      and every skeleton in the closet now, but it’s one thing to build anonymously, and another to
      be running “hide the VC money” shell game.
      <br />
      <br />
      Creators need to be able to experiment and move on when a project doesn’t work out as
      expected. But there’s a massive difference between experimentation out in the open, being
      transparent about what works and what doesn’t, and being anon or pseudoanon, in contrast to
      faking who you are and covering up your failures while repeatedly rugging without working to
      deliver value to the people who believed in you along the way.
      <br />
      <br />
      The juice of this rugpull edition is how we figure how to strike a balance between maintaining
      the freedom of action necessary for creativity, remixing and combinatorial experimentation
      without compromising on transparency and on-chain reputation.
      <br />
      <br />
      Participants in web3 projects and self sovereign networks need reliable information. It
      doesn’t have to be what you physically look like, where you live, or any other super personal
      traits, but, it does
    </div>
    <div className={styles.text7}>
      need to provide the actually useful information that allows buyers, holders and users of NFTs
      to make savvy decisions without the otherwise near guarantee of being rugged— whether that’s
      with capital or principles.
      <br />
      <br />
      Regardless of all of the noise, what is clear here is that Zagabond actively mislead the
      community about the core principles plastered all over the Azuki website.
      <br />
      <br />
      If you’re building out in the open in a true web3 way, and everything else that you claim
      along those lines, then be up front about your past activity due— especially if it’s some
      shady shit, like it’s been in this case.
      <br />
      <br />
      So, what should the community do in situations like this? What would be a good resolution?
      <br />
      <br />
      Should Zagabond be cut free, exiled from the project and hand over the keys. No, we don’t
      think so, that’s too much of a reward, allowing him to go off into hiding behind new profiles
      to just do it all again.
      <br />
      <br />
      Better, he agree to get to work delivering value in a diminished role.
      <br />
      <br />
      Even better, raising questions about whether or not the project should become cc0 would put
      real power in the hands of holders and the extended community as a whole.
      <br />
      <br />
      Despite what people might feel in situations like this or markets like these, NFTs aren’t zero
      sum, and one of the best ways to absolutely guarantee this, no matter of externalities, is to
      double and triple down on the network effects by opening the whole thing up.
    </div>
  </div>
);

export default Page1920;
