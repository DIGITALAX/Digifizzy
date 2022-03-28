import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page0910.module.scss'

const Page0910 = () => (
  <div className={styles.wrapper}>
    <div className={styles.line1}></div>
    <div className={styles.line2}></div>

    <div className={styles.circle1}></div>
    <div className={styles.circle2}></div>
    <div className={styles.circle3}></div>

    <div className={styles.text1}>オープンソース</div>
    <div className={styles.text2}>オープンソース</div>
    <div className={styles.text3}>オープンソース</div>
    <div className={styles.text4}>オープンソース</div>
    <div className={styles.text5}>オープンソース</div>
    <div className={styles.text6}>オープンソース</div>
    <div className={styles.text7}>
      By the time the 70s rolled in, the software industry was charging for licenses across hardware and software companies. 
      <br /><br />
      Legal restrictions were carried out with the full brunt of the law using trademark, copyright, and intellectual property law–eventually giving birth to an entirely new problem of software piracy.      
    </div>
    <div className={styles.text8}>
      However, open source was actively kept alive through the Bulletin Board Systems (BBS) of 80s renown. Freeware proliferated during the 80s, as Usenet provided a fantastic collaboration tool for developers, programmers, and modders then, much like the Discords of today. It was in 1985 when Richard Stallman released the GNU General Public License, which is still used as a standard for companies using free software as their main business to this very day. It was also when he established the GNU Project and the Free Software Foundation, a non-profit furthering the ideals of the free software movement.       
    </div>
    <div className={styles.circle4}></div>
  </div>
)

export default Page0910
