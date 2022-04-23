import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page5152.module.scss';

const Page5152 = () => {
  const [play, setPlay] = useState(false);
  const refAudio = useRef();

  const startAudio = () => {
    refAudio.current.play();
    setPlay(true);
  };

  const pauseAudio = () => {
    refAudio.current.pause();
    setPlay(false);
  };

  console.log('play: ', play);

  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>
        Some individuals just want to be self-sovereign and take control of their own destiny.
        <br />
        <br />
        Ultimately, no central authority is going to provide you a guardrail to lean on and gutter
        when you fall. The cypherpunks didn’t fight for our online freedoms for nothing.
        <br />
        <br />
        It’s cruel, but fair. But it’s exactly this same principle that makes web3 so enticing – the
        prospect of agency coupled with open access to opportunity is indicative of how we ​​wished
        technology was like, rather than the Orwellian shitshow it has morphed into.
        <br />
        <br />
        We’ve never needed web3 and its principles of self-sovereignty more than we do right now.
        <br />
        <br />
        Protecting the sanctity of both calls for integrity – the individuals in the frontlines of
        this emergent movement are called to prove beyond a shadow of a doubt that web3 isn’t just
        WAGMI cringe, but actual far-ranging community engagement and mobilize entire communities
        under the good news of self-sovereignty.
        <br />
        <br />
        We are all witnesses to how these vibratory experimentations take place across web3
        verticals, particularly in segments that allow them greater freedom to innovate and try new
        things out.
      </div>

      <div className={styles.text2}>
        <br />
        <br />
        Web3’s endgame is to magnify the scale of human mobilization without devolving power and
        releasing control to a select handful of ecosystem VIPs.
        <br />
        <br />
        It was never about handing the keys over to yet another bunch of suits.
        <br />
        <br />
        It was always about providing an alternative option. One that values human self-sovereignty
        above that of faceless corporate entities and markets, or above the sovereignty of the
        monolith that is the state–the same one that seeks to enslave us.
        <br />
        <br />
        One thing the VC-come-latelies don’t understand is that this isn’t some fantasy world where
        they’re Jordan Belfort ready to rape and pillage a bizarro version of Wall Street in their
        minds.
        <br />
        <br />
        Web3 has always been about decentralization, unmatched security, true sovereignty of the
        individual, CC0, and taking back agency and control over the data we own.
        <br />
        <br />
        It’s time to take our power, agency, privacy, and dignity back.
        <br />
        <br />
        It’s time for web3.
      </div>
    </div>
  );
};

export default Page5152;
