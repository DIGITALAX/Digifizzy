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

  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>
        <br />
        <br />
        The Poly Network ($611m): In 2021, $611m worth of crypto assets were stolen from Poly
        Network and transferred to three separate accounts. This includes $85m USDC, $253m worth of
        Binance Smart Chain tokens and $273m worth of Ethereum. The hacker could access the smart
        contract platform by unlocking the tokens on the platform protocol and not locking the
        tokens corresponding to them on other blockchain platforms.
        <br />
        <br />
        However, after a public plea to the hacker, a promise of $500,000 and a job as a chief
        security advisor, the hacker returned all but $33m of the stolen crypto assets, which were
        blacklisted by Tether due to the attack.
        <br />
        <br />
        The Ronin Network heist ($540m): Regarded by crypto analysts as the second biggest crypto
        theft of all time, 25.5m USDC and 173,600 Ether tokens valued (at the time of the theft) at
        $540m were lost to a hacker in March 2022. As a result of the theft, Ronin blockchain’s coin, Ron, crashed by 20%, while AXS, Axie
        Infinity’s token, crashed by 6%. According to reports, the hacker compromised one of the private keys
        to Axie Infinity in order to authenticate the transactions.
        <br />
        <br />
        Coincheck hack ($534m): In January 2018, Coincheck, a Japanese exchange platform, lost $534m
        in crypto assets (523 million NEM) to cyberfraud. The direct effect of this loss was felt
        when NEM crashed by 11%, Bitcoin by 3.4%, and Ripple coin by 9.9% within 24 hours of the
        hack.
        <br />
        <br />
        This hack was caused by the storage of the crypto assets in an internet-linked crypto
        wallet, which made it porous to hacks. As a result, a self-regulatory body was formed in
        Japan by merging sixteen crypto exchange platforms in the country to prevent future
        breaches.
        <br />
        <br />
        Mt. Gox hack ($480m): This hack remains the biggest Bitcoin theft to date. In 2014, about
        850,000 Bitcoins, accounting for 7% of available Bitcoin at the time, were stolen from Mt.
        Gox. Created in 2010, the Japanese exchange platform was in charge of about 70% of Bitcoin
        transactions at the time. As a result of the theft, the platform filed for bankruptcy in the
        same year, leading to its collapse.
        <br />
        <br />
        KuCoin ($285m): KuCoin, a cryptocurrency exchange platform based in Singapore, announced the
        theft of $285m of cryptocurrency in 2020. According to Chainalysis, this includes 1,008 BTC,
        11,543 Ether, $147m worth of ERC20, and $87m worth of Stellar tokens.
        <br />
        <br />
        The hack was similar to the Coincheck theft. The hacker accessed the crypto assets in
        KuCoin’s internet-linked wallets, referred to as ‘hot wallets.’ However, KuCoin recovered
        most of its stolen tokens and eventually reimbursed all its customers. KuCoin first
        recovered 78%, whilst their insurance funded the remainder.
        <br />
        <br />
        Let these high-profile hacks serve as a reminder of how critical securing the industry –
        crypto, web3, and the open metaverse, altogether – is to self-sovereignty as individuals in
        the space.
        <br />
        <br />
        Otherwise, web3 will be yet another tech bro pipe dream, just as the hippies of yesteryear
        and their utopian world has proven to be. Not this way.
      </div>
      <div className={styles.image}>
        <Image src={`${DIGIFIZZY_S3}/13/images/4950_right.png`} width={960} height={1497} />
      </div>
    </div>
  );
};

export default Page5152;
