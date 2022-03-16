import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page4950.module.scss'

const Page4950 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/4950_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>

    <div className={styles.rect3}></div>
    <div className={styles.rect4}></div>
    <div className={styles.rect5}></div>
    <div className={styles.rect6}></div>
    <div className={styles.rect7}></div>
    <div className={styles.rect8}></div>
    <div className={styles.rect9}></div>

    <div className={styles.circle1}></div>
    <div className={styles.circle2}></div>
    <div className={styles.circle3}></div>
    <div className={styles.circle4}></div>
    <div className={styles.circle5}></div>
    <div className={styles.circle6}></div>
    <div className={styles.circle7}></div>
    <div className={styles.circle8}></div>

    <div className={styles.text1}>
      High Stakes Poker: How it's Played and Lessons Learned   
    </div>
    
    <div className={styles.text2}>
      To the consummate gambler, there is no such thing as free will–or dumb luck, for that matter.
      <br /><br />
      Because quite frankly, the game of poker–that is, the Texas No-Limit Hold'Em variety–can be likened to an open-ended sandbox game that represents the sum total of a player's bets. 
      <br /><br />
      Poker is ultimately a game of taking calculated risks under uncertain conditions wherein the reward hopefully is commensurate to the risks a player takes to get to that point.
      <br /><br />
      Suffice to say, when professional players sit across from each other at the same poker table, the game is elevated to practically a science–pros don't gamble. 
      <br /><br />
      Regardless of your skill level at poker or whether or not you care for it at all, one thing is for sure. Essentially, all individuals think like poker players when the chips are down or when it's time to make a big decision (whatever that may take form in).
    </div>

  </div>
)

export default Page4950
