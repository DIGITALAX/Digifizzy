import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page78.module.scss'

const Page78 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/0708_image1.png`}
        width={842}
        height={832}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/0708_image2.png`}
        width={356}
        height={456}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/0708_image3.png`}
        width={125}
        height={125}
      />
    </div>
    <div className={styles.image4}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/0708_image3.png`}
        width={125}
        height={125}
      />
    </div>
    <div className={styles.image5}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/0708_image3.png`}
        width={125}
        height={125}
      />
    </div>

    <div className={styles.text1}>
      Undercutting Corporates 
    </div>
    <div className={styles.text2}>
      with CCO
    </div>
    <div className={styles.text3}>
      Peezy R.
    </div>
    <div className={styles.text4}>
      Much has been said about how the decades-long corporate stranglehold in tech. 
      <br /><br />
      And timeless as the bickering and brouhaha between centralization and decentralization, one thing remains clear: Big Tech is giving no quarter in its fight to retain its apex predatory position.
      <br /><br />
      As the revolutionary forces of web3 begin to shine a light out of the walled wastelands inflicted on the industry by its erstwhile darlings, there is one foundational and guiding principle underpinning web3 an age full of charlatans, grifters, and pretenders all looking to get their beaks wet by hopping on its coattails: creative commons, or CC0.
      <br /><br />
      CC0 is among the foundational tools of web3. It is what practically 
    </div>
    <div className={styles.text5}>
      guarantees the sanctity of web3 by keeping it open for everyone to participate in–which is practically antithetical to the established order of walled gardens and closed, censored, (or carefully-curated ecosystems, take your pick) with exorbitant barriers to entry by the en vogue startup du jour.
      <br /><br />
      It’s not without its flaws, and the apprehension many creators feel as they make their way through web3 is palpable considering some of the experiences they’ve had with legacy fashion actors–the same ones worming their way into the good graces of web3.
    </div>

    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>
    
    <div className={styles.line1}></div>
    <div className={styles.line2}></div>
    <div className={styles.line3}></div>
    <div className={styles.line4}></div>
  </div>
)

export default Page78
