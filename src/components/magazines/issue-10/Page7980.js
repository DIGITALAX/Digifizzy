import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page7980.module.scss'

const Page7980 = () => (
  <div className={styles.wrapper}>
    <video muted loop autoPlay className={styles.background}>
      <source src='/magazine/9/videos/7980_video1.mp4' type='video/mp4' />
    </video>
    <div className={styles.rect1}></div>
    <div className={styles.image1}>
      <Image
        src='/magazine/10/images/7980_image1.jpg'
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.text1}>
      Gatekeeper Gardens
    </div>
    <div className={styles.text2}>
      Sifting through the web2 weeds— spotlighting stories from the walled gardens where they love to tangle and lurk. 
    </div>
    <div className={styles.text3}>
      Microsoft.
    </div>
    <div className={styles.text4}>
      Low and behold, Microsoft is at it again. Despite all of the years pretending to make a shift towards Open Source when the survival of their company depended on it, even going so far to purchase Github for $7.5 billion (Hoping to gain the trust of the core open source developer community), now they are back at their old ways. Are the most recent headlines really that much of a surprise? Microsoft is making it nearly impossible for consumers to remove their new edge browser or even just simply swap it out as a default for others like Chrome, Firefox and more.
      <br /><br />
      It may not seem like such a big deal to some, but it really comes down to control over what you can and can’t do with the machines that you own. It’s even scarier when you realise that Microsoft owns the largest chunk of the gaming hardware market, and, they just recently acquired Activision under the pretense of making a big metaverse play— but...it’s just another ploy to lockdown more of the gaming supply lines and everyone’s access to it.
    </div>
    <div className={styles.text5}>
      The first antitrust charges were brought against Microsoft and Bill back in 1998 when Microsoft was accussed of making it exceptionally difficult for consumers to install competing software on computers operated by Windows. After the decision against them in 2001, they had a major reputation problem on their hands as well as facing intense competition from other players in the market, including a resurgent Apple.
      <br /><br />
      As the first decade of the 21st century played out, a shift towards a greater embrace of open source in their marketing began to gain greater favour as the only way to keep Microsoft relevant in developer and fast scaling start     </div>
    <div className={styles.text6}>
      up communities.   
      <br /><br />
      Through significantly more spending dedicated to co-op open sourced projects, to embrace a standardisation of more functional Javascript, and, becoming more of a comprehensive cloud based company, by the time 2015 rolled around it looked like Microsoft had completed an expected and long overdue total transformation. 
      <br /><br />
      A few short years turn of the clock later and here we are again. Microsoft is racing towards monopoly control of any small segment of the market they can. How much it conflicts with anything open source, open metaverse, decentralised and self sovereign be damned. 
    </div>
    <div className={styles.text7}>
      Destroy the wall
    </div>
    
    <a
      href='https://www.instagram.com/triangleloft/'
      target='_blank'
    >
      <div className={styles.text8}>
        Triangle Loft
      </div>
    </a>

    <div className={styles.text9}>
      Real estate in nyc is renown as one of the most sought after symbols of clout, access, status and the capacity to attract wealth. but, it isn’t just the shape of your walls that count. LOCATION, LOCATION, LOCATION... YES! 
      <br /><br />
      But also, kind of cliche on its own. 
      <br /><br />
      The real value of your boxy assets is in what they enable to pass through them. What do they contain, create, and evevate. 
      <br /><br />
      for so many space purveyors and pioneers, in this city, and others even approximately like it, the convenient pull of corporate transactions are far less reliable post pandemic than they ever even appeared to be before. and, are fading even in the ability to seem appealing when compared to the more creative, immersive and generative hybrid digital communities that old corporate model forces you to pass up.
    </div>

    <div className={styles.text10}>
      triangle loft is situated in a prime location in the meatpacking district and is actively exploring that leading edge of a transition from the glitz and glamour of the old scene to defining the new. 
      <br /><br />
      from fizzy nft brunches to quaint old world meets new gallery display evenings, becoming more of a factorial asset that puts all of those who come through it into a better position to gain wealth themselves is the newly standard model for the most relevant spaces to embrace and stay a step ahead.       
    </div>
  </div>
)

export default Page7980
