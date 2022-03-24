import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2930.module.scss'

const Page2930 = () => (
  <div className={styles.wrapper}>
    <video autoPlay muted loop className={styles.video1}>
      <source
        src={`${DIGIFIZZY_S3}/10/videos/2930_video1.mp4`}
        type='video/mp4'
      />
    </video>
    <div className={styles.rect1} />
    <h1>SUSTAINABILITY PIONEERS</h1>
    <img
      src='./magazine/2/images/31_32_image.png'
      className={styles.imageEarth}
    />
    <div className={styles.middleLine1} />
    <div className={styles.middleLine2} />

    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2930_image1.png`}
        width={965}
        height={298}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2930_image2.png`}
        width={903}
        height={298}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2930_image3.png`}
        width={867}
        height={298}
      />
    </div>

    <div className={styles.text1}>
      Practical Sustainability in Highly Asymmetric Times
    </div>
    <div className={styles.text2}>
      The time has come to get serious about breaking free of our dependence on oil, gas, and coal. It will take time, and in the short term there is a very real role to be played by increased production of legacy fuels while we build out the infrastructure for full energy independence. Imagine we were at war, which we are, and the rate of factory output required to support the war effort. 
      <br /><br />
      Decentralized fabrication of semiconductors, transistors, etc —  becomes all the more necessary as location independence is required to move closer to markets, reduce transport costs, and increase proximity 
    </div>
    <div className={styles.text3}>
      to inexpensive sources of renewable energy. LNG terminals can take 3-4 years to build, which if they can’t be realistically fast tracked is great for long term sustainment but fails to deliver immediate relief.
    </div>
    <div className={styles.text4}>
      Solutions that can be in place fully within the horizon of the next 2 years are enough to make a direct difference today because of strategic reserves.  
    </div>
    <div className={styles.text5}>
      Short term capital investment can be aided through advantageous deployment of crypto. Economic impact can be counterbalanced by improved regulatory clarity and a greater embrace of web3 with fewer restrictions, there are abundant opportunities for green energy development driven by proof of work miners and the energy output of legacy blockchains. 
    </div>
    <div className={styles.text6}>
      The greatest impact on energy needs could involve the migration of even greater numbers of people throughout Europe and internationally than what we have already seen in the first two weeks of this conflict, at least for the next 2-3 years. 
    </div>
    <div className={styles.text7}>
      After all, energy availability, use, and costs are very location sensitive. 
    </div>
    <div className={styles.text8}>
      Efforts to concentrate energy production, distribution and savings efforts along the Eastern front, from Finland through the Baltic States, Poland, Hungary, and Romania, to Moldova and even into Ukraine could dramatically alter the 
    </div>
    <div className={styles.text9}>
      vulnerability to shocks in the amount of oil and gas depended on from Russian sources. It might look like a pre-emptive Marshall plan for home and commercial building retrofitting with energy and heating equipment upgrades throughout the former Soviet Bloc.
      <br /><br />
      Afterall, if you don’t have energy independence, then the system that your entire society is founded on suffers from single point of failure shocks.
    </div>
  </div>
)

export default Page2930
