import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2122.module.scss'

const Page2122 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/2122_image1.png`}
          width={1920}
          height={1497}
        />
      </div>
      <div className={styles.text1}>
        <span>Wa</span>sh T<span>rad</span>ing <span>t</span>he <span>La</span>pse         
      </div>
      <div className={styles.text2}>
        “Pharma Bro” Martin Shkreli is so yesterday’s news.
        <br /><br />
        But his infamy lives on as one of the most egregious cases in the laundry list of crimes that the cartels running the pharmaceutical industry are guilty of.
        <br /><br />
        It was 2015 when Shkreli, then-Turing Pharmaceuticals CEO jacked up prices of Daraprim, a drug used to treat infections in HIV-positive patients, pregnant women, babies, and other immunocompromised patients.
        <br /><br />
        And in one fell swoop, Daraprim prices skyrocketed by over 55x from $13.50 to $750 a pop. 
        <br /><br />
        $750 a single pill. To the moon, bro. WAGMI. 
        <br /><br />
        Worse, Shkreli schemed to prevent generic pharmaceutical drug manufacturers from competing–after he had hiked the price by nearly 5000%–so he could wring every last bit out of the juicy drug sales.
      </div>
    </div>
  )
}

export default Page2122
