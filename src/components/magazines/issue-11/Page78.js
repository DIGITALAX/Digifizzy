import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page78.module.scss'

const Page78 = () => (
  <div className={styles.wrapper}>
    <div className={styles.line1}></div>
    <div className={styles.line2}></div>
    <div className={styles.line3}></div>
    <div className={styles.line4}></div>

    <div className={styles.circle1}></div>
    <div className={styles.circle2}></div>
    <div className={styles.circle3}></div>
    <div className={styles.circle4}></div>
    <div className={styles.circle5}></div>
    <div className={styles.circle6}></div>
    <div className={styles.circle7}></div>
    <div className={styles.circle8}></div>
    <div className={styles.circle9}></div>
    <div className={styles.circle10}></div>
    <div className={styles.circle11}></div>
    <div className={styles.circle12}></div>

    <div className={styles.image1}>
      <Image
        width={758}
        height={1137}
        src={`${DIGIFIZZY_S3}/11/images/0708_image1.png`}
      />
    </div>

    <div className={styles.text1}>
      Built  On <br />
      Open Source
    </div>
    <div className={styles.text2}>
      オープンソース
    </div>
    <div className={styles.text3}>
      オープンソース
    </div>
    <div className={styles.text4}>
      オープンソース
    </div>
    <div className={styles.text5}>
      オープンソース
    </div>
    <div className={styles.text6}>
      オープンソース
    </div>
    <div className={styles.text7}>
      オープンソース
    </div>
    <div className={styles.text8}>
      70% of the world’s systems are built on open source software.
      <br /><br />
      And if it wasn’t for its community keeping the fires of its fundamental principles alive–and constant building in lockstep with its core precepts–the software industry would never have been 
      <br /><br />
      The goal of open source creators is to gain the widest possible adoption and enable their users to add value without legal or financial encumbrances. 
      <br /><br />
      Early software was, by all means, free as software development was then an academic pursuit. 
      <br /><br />
      By nature, that meant early software itself was open source. The money was then generated from hardware rather than software, and open source software was indeed the norm. After all, closed-source software then, in the 50s, would have meant running the risk of backdoors being used for nefarious reasons, since no-one would have been able to monitor what software then could be doing.
      <br /><br />
      The software industry started to decouple from its hardware-based revenue model in the late 60s. This was coincidentally in part due to lawyers formulating heavily restrictive licensing regimes to fully achieve this. 
    </div>
  </div>
)

export default Page78
