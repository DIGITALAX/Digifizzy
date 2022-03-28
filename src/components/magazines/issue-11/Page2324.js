import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2324.module.scss'

const Page2324 = () => (
  <div className={styles.wrapper}>
    <div className={styles.rect1}></div>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2324_image1.png`}
        width={1920}
        height={1178}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2324_image2.png`}
        width={807}
        height={1497}
      />
    </div>

    <div className={styles.text1}>
      Through this virtual dictatorial control of Daraprim distribution, Shkreli prevented generic pharmaceutical manufacturers from gaining access to the drug, which they needed to conduct testing–so that more individuals could afford it. He also prevented said manufacturers from obtaining the active pharmaceutical ingredient to create 
    </div>
    <div className={styles.text2}>
      Daraprim through a complex maze of lawyers, lobbyists, and patent thicket landmines that the Big Pharma Cartel lay out for anyone and everyone 
    </div>
    <div className={styles.text3}>
      else seeking to compete. Even if it were for a good cause. Shkreli wasn’t 
    </div>
    <div className={styles.text4}>
      the worst, and he won’t be the last.
    </div>
    <div className={styles.text5}>
      The Sackler Family of Purdue Pharma and Oxycontin “fame” say “hi” with their $10 billion generated from global opioid sales.
    </div>
    <div className={styles.text6}>
      Shkreli, the Sacklers, et al are indicative of the lengths that Big Pharma will go to break up competition, deny access to life-saving medicines, and keep lining up their pockets and going to the pay window for some more. 
    </div>
    <div className={styles.text7}>
      More importantly, such acts are indicative of the sorry state of how patents have been so misused by not just Big Pharma, but most every cartel that runs the industry. 
    </div>
    
  </div>
)

export default Page2324
