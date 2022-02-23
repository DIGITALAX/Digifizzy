import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page8788.module.scss'

const Page8788 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/8788_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
    <div className={styles.text1}>
      riccardo
    </div>
    <div className={styles.text2}>
      I’ve always seen Modeling as a challenge that I wanted to take on for myself. It's something I always saw myself doing. Even though I've had other interests such as playing soccer and doing a career in medicine, modeling is something that always peaked my interest.
      <br /><br />
      Even though I live across the Hudson in New Jersey, I’ve always seen NYC as a second home. I had so many memorable experiences in this beautiful city! When I was younger every other weekend my grandfather would always take me into the city. With him I would go everywhere exploring the concrete jungle. Whether it be Time Square, Central Park, the Empire State Building, or the World Trade Center we hit every major place in NYC which as a kid seeing it in person was awe-inspiring. It was a new world to me and  To be able to share moments like with my grandfather was awesome. They were the experiences that made me fall in love with this city!
    </div>
    <div className={styles.text3}>
      Beyond modeling I also have interest in becoming a physician one day. With my passion for fitness and health while  growing up, I came to the conclusion that one day I wanted to become a doctor. As a kid I was always fascinated by the intricacies of the human body and it’s mechanics. With my background as an athlete in college, I was drawn by the specialization of orthopedics/sports medicine. Which is what I would like to to do in the far future.
      <br /><br />
      I’m really excited to jump into integrating nfts into my work, because it will give me endless possibilities to work with other creators and designers without any restrictions or “middle man”.
      <br /><br />
      Im really interested in learning about Ethereum 2.0 and the platform web 3 provides.
    </div>
  </div>
)

export default Page8788
