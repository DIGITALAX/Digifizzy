import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { DIGIFIZZY_S3 } from '@constants/urls';
import NoUnlockPage from '../common/NoUnlockPage';
import styles from './page107108.module.scss';

const Page107108 = () => {
  const router = useRouter();
  const { slug } = router.query;
  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId;
  const { contentUnlocked } = useSelector((state) => state.global.toJS());

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src={`${DIGIFIZZY_S3}/12/images/103104_back.png`} width={960} height={1497} />
      </div>
      <div className={styles.text1}>How’s the economy doing?</div>
      <div className={styles.text2}>
        That question, is misleading.
        <br />
        <br />
        It’s a misunderstanding of the implications of an otherwise obvious truth— that we are in a
        period of tremendous historic volatility across economies and societies, is obvious. What’s
        not so clear is which direction all of the arrows are pointing.
        <br />
        <br />
        Some, if we subset correctly, are clearly heading down, fast. Others, like inflation, are
        heading up, but with results that are negative for everyone. In a paradigm shift like this,
        however, there are real winners. And the “which economy” matters entirely. Web3 is actively
        reshoring self sovereign production capacity at all scales, from individual to national.
        Locally distributed throughout the globe.
        <br />
        <br />
        It is the interconnective patch work set of secure scalable conduits which replaces the
        currently locked up, slowed down and clogged up, previous era of globalised supply chains
        with concentrated centralised factory production that had gotten cozy mass producing low
        quality crap under tight regimes of tyranny.
        <br />
        <br />A smarter take on what’s happening underneath all of the media noise about all of the
        economies that we participate in, is that baseline economic demand is far outpacing
        production capacity. And this is going to be true for years as hundreds of billions of
        dollars, euros and equivalent are poured like cement for reinforced steel structures into
        catching up with all of that demand.
        <br />
        <br />
        There’s always demand for more capital, more thread and more innovative production capacity.
        The YCs will tell you to hide your sister, hide your wife, cut spending to the bone and
        beyond so that you can survive the ravaging bears.
        <br />
        <br />
        But in these economies, survival isn’t enough. The Boomers won’t unretire, Russia’s
        isolation won’t be undone for a long time, the Chinese will take years to figure out which
        direction they’re heading, and the post pandemic rebound means populations everywhere remain
        entirely unwilling to be shut in again.
        <br />
        <br />
        Markets are hungry for goods that are failing to reach them.
        <br />
        <br />
        All of this volatility means delta, and delta means nothing over than expansive opportunity
        waiting to be recognised.
        <br />
        <br />
        Web3 know-how gives us the tool kit and the roadmap for how to actually revamp production
        and gain capital independence by meeting the otherwise unquenchable demand.
      </div>
      <div className={styles.text3}>- Emma-Jane MacKinnon-Lee</div>

      {!contentUnlocked && <NoUnlockPage issueId={issueId} />}
    </div>
  );
};

export default Page107108;
