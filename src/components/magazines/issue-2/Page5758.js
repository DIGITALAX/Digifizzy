import Link from 'next/link'
import React, { useRef, useState } from 'react'
import styles from './page5758.module.scss'

const Page5758 = () => {
  const [play, setPlay] = useState(false)
  const ref = useRef()
  return (
    <div className={styles.wrapper}>
      <img src='./magazine/2/images/57_58.png' className={styles.back} />
      <Link href='/'>
        <a className={styles.link1}>
          <div className={styles.text1}>
            Go Behind the Scenes with Exclusive NFT Content and Experiences
          </div>
          <div className={styles.text2}>
            Go Behind the Scenes with Exclusive NFT Content and Experiences
          </div>
        </a>
      </Link>
      <div className={styles.text3}>
        The DIGITALAX Ambassadors are each spinning up their own personalised world of unlockable
        NFT content and experience drops as they bridge into the web3 metaverse.
        <br />
        <br />
        Holders of the DIGIFIZZY NFT content bundles will have exclusive behind the scenes access to
        following their journies + unlockable special edition NFT drops + experiences.
      </div>
      <div className={styles.text4}>
        DECO
        <br />
        ONLY FANS
      </div>
      <div className={styles.text5}>
        NFTs are so much more than just the metadata attached to them. The extent of the possible
        use cases and potential applications that they hold is what makes them so transformative,
        and its something that most of the broader market, particularly the web2 media, hasn’t quite
        caught onto yet.
        <br />
        <br />
        <div className={styles.text18}>
          Some of the most interesting use cases are that of the new web3 native distribution models
          they allow for— like that of a decentralised commercial only fans. Allowing creators to
          spin up personalised decentralised realms with dynamic behind the scenes access to NFT
          content and experiences.
        </div>
      </div>
      <div className={styles.text6}>ARJAY SOUL</div>
      <div className={styles.text7}>
        Not your regular R&B singer – the versatile and independent artist – ArjaySoul is not afraid
        to take risks when creating his own waves in music. The Arizona-native is no stranger to
        turning heartbreak to breakthrough and adapting to his environment. At 13 years old his
        father was shot, but as he expresses in his single, “Worst Behavior”, he knew a shift in his
        emotions was necessary to level up his mindset.
      </div>
      <div className={styles.text8}>
        After dropping out of college after his first year, Arjay was homeless and working double
        shifts just to get time in the studio but going back to his old life was never an option.
        While confident in his own sound and calling as an artist, he finds inspiration from Grammy
        Award winning artists like H.E.R., Drake, and Jhené Aiko. He also lives by the quote, “Luck
        is just being prepared at all times, so when the door opens you’re ready”, stated by one of
        the most illustrious artists in rap history – Nipsey Hussle who Arjay references in his
        single “Numb Rant”.
      </div>
      <Link href='/'>
        <a className={styles.link2}>
          <div className={styles.text9}>
            Get your backstage pass into Arjay’s immersive content experience.
          </div>
        </a>
      </Link>
      <img src='./magazine/2/images/57_58_image1.png' className={styles.image1} />
      <video ref={ref} muted autoPlay loop className={styles.video1}>
        <source src='./magazine/2/images/57_58_video1.mp4' type='video/mp4' />
      </video>
      <img
        src={`./magazine/2/images/57_58_${!play ? 'play' : 'pause'}.png`}
        className={styles.play}
        onClick={() => {
          setPlay(!play)
          ref.current.muted = play
        }}
      />
      <img src='./magazine/2/images/57_58_image2.png' className={styles.image2} />

      <div className={styles.text14}>XENOTECH</div>
      <div className={styles.text15}>
        In 2020 XENOTECH transitioned from working on a physical clothing brand to 3D, having always
        felt frustrated by the constraints faced when trying to work with fabrics such as Vinyl—a
        nightmare to sew with and ultimately very uncomfortable to wear. With digital fashion these
        constraints disappear and there are unlimited possibilities. Video Clothing and the use of
        physically-impossible fabrics and textures are some examples.
      </div>
      <div className={styles.text16}>
        XENOTECH explores themes of futurism and the convergence of exponential technological
        trends. Along with the garments, creating Digital Fashion experiences within virtual worlds
        will be a primary focus for XENOTECH.
      </div>
      <Link href='/'>
        <a className={styles.link4}>
          <div className={styles.text17}>Discover the XENOTECH Sphere.</div>
        </a>
      </Link>
      <div className={styles.text19}>
        The biggest inspiration behind my creative work has been my upbringing and travels. My
        father’s job as a journalist resulted in our family moving from country to country
        frequently. From birth to highschool I moved between Tokyo (birthplace), New York, Rome, and
        Abu Dhabi. I was fortunate to have exposure to many different cultures and international
        experiences growing up, which has informed much of the work I do today. Much of this
        upbringing forced me to quickly adapt to change and learn to embrace it, and for this reason
        change is something I cherish.
      </div>
      <img src='./magazine/2/images/57_58_image4.png' className={styles.image4} />
      <img src='./magazine/2/images/57_58_image5.png' className={styles.image5} />
      <video autoPlay loop muted className={styles.video4}>
        <source src='./magazine/2/images/57_58_video4.mp4' type='video/mp4' />
      </video>
      <div className={styles.text20}>
        DECO
        <br /> ONLY FANS
      </div>
      <div className={styles.text21}>
        DECO
        <br /> ONLY FANS
      </div>
      <img src='./magazine/2/images/57_58_image6.png' className={styles.image6} />
      <img src='./magazine/2/images/57_58_image7.png' className={styles.image7} />
    </div>
  )
}

export default Page5758
