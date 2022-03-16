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

    <div className={styles.climateText1}>
      Nuclear Fusion
    </div>
    <div className={styles.climateText2}>
      Nuclear Fusion
    </div>
    <div className={styles.climateText3}>
      Nuclear Fusion
    </div>
    <div className={styles.climateText4}>
      Nuclear Fusion
    </div>
    <div className={styles.climateText5}>
      Nuclear Fusion
    </div>
    <div className={styles.climateText6}>
      Nuclear Fusion
    </div>
    
    <div className={styles.text1}>
      Geopolitical conflict, corporate misconduct, the pandemic, economic crisis, the climate crisis, and whinging about NFTs all probably seem like they are disconnected from each other, making for a perfect if a bit random and unexpected storm of rage towards a fast growing new industry. After all, isn’t this what always happens when new technologies rise up and displace the old?
      <br /><br />
      The origins of power and conflicts between them ultimately come down to the most precious resource of any economic system. The energy to fuel, feed, clothe, shelter, and move every person and mechanism within them. And of course, as always, everything is downstream from economics.
      <br /><br />
      The seemingly widespread and far oversampled cultural backlash against Web3 and NFTs is actual a combination of symptoms from the loss of trust in the old 20th century 
    </div>
    <div className={styles.text2}>
      institutions of centralized banker-industrialism and corporatist socialism that have long since proven to have failed all but those who do everything they can to prevent their loss of control.
    </div>
    <div className={styles.text3}>
      The disastrous damage oil, coal, and gas cause to our coastlines, the air we breathe, natural habitats, acidification of the oceans and related killoff of countless species within them, the spread of wildfires, droughts, floods, 
    </div>
    <div className={styles.text4}>
      and other extreme climatic events, the spread of a whole host of cancers, other chronic and terminal illnesses thanks to the processing, combustion, and byproducts from their production is self-evident to all who don’t choose instead to look away. 
    </div>
    <div className={styles.text5}>
      But more obscured is the full extent of catastrophic impact due to the entrenched ways a systemic addiction to hydrocarbons supplies nested hierarchies of tyrants the world over with the capital and control needed to stay always one step ahead of any who would remove and replace them in power. When considering that 80-90% of health costs have been shown to come from what is known as Secondary, or Social, 
    </div>
    <div className={styles.text6}>
      Determinants of Health (SDoH), it starts to click that maybe living in a constant state of precarity and constraint thanks to never knowing when those in 
    </div>
    <div className={styles.text7}>
      power might deem our freedom of movement, association, belief, self-determination, and thought a threat to their interests.
    </div>
    <div className={styles.text8}>
      The simple fact, verifiable by anyone with basic math and physics skills, is that nuclear energy technologies are able to produce far, far more energy per each amount of matter and time involved than any other source we have today. That’s going to be true for a relatively long time, particularly at the slow rate of innovation in the hard sciences that we’ve seen in recent decades.
      <br /><br />
      Well, you might have guessed by now that the key to advancing the diversification of energy production, to quickly reducing our reliance on the hydrocarbons ravaging climate, humanity, and nature, and countering the dangerous over-concentration of capital and power, is… in a word, Web3. 
    </div>
  </div>
)

export default Page2930
