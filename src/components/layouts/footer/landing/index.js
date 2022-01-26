import React from 'react'
import styles from './styles.module.scss'

const LandingFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.heading}>
        STAY UP TO DATE
      </div>
      <div className={styles.description}>
        Check out our Medium and join our Discord community to stay up to date!
      </div>
      <div className={styles.centerWrapper}>
        <div className={[styles.dFlex, styles.aboutLine].join(' ')}>
          <a href='https://drive.google.com/file/d/1zG8h4GnodW7uWm_OsUY3g4I4RpOx6bMH/view?usp=sharing'>
            DIGITALAX UPDATES
          </a>
          <a href='https://digitalax.gitbook.io/digitalax/' target='_blank' rel='noreferrer'>
            DOCUMENTATION
          </a>
          <a href='https://drive.google.com/file/d/1oFiBGBr_CN0-mUuuEp_g6wDBr-mNA0Uh/view?usp=sharing'>
            READ ABOUT ESPA
          </a>
        </div>
        <img src='/images/social-icons/white-logo.svg' alt='white-logo' className={styles.whiteLogo} />
        <div className={[styles.dFlex, styles.iconsLine].join(' ')}>
          <a href='https://www.facebook.com/digitalax1' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/facebook.svg' alt='facebook-icon' className='facebook-icon' />
          </a>
          <a href='https://twitter.com/DIGITALAX_' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/twitter.svg' alt='twitter-icon' className='twitter-icon' />
          </a>
          <a href='https://www.instagram.com/_digitalax' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/instagram.svg' alt='instagram-icon' className='instagram-icon' />
          </a>
          <a href='https://www.linkedin.com/company/digitalax-digital-fashion/' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/linkedin_logo.png' alt='linkedin-icon' className={styles.linkedinIcon} />
          </a>
          <a href='https://www.tiktok.com/@digitalax?' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/tiktok.svg' alt='tiktok-icon' className={styles.tiktokIcon} />
          </a>
          <a href='https://www.twitch.tv/digitalax' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/twitch.svg' alt='twitch-icon' className={styles.twitchIcon} />
          </a>
          <a href='https://discord.com/invite/DKbSqRGtKv' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/discord.svg' alt='discord-icon' className='discord-icon' />
          </a>
          <a href='https://www.reddit.com/r/DIGITALAX/' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/reddit.svg' alt='reddit-icon' className='reddit-icon' />
          </a>
          <a href='https://www.youtube.com/channel/UCE26XV44aaYe1zlPnDbiz5Q' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/youtube.svg' alt='youtube-icon' className={styles.youtubeIcon} />
          </a>
          <a href='https://digitalax.medium.com/' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/medium-small.png' alt='medium-icon' className={styles.mediumIcon} />
          </a>
          <a href='https://t.me/digitalaxTG' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/telegram-circle.png' alt='telegram-icon-1' className={styles.mediumIcon} />
          </a>
          <a href='https://t.me/digitalaxannouncements' target='_blank' rel='noreferrer'>
            <img src='/images/social-icons/telegram-circle.png' alt='telegram-icon-2' className={styles.mediumIcon} />
          </a>
        </div>

        <div className={[styles.dFlex, styles.faqLine].join(' ')}>
          <a href='https://blog.digitalax.xyz' target='_blank' rel='noreferrer'>
            FAQs
          </a>
          <a href='https://www.digitalax.xyz/marketplace' target='_blank' rel='noreferrer'>
            Digital Fashion Auctions
          </a>
          <a href='https://staking.digitalax.xyz' target='_blank' rel='noreferrer'>
            Staking
          </a>
        </div>
      </div>
    </div>
    {/* <div className={styles.textHiring}>
        <a href='https://www.digitalax.xyz/careers'>WE ARE HIRING!</a>
      </div> */}
  </footer>
)

export default LandingFooter
