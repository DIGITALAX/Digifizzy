import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page3738.module.scss'

const Page3738 = () => {
  return (
    <div className={styles.wrapper}>
      <video muted loop autoPlay className={styles.imageBackground}>
        <source
          src={`${DIGIFIZZY_S3}/11/videos/3738_video1.mp4`}
          type='video/mp4'
        />
      </video>

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>

      <a
        href='https://twitter.com/coralorca'
        target='_blank'
      >
        <div className={styles.image1}>
          <Image
            src={`${DIGIFIZZY_S3}/11/images/3738_image1.png`}
            width={400}
            height={400}
          />
        </div>
      </a>
      <div className={styles.text1}>
        I first heard of BTC in 2012 and right away thought that it was something that the world needed, and that crypto would be a self fulfilling prophecy. At the time, I was diving into VR using the Oculus developer kit 1 (!), the low resolution screen and the smell of plastic felt like the 90s all over again. While developing with Unity, I was listening to a lot of Andreas Antonopoulos interviews and got a lot of convictions about the use cases. 2017 is when I first heard of NFTs with cryptokitties. It didn’t click right away. It’s only late 2020 when I saw niftygateway and guys like Mad Dog Jones and Beeple that I thought there was a real cultural/technological movement, where a lot of different artists experimented with the format. It felt like something new was emerging. In a sense, it was the convergence of 20 years and more of digital art. It was driven by genuine exploration and that’s what really got me into it. Then I thought « ok, let’s come up with an artist name and create a Twitter account ». Coral Orca came to me while I was walking up the stairs to my flat in Hong Kong. I love the sea, and it felt like those two words worked well in opposition. It’s a bit of chimera, there is no such thing as a coral orca, but it had a good ring to it. So here I am, with zero followers on Twitter but with a strong desire to do something in that space. I started following accounts that I thought would give me insights - mostly crypto punks pfps at that time! By chance,  I followed 4156 and stumbled upon the the nouns tweet storm - in a sense the nouns white paper - and thought « interesting »..🧐 then I saw them emerge, cute and mischievous little pixelated characters. Somehow I was really attracted to them, their incompleteness at the time, and the possibilities, the fact that it was built in the open. I saw the opportunity to participate by doing what I know best: 3D. Funny enough, I had taken a class on voxel modeling a few months prior, so I went on and turned the 2D nouns in 3D animated characters using voxels. That’s when it blew up, and 4156 and the nouns founders retweeted my post. The response was very positive and a lot of the founders encouraged me. That was a crazy moment for me when I really thought I could contribute to the project and make a name in the space. That feeling remains the same today.
      </div>
      <div className={styles.text2}>
        Of course open source and the world wide web have always been instrumental to my work. I would be in a very different place if I had to create everything from scratch. I don’t believe in this romantic view of the isolated creator with an eureka moment. The eureka moment is a product of everything surrounding the artist. I believe in the combinatorial power of ideas. In a sense that is what NFTs are. You take crypto on one side and digital art and unique artefacts on the other side and you get NFTs. And I am convinced that we are at the really beginning of NFTs, its is going to evolve so much. As a creative, I steal a lot of stuff and modify them to fit my needs, I mix it and remix it, a bit like a hip hop beat maker. I search for things all the time on YouTube or blogs. Big credits to all those people that upload content and share their knowledge.
      </div>
      <div className={styles.text3}>
        Last year I was still working for the corporate world, and it was such a struggle to drive innovation. Everybody is comfortable doing things like they always have and it is really hard to move forward with complex hierarchical structures. So many hoops, emails, managers to go through. With NFTs, there is a sense of community, even if you are using a pseudonym, you care about reputation a lot. So there is a lot of inherent trust. There is capital in that space, as @punk4156 told me, and the problem is more how to distribute this capital. We need talents! Also using crypto to transfer value makes it so easy, when you compare it to bank transfers and contracts between different countries. Right now, I feel like I’m just building cool things with my friends on the internet. It is that simple. 
      </div>
      <div className={styles.text4}>
        I just finished doing an AR filter for my friends at Lollapalooza and you can check it out here https://lollapalooza.com/frens. It was a lot of fun. AR is definitely something I am spending a lot of time thinking about and testing things with. Apart from that I’m just working hard on https://3Dnouns.com and Nouns toun.
      </div>
      <div className={styles.text5}>
        3Dnouns is the main project I am working on right now. We are entering a phase where we are starting to build the environment for it. It’s very exciting! I am trained as an architect but I always wanted to create games and I’m really fascinated by environment design in general. I think places do a large part in setting the "mood". About the nouns community, it is a very fun place with a lot of true positivity which I think is needed when you want to experiment. It grew a lot since the project launch, and its hard to keep up but you often bump into the same people that are constantly interacting in the discord. The nouns project gave me great opportunities and allowed me to quit my former job and learn new things in the Web 3 space. They also funded some AR filters like https://noggles.wtf which was a lot of fun. I think the great thing about the nouns project is its malleability and its ability to attract talents to do "nounish" things - whatever that adjective might mean. Those glasses are magic in a way that they enable each of us to reimagine the world through a different prism, wether you are an artist, a dev, a trader etc. With a treasury sitting at 20k ETH, there are a lot of possibilities. 
      </div>
    </div>
  )
}

export default Page3738
