import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page1516.module.scss'

const Page1516 = () => {
  const [isPlaying1, setIsPlaying1] = useState(false)
  const refAudio = useRef()

  const startAudio1 = () => {
    refAudio.current.play()
    setIsPlaying1(true)
  }

  const pauseAudio1 = () => {
    refAudio.current.pause()
    setIsPlaying1(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image
          src='/magazine/7/images/1516_image1.jpg'
          width={1920}
          height={1497}
        />
      </div>
      <div className={styles.hideOutside}>
        <div className={styles.greenyLion1}>
          <Image
            src='/magazine/7/images/1516_greenylion.jpg'
            width={184}
            height={188}
          />
        </div>

        <div className={styles.greenyLion2}>
          <Image
            src='/magazine/7/images/1516_greenylion.jpg'
            width={184}
            height={188}
          />
        </div>

        <div className={styles.greenyLion3}>
          <Image
            src='/magazine/7/images/1516_greenylion.jpg'
            width={184}
            height={188}
          />
        </div>

        <div className={styles.greenyLion4}>
          <Image
            src='/magazine/7/images/1516_greenylion.jpg'
            width={184}
            height={188}
          />
        </div>

        <div className={styles.greenyLion5}>
          <Image
            src='/magazine/7/images/1516_greenylion.jpg'
            width={184}
            height={188}
          />
        </div>

        <div className={styles.greenyLion6}>
          <Image
            src='/magazine/7/images/1516_greenylion.jpg'
            width={184}
            height={188}
          />
        </div>

        <div className={styles.greenyLion7}>
          <Image
            src='/magazine/7/images/1516_greenylion.jpg'
            width={184}
            height={188}
          />
        </div>

        <div className={styles.greenyLion8}>
          <Image
            src='/magazine/7/images/1516_greenylion.jpg'
            width={184}
            height={188}
          />
        </div>

        <div className={styles.greenyLion9}>
          <Image
            src='/magazine/7/images/1516_greenylion.jpg'
            width={184}
            height={188}
            layout='responsive'
          />
        </div>
      </div>
      <a href='https://twitter.com/swombat' target='_blank' rel='noreferrer'>
        <div className={styles.text1}>
          SWOMBAT
        </div>
      </a>
      <a href='https://twitter.com/swombat' target='_blank' rel='noreferrer'>
        <div className={styles.text2}>
          SWOMBAT
        </div>
      </a>
      <a href='https://twitter.com/swombat' target='_blank' rel='noreferrer'>
        <div className={styles.text3}>
          SWOMBAT
        </div>
      </a>
      <audio ref={refAudio} loop>
        <source src='/magazine/6/sounds/1516_sound1.mp3' type='audio/mpeg' />
      </audio>
      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        <img className={styles.imageBack} src='/magazine/7/images/1516_button_back.png' />
        {
          !isPlaying1
            ? <img className={styles.imagePlay} src='/magazine/7/images/1516_playbutton.png' />
            : <img className={styles.imagePause} src='/magazine/7/images/1516_pausebutton.png' />
        }
      </div>

      <div className={styles.text4}>
        P2E Gaming. <br />
        More Work to be Done.
      </div>

      <div className={styles.rect1} />
      <div className={styles.rect2} />
      <div className={styles.rect3} />
      <div className={styles.rect4} />
      <div className={styles.rect5} />
      <div className={styles.rect6} />
      <div className={styles.rect7} />
      <div className={styles.rect8} />
      <div className={styles.rect9} />

      <a href='https://twitter.com/_PolygonStudios' target='_blank' rel='noreferrer'>
        <div className={styles.text5}>
          Polygon Studios
        </div>
      </a>
      <div className={styles.text6}>
        Polygon Studios is an initiative taken by the Polygon team in an effort to further incubate web3 gaming, NFT, and metaverse projects on the Polygon blockchain. The team is focused on utilizing content and marketing campaigns to shed light on these new projects in order to showcase the growth and expansion of the Polygon ecosystem and metaverse projects continue to boom.
      </div>
      <div className={styles.text7}>
        Perhaps the most important principles for web3 games would have to be that they not only provide players with ways to earn crypto but are also enjoyable and fun. If you recall the early days of crypto gaming with titles like “Crypto Kitties” it was mainly collecting, trading, and selling digital assets. Now we see titles like Axie Infinity that take gameplay to a whole new level, implementing strategy and online gameplay.
        <br /><br />
        There are also other emerging titles on their way that are aiming to take web3 gaming to the next level.
        <br /><br />
        In terms of decentralization, I think it is a top priority for any game developer in the web3 space. The whole movement in crypto gaming was to not only construct a way for players to earn additional income but to also give each individual personal ownership of their assets in the game of their choice.
      </div>
      <div className={styles.text8}>
        Part of our mission at Polygon Studios and Polygon is to help web2 developers by providing them with the tools they need to start building in web3. There are several APIs that we provide that they can access.
      </div>
      <div className={styles.text9}>
        I understand where you are coming from when stating that AAA gaming has become toxic. Ultimately it’s the communities of these games that left a bad taste of the scene in many gamers’ mouths.
        <br /><br />
        We won’t condone any toxic behavior in the Polygon gaming community but we urge everyone to practice their due diligence when joining communities for any game they may be interested in.
        <br /><br />
        In terms of one vs the other, we support creators of all sizes regardless of the size of their company. There are many great projects out there that are being created in someone’s room, garage, or WeWork room that you probably haven’t even heard of yet.
        <br /><br />
        AAA studios are starting to recognize the power of web3 and p2e so if they’re interested in learning more we’re here to help introduce them to it.
      </div>
      <div className={styles.text10}>
        Fund generation has come in several forms. I’ve seen projects start NFT drops in an effort to provide their future player-base with a way to “own” a piece of the game. Some projects have turned to DAOs that they’re involved in to propose their idea in hopes of securing some investment.
        <br /><br />
        Small studios definitely have it rough when working to get their project out on the market. Funding can be a giant wall to climb, but if your project is built on Polygon, we’re more than happy to hear from you about what you’re looking for.
      </div>
      <div className={styles.text11}>
        There are so many to check out right now and even more to get excited about! I’d highly recommend looking into Decentraland, Sandbox, Decentral Games, Aavegotchi, Big Time Studios, and ZED Run.
      </div>
      <div className={styles.text12}>
        The space is still pretty early so there has yet to be a robust selection of games to choose from. Devs are still learning the technology and it also changes rapidly so we’re really still in the scene’s inception.
        <br /><br />
        A lot of games may seem a bit “cookie-cutter” to some since their gameplay is similar to other games. You also probably won’t find the same quality games as the latest titles pushed to consoles or PC.
        <br /><br />
        We’re really going to see how this space adapts as the technology advances and studios start raising the bar. There are sure to be growing pains but its for the greater growth of the industry.
      </div>
      <div className={styles.text13}>
        Shreyansh Singh
      </div>

      <a className={[styles.image2, styles.gradient].join(' ')} href='https://twitter.com/shreyansh_27' target='_blank' rel='noreferrer'>
        <Image
          src='/magazine/7/images/1516_image2.png'
          width={251}
          height={251}
        />
      </a>
    </div>
  )
}

export default Page1516
