import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page1314.module.scss'

const Page1314 = () => {
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
          src='/magazine/7/images/1314_image1.jpg'
          width={960}
          height={1497}
        />
      </div>

      <div className={styles.text1}>
        Open Source Oasis
      </div>
      <div className={styles.text2}>
        L i b r e S o f t w a r e
      </div>
      <div className={styles.text3}>
        L i b r e S o f t w a r e
      </div>
      <div className={styles.text4}>
        L i b r e S o f t w a r e
      </div>
      <div className={styles.text5}>
        L i b r e S o f t w a r e
      </div>
      <div className={styles.text6}>
        Open<br />
        Web
      </div>
      <a href='https://twitter.com/datafruits' target='_blank' rel='noreferrer'>
        <img src='./magazine/7/images/1314_image5.png' className={styles.image2} />
      </a>
      <a href='https://twitter.com/MANA_Vox' target='_blank' rel='noreferrer'>
        <img src='./magazine/7/images/1314_image6.png' className={styles.image3} />
      </a>
      <a href='https://twitter.com/DefiLab_xyz' target='_blank' rel='noreferrer'>
        <img src='./magazine/7/images/1314_image7.png' className={styles.image4} />
      </a>
      <a href='https://twitter.com/gitvern' target='_blank' rel='noreferrer'>
        <img src='./magazine/7/images/1314_image8.png' className={styles.image5} />
      </a>
      <a href='https://twitter.com/daoboard' target='_blank' rel='noreferrer'>
        <img src='./magazine/7/images/1314_image9.png' className={styles.image6} />
      </a>
      <div className={styles.text7}>
        <span>Datafruits fund</span><br />
        The ease of ability to collaborate in web3 and transparently receive value back from it is what drives interest around so many fundamental on-chain models i.e. contract splits, DAOs, composable NFTs like Loot & LOOK etc. And, as the music
      </div>
      <div className={styles.text8}>
        industry and music artists too are starting to be swept up by a wave of new web3 interest, Datafruits fund is touching on an interesting sector for supporting more open music collaboration models with their fm platform that allows any artist to stream live individually or in groups and eventually start bringing in on-chain funding split models that are directed to those streaming. It serves as another conduit for eager listeners to support creators in their early stages and share in value and ownership alongside the creator as they progressively decentralise their work and ecosystem to a fully fledged DAO model.
      </div>
      <div className={styles.text9}>
        <span>mana voX</span><br />
        It’s all just a coordination problem— it’s a popular statement in web3, and, ultimately, that’s exactly what the blockchain solves for. Verifiable and decentralised coordination. Mana Vox is extending on this with a new project to use gamified coordination for preventing deforestation and slaying bad actors. There approach uses a crowdsourced index that tracks and gives insight into negative impacts on forestation made by over 450 global corporations. Mechanisms often do better for promoting the positive, rather than denouncing the negative— however, it’s an interesting project to follow and see evolve to say the least.
      </div>
      <div className={styles.text10}>
        <span>DEFI LAB</span><br />
        For any technology, industry or economy first starting out, ease of access is key. If there isn’t content and tools widely available to speak to a broader audience and community, then it becomes harder for anyone to get in and benefit from being early, or really, more like not late. DeFi has gained massive traction in the past year and continues to grow and expand in terms of the number of projects building in the space, however, like anything, the more resources that can be directed to supporting better tooling and accessible content makes a huge positive sum difference. DeFi Lab is solving for this problem through community built DeFi tools, such as Uniswap simulators and Polygon network stats, helping more of the web3 space access transparent information and be not late.
      </div>
      <div className={styles.text11}>
        <span>GITVERN</span><br />
        Github is the CI/CD home for the large majority of open source devs, and, native web3 integrations means that more devs can start to easily transition from web2 as they are red pilled by the likes of Ethereum and other authentically decentralised engineering communities. Gitvern is taking the part of the build out of these much needed support structures on their shoulders as they build DAO Governance tools that are directly integrated with the normal GitHub workflow. This is a pretty significant disruption and means that you can now host your DAO voting dashboard on GitHub pages for your organization, or on decentralized storage like IPFS, as well as allow your token holders to approve and hence prioritize your GitHub issues by approving a MetaMask signature. There are many more features in the works and its super exciting to see how this project will further develop!
      </div>
      <div className={styles.text12}>
        <span>DAOBOARD</span><br />
        Web3 is full of degens. And, we pride ourselves on
      </div>
      <div className={styles.text13}>
        it— because, in many ways, it speaks to a truly free acting decentralised market.
        <br /><br />
        DAOboard is a new initiative that is building on the idea of assigning “degenscores” to weak simp vs diamondhand traders, and instead instantiating the “daoscore” that assigns & ranks web3 users a score based on dao activity and engagement in a gamified fashion.
        <br /><br />
        It’s more than just a fun concept however, and actually touches on an important aspect that many DAOs struggle with— how to overcome basic coin voting and instead keep token distribution and incentives highly coupled to member contributions and activity.
        <br /><br />
        Many communities use structures like token gated access. With DAOboard, the insights collected can potentially be used by DAOs as an eligibility score for tiered level access and rewards to community members.
      </div>

      <div className={styles.rect1} />

      <div className={styles.image71}>
        <Image
          src='/magazine/7/images/1314_image2.png'
          width={271}
          height={308}
        />
      </div>
      <div className={styles.image72}>
        <Image
          src='/magazine/7/images/1314_image2.png'
          width={271}
          height={308}
        />
      </div>
      <div className={styles.image73}>
        <Image
          src='/magazine/7/images/1314_image2.png'
          width={271}
          height={308}
        />
      </div>
      <div className={styles.image74}>
        <Image
          src='/magazine/7/images/1314_image2.png'
          width={271}
          height={308}
        />
      </div>
      <div className={styles.image75}>
        <Image
          src='/magazine/7/images/1314_image2.png'
          width={271}
          height={308}
        />
      </div>
      <div className={styles.image8}>
        <Image
          src='/magazine/7/images/1314_image3.png'
          width={824}
          height={1188}
        />
      </div>
      <a className={[styles.image9, styles.gradient].join(' ')} href='https://twitter.com/charl3svii' target='_blank' rel='noreferrer'>
        <Image
          src='/magazine/7/images/1314_image4.png'
          width={399}
          height={399}
        />
      </a>
      <a href='https://twitter.com/charl3svii' target='_blank' rel='noreferrer'>
        <div className={styles.text14}>
          NIFTY ISLAND
        </div>
      </a>

      <audio ref={refAudio} loop>
        <source src='/magazine/7/sounds/1314_sound1.mp3' type='audio/mpeg' />
      </audio>

      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        <img className={styles.imageBack} src='/magazine/7/images/1314_button_back.png' />
        {
          !isPlaying1
            ? <img className={styles.imagePlay} src='/magazine/7/images/1314_playbutton.png' />
            : <img className={styles.imagePause} src='/magazine/7/images/1314_pausebutton.png' />
        }
      </div>
    </div>
  )
}

export default Page1314
