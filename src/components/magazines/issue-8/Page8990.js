import React from 'react'
import Image from 'next/image'
import styles from './page8990.module.scss'

const Ring = ({ className }) => {
  console.log('className: ', className)
  return (
    <div className={[styles.ring, className].join(' ')}>
      <div className={styles.innerRing}></div>
    </div>
  )
}

const Page8990 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image
          src='/magazine/8/images/8990_image1.png'
          width={900}
          height={844}
        />
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={styles.circle5}></div>
      <div className={styles.circle6}></div>
      <div className={styles.circle7}></div>

      <Ring className={styles.ring1} />
      <Ring className={styles.ring2} />
      <Ring className={styles.ring3} />
      <Ring className={styles.ring4} />
      <Ring className={styles.ring5} />
      <Ring className={styles.ring6} />
      <Ring className={styles.ring7} />
      <Ring className={styles.ring8} />
      <Ring className={styles.ring9} />
      <Ring className={styles.ring10} />
      <Ring className={styles.ring11} />
      <Ring className={styles.ring12} />

      <div className={styles.image2}>
        <Image
          src='/magazine/8/images/1111111111.png'
          width={514}
          height={370}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src='/magazine/8/images/11111.png'
          width={443}
          height={319}
        />
      </div>
      <div className={styles.image4}>
        <Image
          src='/magazine/8/images/111111111111111.png'
          width={514}
          height={370}
        />
      </div>

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>

      <a
        className={styles.text1}
        href='https://www.instagram.com/queenbekahvon/'
        target='_blank'
      >
        BEKHA VON
      </a>
      <div className={styles.text2}>
        I have always wanted to be surrounded by fashion, art, and creativity. I was pretty young when I walked in my first show. I auditioned at a mall near where I grew up. It was the hot topic era. Think Studded belts, lime green tutus, and rainbow arm sleeves…preteen me was PSYCHED! The ebb and flows of life did not particularly keep me in modeling constantly, but I always came back to the art of movements. Now I am more full force than ever before.
      </div>
      <div className={styles.text3}>
        Modeling in the Metaverse
      </div>
      <div className={styles.text4}>
        The best part about my work is when I can meet a new model and help them really own their essence on camera and boost their confidence. There are a few best parts actually. I also am a creator at the core so it’s imperative that I am constantly making something new and beautiful.
        <br /><br />
        I’m not gonna lie. I am psyched to be moving more into the web3 fashion and metaverse arenas. It blows my mind that the fashion world is entering this new realm of technology and sustainability.
      </div>
      <div className={styles.text5}>
        I went vegan in 2017. Changing my diet, and practic discipline in that way led me to understand just how much each of our small everyday choices affects our planet. It influences people living outside of the USA and every choice ties into our current day as well as our future health. Meeting simi d. (the creator of okimmi) really opened my eyes to see that we have to do more in regards to our planet.
      </div>
      <div className={styles.text6}>
        MODELING THE META
      </div>
      <div className={styles.text7}>
        MODELING THE META
      </div>
      <div className={styles.text8}>
        According to the Climate Clock, “we have less than seven years in order to have two thirds of a chance of staying under the critical threshold of 1.5°C warming‘.” This website is powered by scientists and they are giving it less than seven years… this is the war we are fighting. Okimmi is interesting to me because it is up-cycled but still Couture in form. I have also been working with Baliawear. Baliawear uses recycled fabrics and their pieces can be worn a million different ways. Devalishangel is another brand that is making some upcycled clothing. I think what list put together is really creative and affordable!
      </div>
      <div className={styles.text9}>
        BEKHA VON
      </div>
      <div className={styles.text10}>
        BEKHA VON
      </div>
      <div className={styles.text11}>
        BEKHA VON
      </div>
      <div className={styles.text12}>
        The Metaverse started trending everywhere and I’m like “what’s that a new Marvel movie?” haha. I decided to go to the Hartman investment group’s Art Basel event to learn more. Some people feel like this new thing might take away their free choice of what reality they get to live in. Like they have to participate in the “metaverse” which is something made up (to them). My take is that even when we open the Instagram app we are using parts of the metaverse. It’s because the definition of the Metaverse itself is “a virtual-reality space in which users can interact with a computer-generated environment and other users.” Instagram is a computer generated space and I’m interacting with many people there. With technologies advancing in augmented reality they will incorporate this to make the virtual worlds people have been hearing about. But this also already exists in the gaming world. When you go to the mall you will find gaming facilities where you can use oculus rift and other accessories to play. People will still have the choice to log on and off just like they do now. These kinds of experiences are just going to be made more popular like
        <br />
        movies or PlayStation games. No one will have to participate in the metaverse, But just like any new technology there will be opportunities that come with it for making income, history, and new inventions. That’s why it’s actually pretty exciting to me. Especially since we are also entering the age of decentralized income and virtual reality could be a key component in that 
      </div>
      <div className={styles.text13}>
        growing popularity as well. This brickel event is where I heard Emma talk from DIGITALAX. I was completely inspired and wanted to figure out exactly how I could bring more power to models, the planet, and other creatives. I think the possibilities for a model in this field are really endless.
      </div>
    </div>
  )
}

export default Page8990
