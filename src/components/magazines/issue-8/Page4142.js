import React from 'react'
import Image from 'next/image'
import styles from './page4142.module.scss'

const Page4142 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image src='/magazine/8/images/4142_back.jpg' width={1920} height={1497} />
    </div>
    <div className={styles.image1}>
      <Image src='/magazine/8/images/4142_image1.png' width={518} height={76} />
    </div>
    <div className={styles.text1}>Throughout the Metaverse</div>
    <a href='https://www.instagram.com/cooltrede/' target='_blank' rel='noreferrer'>
      <div className={styles.text4}>Aleksandra Cooltrede</div>
    </a>
    <div className={styles.text5}>
      My real name Aleksandra and I am a 3D artist focused on fashion. Right now I am based in
      France but originally I am ftom Russia. I came from the fashion industry and am a professional
      designer with a Bachelor degree which I received in Italy where I used to live and work
      arround 7 years. I will not be original by saying that I was always curious about fashion from
      my childhood but it’s true. My interest in fashion is not about trends and and "what’s hot" ,
      I ike to study it, let’s say as "science". For me, fashion is a display of society, it
      reflects all the global, cultural and political events. I think exactly that fact brought me
      from being a fashion designer into the 3D world.
    </div>
  </div>
)

export default Page4142
