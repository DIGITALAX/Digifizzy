import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page8182.module.scss'

const Page8182 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/8182_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>

    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>

    <div className={styles.text1Shadow}>
      The Open Library
    </div>
    <div className={styles.text1}>
      The Open Library
    </div>
    <div className={styles.text2}>
      “Information is power. But like all power, there are those who want to keep it for themselves.” 
      <br /><br />
      - Guerrilla Open Access Manifesto, 2008
    </div>
    <div className={styles.text3}>
      Nine years ago, we remember a wunderkind, a true forefather of web3, a resolute ideologist and advocate for the free transfer of information who refused to buckle in the face of pressure from the United States Federal Government. 
      <br /><br />
      Aaron Swartz, one of the uncompromising proponents of liberation of information, was caught up in the stranglehold of the cartelized publishers that control its flow, reproduction, and monetization among the suits that prowl.
      <br /><br />
      Swartz co-authored the Guerrilla Open Access Manifesto in 2008, which called for activists to liberate information hitherto tightly controlled by intellectual property syndicates. 
      <br /><br />
      Swartz scoured the paywall-infested landmines that centralized publishers put up to line the pockets of the suits that run them. All at the price of the entirety of humanity’s historical, cultural, and scientific heritage.
      <br /><br />
      The Manifesto called for open access to this information as a fundamental building block of human rights. 
      <br /><br />
      And nine years after his tragic passing–and as web3 evolves–more and more scientists share the same view. 
      <br /><br />
      Why should peers pay a service to access colleagues’ works? Much more so, if it was in the interest of the development of society?      
    </div>
    <div className={styles.text4}>
      Nine years after, Aaron Swartz and the same Big Tech names and corporates are realigning their strategies in a digital arms race for content.
      <br /><br />
      This time, they’re not just viciously sending their murder of lawyers and their cease-and-desist orders to ruthlessly suppress the free transfer of information and have individual creators pay the house for the privilege of accessing such information.
      <br /><br />
      It’s like a page straight out of 1984. The Ministry of Truth is alive and well and controls each and everyone’s access to information that should arguably be liberated. Not from their creators but from the syndicates and racketeers that Swartz sought to free from their grasp.
      <br /><br />
      But perhaps more importantly, Swartz’s most memorable fight was his campaign against the Stop Online Piracy Act, known in industry circles as SOPA.
      <br /><br />
      SOPA was an act that would have enabled the government (and their cartel buddies) to stop companies in the United States from providing their services to said sites. It would have also enabled them to discourage U.S. internet users from restricting access.
      <br /><br />
      Worse, SOPA would have penalized site operators for user-generated content on their platform, and they can be sued for “facilitating” copyright infringement–the verbiage of which verged towards virtual dictatorial control of media platforms and effectively promoting censorship. That’s another can of worms for another day.
      <br /><br />
      Nevertheless, Swartz warned about SOPA as a prelude to an age of unbridled, blatant censorship on the Internet. 
      <br /><br />
      And now, in 2022, where creators are de-platformed and robbed of their livelihoods for the merest suggestion of impropriety (or cancel culture altogether), Swartz was Nostradamic in his prophecy. 
    </div>
  </div>
)

export default Page8182
