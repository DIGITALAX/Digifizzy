import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page3940.module.scss'

const Page3940 = () => {
  const [play, setPlay] = useState(false)
  const refAudio = useRef()

  const startAudio = () => {
    refAudio.current.play()
    setPlay(true)
  }

  const pauseAudio = () => {
    refAudio.current.pause()
    setPlay(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src='/magazine/8/images/3940_back.jpg' width={1920} height={1497} />
      </div>
      <a href='https://www.twitter.com/jaggejaggelito' target='_blank' rel='noreferrer'>
        <div className={styles.link1}>Jakob Bengtsson</div>
      </a>
      <div className={styles.rect1} />
      <div className={styles.rect2} />
      <div className={styles.rect3} />
      <div className={styles.rect4} />
      <div className={styles.rect5} />
      <div className={styles.text1}>
        For me, music and instruments have always fascinated me. I grew up taking lessons in piano
        and guitar, and would just play for fun or play along with songs, but pursuing it as a
        career was never an option, as I thought I lacked that ”special gift”. Instead I studied to
        become an engineer in college until I was 19. Then I dropped out to try and pursue music
        full time! So right now I’m studying for a bachelors in Music production, and will get my
        degree next spring! 
        <br />
        <br />I found out about NFTs around 6 months ago, but didn’t really give it much thought.
        Then, about 2 months or so ago I started reading about them and researching, and realized
        that many of the problems the music industry (or at least the creators) faces could be
        solved with NFTs! So I’ve just been searching for what options are available today, both as
        a collector and creator.
      </div>
      <div className={styles.text2}>
        I think we’re looking at the next napster, as I believe this Will revolutionize the music
        industry just as much as streaming did back in the early 2000s. So far I haven’t found
        anything that has blown me away but I think we’re getting there! When smart contracts get
        better and easier, and there are easy ways to split royalties and so on with NFTs I think it
        Will just explode honestly! And also, what kind of excites me the most is the focus on
        community, with discord servers and IRL NFT meetups and so on! It can function as an
        official fanclub, where you gain value from supporting your favorite artists! That’s just
        amazing! And also, being able to support the artists you find that you really believe in,
        and actually have the ability to capitalize on them blowing up is also really exciting, I
        think the traditional music industry is way too focused on how big someone is, instead of
        their music, so being able to bypass the labels and just
      </div>
      <div className={styles.text3}>
        let listeners find them and fund them honestly excites me so much!! I've experimented with
        my own music but accidentally messed up and only made 1 copy of it (always double check lol).
        But it was just to try it out and see how it worked, so it was good experience. Personally I
        haven’t tried making music specifically as NFTs, I think I’m more traditional in that sense,
        as I’d still like to release songs on Spotify and other sites as well.
        <br />
        <br />
        However, there are more creative opportunities when it comes to the visuals, and the ability
        to narrate or describe your work! For Spotify you describe your songs to pitch to
        playlisters, but with NFTs you can describe your songs directly to the listener. One thing I
        learned with my NFT release was the importance of telling a story when describing your songs
        to listeners. We all love stories!
      </div>
      <div className={styles.text4}>
        I have a new artist project I’m planning on launching next spring, but I’m still in the
        early stages of it. I’m calling it Worrier, and it’s kind of Indie Rock Pop ish. Apart
        from that I think people should try and follow all the upcoming concerts and gigs on
        metaverse sites like Decentraland, that’s just going to get more and more interesting in
        the upcoming months I think!
        <br />
        <br />
        Let the things that excite you guide you while researching NFTs, and focus on those. Join
        discords and find communities you like. But remember that the most important part is your
        music, so don’t forget to create! Just create and explore!
      </div>
      <div className={styles.text5}>
        Also I bought a wobble bug and I think they have an interesting concept with owning a
        virtual DJ, and planning concerts and so on in the future. For now I mostly just see what
        they do and say, and go from there.
      </div>
      <div className={styles.text6}>Listen to Jakobs First NFT Drop!</div>

      <div
        className={styles.play}
        onClick={() => {
          play ? pauseAudio() : startAudio()
        }}
      >
        <img src='/magazine/8/images/3940_play.png' height={270} width={270} />
      </div>
      <div
        className={styles.pause}
        onClick={() => {
          play ? pauseAudio() : startAudio()
        }}
      >
        <img src='/magazine/8/images/3940_pause.png' height={270} width={270} />
      </div>
      <audio ref={refAudio} loop>
        <source src='/magazine/8/sounds/3940_sound1.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page3940
