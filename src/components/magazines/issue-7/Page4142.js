import React from 'react'
import Image from 'next/image'
import styles from './page4142.module.scss'

const Page4142 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground1}>
      <Image
        src='/magazine/7/images/4142_background1.jpg'
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.imageBackground2}>
      <Image
        src='/magazine/7/images/4142_background2.jpg'
        width={960}
        height={1497}
      />
    </div>

    <div className={styles.image1}>
      <Image
        src='/magazine/7/images/4142_image1.png'
        width={518}
        height={76}
      />
    </div>

    <div className={styles.text1}>
      Throughout the Metaverse
    </div>
    <a href='https://www.instagram.com/daniel_de_klawn/' target='_blank' rel='noreferrer'>
      <div className={styles.text2}>
        Daniel De Klawn
      </div>
    </a>
    <div className={styles.text3}>
      GLGP is a collection of exquisite items, designed by Daniel De Klawn. A combination of the limitless possibilities of procedural texturing in Blender and the unrivaled beauty of the female body. An invariable detail of each work is the inscriptions made in a unique font, developed by the author.  These inscriptions are the first incarnations of a new style called Calligrosymbolism. The first release of #Q_73 band.
      <br /><br />
      Q_73 is an organized art group. This band is made up of handpicked artists from the Quazar community. Our goal is to create provocative and extraordinary projects that will change the view of the average person on the usual things.
    </div>
    <a href='https://www.instagram.com/konni.violet/' target='_blank' rel='noreferrer'>
      <div className={styles.text4}>
        Konni Violet
      </div>
    </a>
    <div className={styles.text5}>
      XDCG is a cultural and creative company that creates virtual humans and characters.
    </div>
  </div>
)

export default Page4142
