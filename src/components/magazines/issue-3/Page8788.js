import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './page8788.module.scss'

const Page8788 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1} />
    <div className={styles.image2} />
    <img src='/magazine/3/images/87_88/image1.png' className={styles.image3} />
    <div className={styles.image4}>
      <video className={styles.image5} muted loop autoPlay>
        <source src='./magazine/3/images/87_88/video1.mp4' type='video/mp4' />
      </video>
    </div>
    <div className={styles.image6} />
    <Link href='https://github.com/XtraCube'>
      <a target='_blank'>
        <p className={styles.text1}>XTRACUBE</p>
      </a>
    </Link>
    <img src='/magazine/3/images/87_88/image2.png' className={styles.image7} />
    <div className={styles.image8} />
    <p className={styles.text2}>I've been modding since around November 2020</p>
    <p className={styles.text3}>and started because 1) I had an interest in programming | 2) I saw mods on youtube and wanted to make some myself.
      <br /><br />
      I'm not really sure where I want to go in terms of modding. I want to try keeping AOU alive, and I wouldn't mind making some more money off of mods if I ever get back into that.
    </p>
    <p className={styles.text4}>Among Us Spectators Feature for Ghosts; Scan the Entire Crew</p>
    <p className={styles.text5}>THE COLOR SWAP</p>
    <p className={styles.text6}>COOLIO</p>
    <p className={styles.text7}>COOLIO</p>
    <p className={styles.text8}>COOLIO</p>
    <p className={styles.text9}>XTRACUBE Mod Featured by De Nogla!</p>
    <img src='/magazine/3/images/87_88/image3.gif' className={styles.image9} />
    <img src='/magazine/3/images/87_88/image4.gif' className={styles.image15} />
    <div className={styles.image10}>
      <iframe width='496' height='236' src='https://www.youtube.com/embed/wIwCeexQoxQ' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' />
    </div>
    <img src='/magazine/3/images/87_88/image4.png' className={styles.image12} />
    <img src='/magazine/3/images/87_88/image4.png' className={styles.image13} />
    <img src='/magazine/3/images/87_88/image4.png' className={styles.image14} />
  </div>
)

export default Page8788
