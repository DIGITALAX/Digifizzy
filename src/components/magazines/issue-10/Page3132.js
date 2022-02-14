import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page3132.module.scss'

const Page3132 = () => (
  <div className={styles.wrapper}>
    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>

    <div className={styles.line1}></div>
    <div className={styles.line2}></div>
    <div className={styles.line3}></div>
    <div className={styles.line4}></div>
    <div className={styles.line5}></div>

    <div
      className={styles.imagePath}
    >
      <Image
        src='/magazine/9/images/3132_path.png'
        width={1068}
        height={957}
      />
    </div>

    <div
      className={styles.imageDots}
    >
      <Image
        src='/magazine/9/images/3132_dots.png'
        width={369}
        height={412}
      />
    </div>

    <div
      className={styles.imageCircles1}
    >
      <Image
        src='/magazine/9/images/3132_circles.png'
        width={47}
        height={227}
      />
    </div>
    <div
      className={styles.imageCircles2}
    >
      <Image
        src='/magazine/9/images/3132_circles.png'
        width={47}
        height={227}
      />
    </div>
    <div
      className={styles.imageCircles3}
    >
      <Image
        src='/magazine/9/images/3132_circles.png'
        width={47}
        height={227}
      />
    </div>

    <div
      className={styles.imageTriangles}
    >
      <Image
        src='/magazine/9/images/3132_triangles.png'
        width={89}
        height={112}
      />
    </div>

    <a
      href='https://makersplace.com/louloujoao/drops/muse-881/'
      target='_blank'
    >
      <video autoPlay muted loop className={[styles.video1, styles.gradient].join(' ')}>
        <source src='/magazine/9/videos/3132_video1.mp4' type='video/mp4' />
      </video>
    </a>
    <a
      href='https://superrare.com/artwork-v2/glitchy-night--31566'
      target='_blank'
    >
      <video autoPlay muted loop className={[styles.video2, styles.gradient].join(' ')}>
        <source src='/magazine/9/videos/3132_video2.mp4' type='video/mp4' />
      </video>
    </a>

    <a
      href='https://superrare.com/artwork-v2/kings-of-the-grassland-31211'
      target='_blank'
    >
      <video autoPlay muted loop className={[styles.video3, styles.gradient].join(' ')}>
        <source src='/magazine/9/videos/3132_video3.mp4' type='video/mp4' />
      </video>
    </a>

    <a
      className={[styles.image1, styles.gradient].join(' ')}
      href='https://foundation.app/@arnaudmontagard/ferrytale/3'
      target='_blank'
    >
      <Image
        src='/magazine/9/images/3132_image1.jpg'
        width={725}
        height={544}
      />
    </a>
    <a
      className={[styles.image2, styles.gradient].join(' ')}
      href='https://knownorigin.io/gallery/6122000-fern-void'
      target='_blank'
    >
      <Image
        src='/magazine/9/images/3132_image2.jpg'
        width={325}
        height={325}
      />
    </a>
    <a
      className={[styles.image3, styles.gradient].join(' ')}
      href='https://foundation.app/@NeuralBricolage/gancomic/3'
      target='_blank'
    >
      <Image
        src='/magazine/9/images/3132_image3.jpg'
        width={408}
        height={442}
      />
    </a>

    <div className={styles.text1}>
      Crypto Art 
    </div>
    <div className={styles.text2}>
      Hall of 
    </div>
    <div className={styles.text3}>
      Fame
    </div>
    <div className={styles.text4}>
      Jan 15th 2022
    </div>
    <div className={styles.text5}>
      Loulou João
    </div>
    <div className={styles.text6}>
      A muse amongst ruins.
    </div>

    <div className={styles.text7}>
      Arnaud Montagard
    </div>
    <div className={styles.text8}>
      Dec 7th 2021
    </div>
    <div className={styles.text9}>
      Ferry Tale #3
    </div>

    <div className={styles.text10}>
      Glitchy Night
    </div>
    <div className={styles.text11}>
      Glitchy Night
    </div>
    <div className={styles.text12}>
      caravaggio
    </div>
    <div className={styles.text13}>
      Jan 11th 2021
    </div>

    <div className={styles.text14}>
      Fern Void
    </div>
    <div className={styles.text15}>
      Patrick Henry 
    </div>
    <div className={styles.text16}>
      Jan 15th 2022
    </div>

    <div className={styles.text17}>
      Jan 11th 2022
    </div>
    <div className={styles.text18}>
      helena sarin
    </div>
    <div className={styles.text19}>
      Original Sin: It Could Be Heaven It Could Be Hell
    </div>

    <div className={styles.text20}>
      Kings of the Grassland
    </div>
    <div className={styles.text21}>
      17th Dec 2021
    </div>
    <div className={styles.text22}>
      Ryan D Anderson
    </div>
    <div className={styles.text23}>
      MAKERS
    </div>
    <div className={styles.text24}>
      MAKERS
    </div>
    <div className={styles.text25}>
      MAKERS
    </div>
    <div className={styles.text26}>
      MAKERS
    </div>
    <div className={styles.text27}>
      MAKERS
    </div>
    <div className={styles.text28}>
      MAKERS
    </div>
    <div className={styles.text29}>
      MAKERS
    </div>
    <div className={styles.text30}>
      MAKERS
    </div>
    <div className={styles.text31}>
      MAKERS
    </div>
  </div>
)

export default Page3132
