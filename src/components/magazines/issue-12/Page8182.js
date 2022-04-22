import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page8182.module.scss';

const Page8182 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src={`${DIGIFIZZY_S3}/12/images/8182_back.png`} width={1920} height={1497} />
    </div>

    <a href="https://twitter.com/nounsprophouse" target="_blank">
      <div className={styles.text1}>
        Spread All the Nouns <br />
        Prop House
      </div>
    </a>
    <div className={styles.rect1} />
    <div className={styles.text2}>
      One thing’s for sure, over the past year, PFP projects have proven themselves to be pretty
      incredible on-chain funding mechanisms for securing well capitalised treasuries. Some of the
      biggest PFP projects have amassed tens of millions in sometimes just a matter of minutes.
      <br />
      <br />
      Some, like Nouns, have done it all in the public domain and proven a consistent ability to
      continue pulling in more overtime.
      <br />
      <br />
      But, what no one tells you about hitting it big (in terms of capital), it’s one thing to be
      able to store large amounts in a treasury, it’s another to coordinate how to spend it well, so
      that the amount continues to contribute to community growth and the core principles of the
      project overtime.
      <br />
      <br />
      For Nouns, that is where Prop House comes in. It’s an on-chain funding distribution experiment
      whereby anyone can submit a proposal for a “nounish” idea and then have this be voted on by
      members of the Nouns DAO. The top three proposals with the highest votes receive funding.
      <br />
      <br />
      The funding rounds are on-going, intended to broaden the appeal and reach of the community to
      countless new comers. It’s an interesting approach to take on the challenge of sufficient
      incentives to move beyond just coin voting and ensure that communities don’t decay into
      increasingly sclerotic risk adverse insider reinforcement rings.
      <br />
      <br />
      Vibrant and heterogenous hyper engaged activity is essential for the continued vitality of any
      community, and the intention behind Prop House is to cultivate as much of that as possible.
      <br />
      <br />
      We could say, we will see how well it works? But that is not in keeping with CC0 and broader
      web3 DIY ethics. Rather than sitting back and finding out how things play out, put on your
      virtual sunglasses and jump into the fray.
      <br />
      <br />
      Submit something to Prop House and join the community!
    </div>
    <div className={styles.text3}>
      With this issue honing in on Self Sovereignty, it only made sense to include a historical
      lookback at some of the web2 platforms that have played an outsized role for good and ill in
      the spread of free and novel information in a peer 2 peer way.
      <br />
      <br />
      4chan and ProPublica, although radically different from each other, both exhibit some very
      noteworthy traits. Well known as a troll infested mess, 4chan also gets credit as the place
      where Anonymous supposedly started, and, as one of the earliest and strongest drivers of
      countless multitudes of some of the most influential, for better and worse, memes to dominate
      the internet cultural landscape— Pepe and beyond.
      <br />
      <br />
      In contrast, ProPublica strives to “produce investigative journalism in the public interest”.
      What that often means is being on the front lines of getting information behind fire walls and
      other censorship regimes to populations often starved for comparitatively independent cross
      referenced and more trustable sources of information than whatever they may have access to
      otherwise.
      <br />
      <br />
      It’s a shame that none have been able to fully live up to the best of their early intentions
      but that really breaks down to the same systemic entropy points of any grande social
      experiment— what are the incentives?
    </div>
    <div className={styles.text4}>some of the most historic 4chan + pp posts</div>

    <a
      href="https://www.propublica.org/article/judge-wont-free-michigan-teenager-sent-to-juvenile-detention-after-not-doing-online-schoolwork"
      target="_blank"
    >
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/8182_image1.png`} width={292} height={236} />
      </div>
    </a>

    <a
      href="https://www.gq.com/story/exclusive-we-talk-to-the-creepy-man-behind-the-canceled-taylor-swift-radio-contest"
      target="_blank"
    >
      <div className={styles.image2}>
        <Image src={`${DIGIFIZZY_S3}/12/images/8182_image2.png`} width={292} height={236} />
      </div>
    </a>

    <a href="http://www.youtube.com/watch?v=YbaTur4A1OU" target="_blank">
      <div className={styles.image3}>
        <Image src={`${DIGIFIZZY_S3}/12/images/8182_image3.png`} width={292} height={236} />
      </div>
    </a>

    <a
      href="https://www.propublica.org/article/the-secret-irs-files-trove-of-never-before-seen-records-reveal-how-the-wealthiest-avoid-income-tax"
      target="_blank"
    >
      <div className={styles.image4}>
        <Image src={`${DIGIFIZZY_S3}/12/images/8182_image4.png`} width={292} height={236} />
      </div>
    </a>

    <a href="https://youtu.be/EwTZ2xpQwpA" target="_blank">
      <div className={styles.image5}>
        <Image src={`${DIGIFIZZY_S3}/12/images/8182_image5.png`} width={292} height={236} />
      </div>
    </a>
  </div>
);

export default Page8182;
