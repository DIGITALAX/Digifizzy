import React from 'react'
import Image from 'next/image'
import styles from './page6364.module.scss'

const Page6364 = () => (
  <div className={styles.wrapper}>
    <div className={styles.back} />
    <video autoPlay muted loop className={styles.video1}>
      <source src='./magazine/1/videos/moshed-05-02-1-15-28.mp4' type='video/mp4' />
    </video>
    <img src='/magazine/7/images/6364_image1.png' className={styles.image1} />

    <div className={styles.text1}>A U S T R A L I A</div>
    <div className={styles.text2}> INTERNATIONAL PLAYERS</div>
    <img src='/magazine/7/images/6364_image2.png' className={styles.image2} />

    <div className={styles.text3}>
      DAVID COURT
    </div>
    <div className={styles.text4}>
      I’ve been making and exhibiting artwork basically full time in varying capacities for the last 10 years, have operated a clothing label, retail store, magazine, done bits of commercial photography and graphic design and illustration in that time, and since 2018 have been full time freelance in the art zone. The past year or so I’ve been getting more heavily into digital art making, teaching myself blender and Touchdesigner in lockdowns and have been translating and matching these new skills with painting and design and previous work to make new installations and works including NFTs.
    </div>
    <div className={styles.text5}>
      I feel like it was pretty gradual, I’d been aware of crypto and had some friends deep into that for a long time but hadn’t put in the time to learn myself, but then found out about use of NFTs as a new art medium towards the end of 2020, and thought I’d have a play and see what it can do, like any new medium or opportunity I come across.
      <br /><br />
      Since that early intro I’ve gradually been learning more about the space and possibilities, and I’m excited about the potential of blockchain technology and smart contracts to create and generate art beyond just being a method of sales and ownership.
      <br /><br />
      I’ve been working on a few different projects, most of the pieces I’ve released so far are connected to my exhibition that I held in July 2021, where I painted a two that was going to be demolished and documented it to recreate digitally. You can see some more form that project here - http://davecourt.art/house-party
      <br /><br />
      I’ve been minting works on Hic Et Nunc, and found that to be a good platform for me, an easy answer to the environmental question about NFTs, and super low gas fees as well, which makes sense to me.
      <br /><br />
      There are a heap of artists doing exciting stuff in Australia, for me in Adelaide I have a few people that I collaborate and work with regularly in person who are working on things. I see a lot of potential for artists I know who have exciting and interesting practices in a more tradiditonal art world to translate to web3 spaces.
      <br /><br />
      It’s also been a good way for me to discover work from artists that I wouldn’t normally come across, the big one in particular is Beets who i found on twitter and his Here and Now project - an NFT ticketed virtual space / art gallery, he’s doing super interesting stuff with it and curating work from awesome and diverse artists in the space.
      <br /><br />
      My exhibition this year had all sorts of media, painting, sculpture, projection, video, AR, VR game, photography - and NFTs were one avenue for a collection of works that contributed to the overall show. It was an interesting response, especially six months ago general public didn’t really know what it all was, and even the few of my friends who are across it I had positioned myself a little bit more niche by using HEN so they had to go through the steps of setting up a tezos wallet where they might only have Ethereum or bitcoin already.
      <br /><br />
      For me I’ve been engaging with NFTs as an extension of already existing art communities mainly, people who are making the best work in the last year have probably been making the best work for years and years before that. Australia and Adelaide especially is a pretty tight community, which is nice to be a part of.
      <br /><br />
      I try not to think about what types of art are resonating or maybe I’m not keyed into the collector side of things enough, what I enjoy the most is people making unique things that they’re passionate about and have dedicated their time to refining.
    </div>
    <div className={styles.text6}>
      Here’s my HEN profile also - <a href='https://hicetnunc.art/davecourt' target='_blank' rel='noreferrer'>https://hicetnunc.art/davecourt</a>
    </div>
    <div className={styles.text7}>
      Front Door 2
    </div>
    <div className={styles.text8}>
      LOOP GESTURE 7 in situ
    </div>
    <a
      className={styles.image3}
      href='https://twitter.com/dave_fools'
      target='_blank'
      rel='noreferrer'
    >
      <Image
        src='/magazine/7/images/6364_image3.png'
        width={188}
        height={188}
      />
    </a>
    <a
      className={styles.image4}
      href='https://hicetnunc.art/objkt/284599'
      target='_blank'
      rel='noreferrer'
    >
      <Image
        src='/magazine/7/images/6364_image4.png'
        width={332}
        height={192}
      />
    </a>
    <a href='https://www.henext.xyz/o/157311' target='_blank' rel='noreferrer'>
      <video autoPlay muted loop className={styles.video2}>
        <source src='/magazine/7/videos/6364_video1.mp4' type='video/mp4' />
      </video>
    </a>
  </div>
)

export default Page6364
