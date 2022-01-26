import React, { useRef, useState } from 'react'
import Image from 'next/image'
import ReactAnime from 'react-animejs'
import styles from './page1314.module.scss'

const Page1314 = () => {
  const { Anime, stagger } = ReactAnime

  const [control, setControl] = useState() //controller state
  const [progress, setProgress] = useState(0)

  const [meta, setMeta] = useState({
    //meta state of the player
    // control: control,
    progress: 0,
    currentTime: 0,
    duration: 0
  })

  const ref1 = useRef()
  const ref2 = useRef()

  const handleProgress = () => {
    console.log('handleProgress')
    ref1.current.onplay = () => {
      console.log('onplay')
      ref1.current.addEventListener('timeupdate', () => {
        const currentProgress = Math.floor(ref1.current.currentTime / ref1.current.duration * 100)
        setProgress(currentProgress)
        ref2.current.value = currentProgress
      }, true)
    }
  }

  console.log('control: ', control)

  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image
          src='/magazine/8/images/1314_image1.jpg'
          width={1920}
          height={1497}
        />
      </div>

      <div className={styles.image2}>
        <Image
          src='/magazine/8/images/1314_image2.png'
          width={263}
          height={244}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src='/magazine/8/images/1314_image2.png'
          width={263}
          height={244}
        />
      </div>
      <div className={styles.image4}>
        <Image
          src='/magazine/8/images/1314_image2.png'
          width={263}
          height={244}
        />
      </div>
      <a href='https://sva.edu/' target='_blank' className={styles.image5} rel='noreferrer'>
        <Image
          src='/magazine/8/images/1314_image3.png'
          width={179}
          height={179}
        />
      </a>
      <div className={styles.image7}>
        <Image
          src='/magazine/8/images/1314_image4.png'
          width={307}
          height={295}
        />
      </div>
      <div className={styles.image8}>
        <Image
          src='/magazine/8/images/1314_image4.png'
          width={307}
          height={295}
        />
      </div>
      <div className={styles.image9}>
        <Image
          src='/magazine/8/images/1314_image4.png'
          width={307}
          height={295}
        />
      </div>
      <div className={styles.image10}>
        <Image
          src='/magazine/8/images/1314_image4.png'
          width={307}
          height={295}
        />
      </div>
      <div className={styles.image11}>
        <Image
          src='/magazine/8/images/1314_image4.png'
          width={307}
          height={295}
        />
      </div>
      <div className={styles.image12}>
        <Image
          src='/magazine/8/images/1314_image4.png'
          width={307}
          height={295}
        />
      </div>
      <div className={styles.image13}>
        <Image
          src='/magazine/8/images/1314_image4.png'
          width={307}
          height={295}
        />
      </div>

      <a href='https://twitter.com/michaelgold' target='_blank' className={styles.text1} rel='noreferrer'>
        Michael Gold. School of Visal Arts NYC
      </a>

      <div className={styles.text2}>
        Open Source Oasis
      </div>

      <div className={styles.text3}>
        Open <br />
        Web
      </div>

      <div className={styles.text4}>
        L i b r e S o f t w a r e
      </div>

      <div className={styles.text5}>
        L i b r e S o f t w a r e
      </div>

      <div className={styles.text6}>
        L i b r e S o f t w a r e
      </div>

      <div className={styles.text7}>
        L i b r e S o f t w a r e
      </div>

      <div className={styles.text8}>
        L i b r e S o f t w a r e
      </div>

      <div className={styles.text9}>
        <span>THE EDEN DAO</span><br />
        With the call to action for each of us to continue to ramp up the environmentally conscious decisions and choices that we can make to help improve the status of our home planet increasing everyday, what better way to empower coordinated
      </div>
      <div className={styles.text10}>
        groups of dedicated and motivated individuals than through using the native web3 mechanism of DAOs. Welcome The Eden DAO. This DAO has a strong mission to accelerate growth of the carbon market by supplying catalytic capital from retail investors worldwide to carbon dioxide removal (CDR) project developers. Eden will purchase high volumes of future high quality carbon removals to kick-start a new culture of climate tech investing. 
      </div>
      <div className={styles.text11}>
        <span>SISMO</span><br />
        Sismo issues badges as non-transferable ERC-1155 NFTs to your public Ethereum profiles i.e. ENS names. These badges are Zero-Knowledge (ZK) attestations of facts imported from your other private accounts (Ethereum accounts as well as Twitter or GitHub).  
        <br /><br />
        The system set up in itself is highly unique, leveraging a suite of EIP standards and implementations. Further, being able to aggregate your reputation with full confidentiality to a public profile without revealing any of your private addresses, is a big leap forward for native web3 identity formation and security. 
      </div>
      <div className={styles.text12}>
        <span>Dark forest</span><br />
        A fully on-chain decentralised and 
      </div>
      <div className={styles.text13}>
        persistent RTS game with dynamic gameplay. Dark Forest is the first to incorporate incomplete information with zero knowledge proofs. 
        <br /><br />
        And besides bleeding edge engineering experimentation for this well played web3 game, the team is also making moves across the entirity of the gaming and esports sectors. 
        <br /><br />
        Dark Forest incubated and supported Guild W, which was the very first on-chain esports team— it is governed, influenced, and navigated through a DAO structure. 
        <br /><br />
        With the staggering scale up of blockchain x gaming and the full extent of this through the metaverse, the more teams incorporating novel solidity and smart contract standards and implementations into traditional and newly formed gameplay, the better. 
      </div>
      <div className={styles.text14}>
        <span>dataverse</span> <br />
        Selective curation is one of the most important parts to organising, sorting, ranking and most critically, reading and gaining insight from rich data. And, if one thing is for sure, the metaverse represents a whole lot more data, which means that classifying, cataloging and grouping on-chain data is becoming more essential than ever, as more people move into this space and start building out their go-to-analytics. There is a lot out there already for DeFi, but, when it comes to NFTs, the market gap is still huge. Dataverse allows you to create one-click private spaces to curate multi-media NFTs, and save and organize authentic content from various marketplaces. It also incorporates encryption mechanisms for a new layer of security, anonymity and privacy. 
      </div>
      <div className={styles.text15}>
        <span>RAINBOW WALL PROTOCOL</span><br />
        LOOT was probably one of the biggest NFT projects to go live this year and bring focus to the power of some of the most rawest materials that can be used to create NFTs and then compose and build on them in entirely nascent ways, as well as stoke a healthy ecosystem of derivates. Rainbow Wall protocol is bringing this to the next level, and combining text based NFTs with their new decentralised social media platform. It allows anyone to easily generate text NFTs and then send them to whoever they desire, have them appear on their platform’s “text wall”, and then allow users to buy, sell and trade between each other. Whether this is the right way to go about native web3 social media status updates... who knows? But text as NFTs has got to be some of the most exciting web3 native use cases that there are. 
      </div>

      <a href='https://twitter.com/TheEdenDao' target='_blank' className={[styles.image14, styles.hoverImage].join(' ')} rel='noreferrer'>
        <Image
          src='/magazine/8/images/1314_image5.png'
          width={96}
          height={96}
        />
      </a>
      <a href='https://twitter.com/sismo_eth' target='_blank' className={[styles.image15, styles.hoverImage].join(' ')} rel='noreferrer'>
        <Image
          src='/magazine/8/images/1314_image6.png'
          width={96}
          height={96}
        />
      </a>
      <a href='https://twitter.com/OwnershipLabs' target='_blank' className={[styles.image16, styles.hoverImage].join(' ')} rel='noreferrer'>
        <Image
          src='/magazine/8/images/1314_image7.png'
          width={96}
          height={96}
        />
      </a>
      <a href='https://twitter.com/rainbowwallpro' target='_blank' className={[styles.image17, styles.hoverImage].join(' ')} rel='noreferrer'>
        <Image
          src='/magazine/8/images/1314_image8.png'
          width={96}
          height={96}
        />
      </a>
      <a href='https://twitter.com/darkforest_eth' target='_blank' className={[styles.image18, styles.hoverImage].join(' ')} rel='noreferrer'>
        <Image
          src='/magazine/8/images/1314_image9.png'
          width={96}
          height={96}
        />
      </a>


        <audio className={styles.audio} ref={ref1} onLoadedData={() => handleProgress()}>
          <source src='/magazine/8/sounds/1314_sound1.mp3' type='audio/mp3' />
        </audio>
        <div className={styles.anim}>
          <Anime
            // control={control}
            // setMeta={setMeta}
            animeConfig={{
 
            }}

            initial={[
              {
                autoplay: true,
                duration: 1500,
                loop: true,
                easing: 'easeOutQuad',
                targets: '#blue',
                translateX: 220,
                scale: 1,
                rotate: 99,
              }
            ]}
          >
            <div
              className={styles.blue}
              id='blue'
            />
          </Anime>
          <Anime
            animeConfig={{
              
            }}

            initial={[
              {
                autoplay: true,
                loop: true,
                duration: 1500,
                easing: 'easeOutQuad',
                targets: '#green',
                translateX: 268,
                scale: 1.6,
                rotate: -184,
              }
            ]}
          >
            <div
              className={styles.green}
              id='green'
            />
          </Anime>
          <Anime
            animeConfig={{
   
            }}

            initial={[
              {
                targets: '#red',
                translateX: 220,
                scale: 1.7,
                rotate: 150,
                autoplay: true,
                duration: 1500,
                loop: true,
                easing: 'easeOutQuad'
              }
            ]}
          >
            <div
              className={styles.red}
              id='red'
            />
          </Anime>
          <input
            type='range'
            min='1'
            max='100'
            className={styles.slider}
            id='myRange'
            value={progress}
            ref={ref2}
            onChange={(e) => {
              console.log(e.currentTarget.value)
              setProgress(e.currentTarget.value)
              ref1.current.currentTime = ref1.current.duration * e.currentTarget.value / 100
              // setControl(['seek', e.currentTarget.value])
              // console.log()
            }}
          />
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => {
                setControl("play")
                ref1.current.play()
              }}
            >
              Play
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setControl("pause")
                ref1.current.pause()
              }}
            >
              Pause
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setControl("restart")
                ref1.current.pause()
                ref1.current.currentTime = 0
                ref1.current.play()
              }}
            >
              Restart
            </button>
          </div>

        </div>

    </div>
  )
}

export default Page1314
