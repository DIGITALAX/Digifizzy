import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import s from './index.module.scss';

const NftBanners = () => (
  <div className={s.bannerWrapper}>
    <Carousel
      autoPlay
      showThumbs={false}
      stopOnHover={false}
      showArrows={false}
      showStatus={false}
      infiniteLoop
    >
      {/* issue 1 */}
      {/* <div className={s.firstBanner}>
          <img src={`images/nft/1/Group 1187.png`} />
          <Link href="/unlockable/">
            <a className={s.viewBundles}> VIEW BUNDLES </a>
          </Link>
        </div>
        <img src={`images/nft/1/1.png`} />
        <img src={`images/nft/1/2.png`} />
        <img src={`images/nft/1/3.png`} />
        <img src={`images/nft/1/4.png`} />
        <img src={`images/nft/1/5.png`} />
        <img src={`images/nft/1/6.png`} />
        <img src={`images/nft/1/Group 1188.png`} />
        <div className={s.videoItem}>
          <img src={`images/nft/1/8.png`} />
          <img src={`images/nft/1/8.gif`} className={s.gif} />
        </div> */}

      {/* issue 2 */}
      {/* <div className={s.firstBanner}>
          <img src={`images/nft/2/1.png`} />
          <Link href="/unlockable/">
            <a className={s.viewBundles}> VIEW BUNDLES </a>
          </Link>
        </div>
        <img src={`images/nft/2/2.png`} />
        <img src={`images/nft/2/3.png`} />
        <img src={`images/nft/2/4.png`} />
        <img src={`images/nft/2/5.png`} />
        <img src={`images/nft/2/6.png`} />
        <img src={`images/nft/2/7.png`} />
        <img src={`images/nft/2/8.png`} />
        <div className={s.videoWrapper}>
          <video autoPlay loop muted>
            <source src="images/nft/2/9_back.mp4" />
          </video>
          <img src={`images/nft/2/9.png`} className={s.png} />
        </div> */}

      {/* issue 3 */}
      {/* <div className={s.firstBanner}>
          <img src={`images/nft/3/1.png`} />
          <Link href="/unlockable/">
            <a className={s.viewBundles}> VIEW BUNDLES </a>
          </Link>
        </div>
        <img src={`images/nft/3/2.png`} />
        <img src={`images/nft/3/3.png`} />
        <img src={`images/nft/3/4.png`} />
        <img src={`images/nft/3/5.png`} />
        <img src={`images/nft/3/6.png`} />
        <img src={`images/nft/3/7.png`} /> */}

      {/* issue 4 */}
      {/* <div className={s.firstBanner}>
          <img src={`images/nft/4/1.png`} />
          <Link href="/unlockable/">
            <a className={s.viewBundles}> VIEW BUNDLES </a>
          </Link>
        </div>
        <img src={`images/nft/4/2.png`} />
        <img src={`images/nft/4/3.png`} />
        <img src={`images/nft/4/4.png`} />
        <img src={`images/nft/4/5.png`} />
        <img src={`images/nft/4/6.png`} />
        <img src={`images/nft/4/7.png`} />
        <img src={`images/nft/4/8.png`} /> */}

      {/* issue 5 */}
      {/* <div className={s.firstBanner}>
          <img src={`images/nft/5/1.png`} />
          <Link href="/unlockable/">
            <a className={s.viewBundles}> VIEW BUNDLES </a>
          </Link>
        </div>
        <img src={`images/nft/5/2.png`} />
        <img src={`images/nft/5/3.png`} />
        <img src={`images/nft/5/4.png`} />
        <img src={`images/nft/5/5.png`} />
        <img src={`images/nft/5/6.png`} />
        <img src={`images/nft/5/7.png`} />
        <img src={`images/nft/5/8.png`} /> */}

      {/* issue 6 */}
      {/* <div className={s.firstBanner}>
          <img src={`images/nft/6/1.png`} />
          <Link href="/unlockable/">
            <a className={s.viewBundles}> VIEW BUNDLES </a>
          </Link>
        </div>
        <img src={`images/nft/6/2.png`} />
        <img src={`images/nft/6/3.png`} />
        <img src={`images/nft/6/4.png`} />
        <img src={`images/nft/6/5.png`} />
        <img src={`images/nft/6/6.png`} />
        <img src={`images/nft/6/7.png`} />
        <img src={`images/nft/6/8.png`} /> */}

      {/* issue 7 */}
      {/* <div className={s.firstBanner}>
        <img src='images/nft/8/1.png' />
        <Link href='/unlockable/'>
          <a className={s.viewBundles}> VIEW BUNDLES </a>
        </Link>
      </div>
      <img src='images/nft/7/2.png' />
      <img src='images/nft/7/3.png' />
      <img src='images/nft/7/4.png' />
      <img src='images/nft/7/5.png' />
      <img src='images/nft/7/6.png' />
      <img src='images/nft/7/7.png' />
      <img src='images/nft/7/8.png' /> */}

      {/* issue 8 */}
      {/* <div className={s.firstBanner}>
        <img src="images/nft/8/1.png" />
        <Link href="/unlockable/">
          <a className={s.viewBundles}> VIEW BUNDLES </a>
        </Link>
      </div>
      <img src="images/nft/8/2.png" />
      <img src="images/nft/8/3.png" />
      <img src="images/nft/8/4.png" />
      <img src="images/nft/8/5.png" />
      <img src="images/nft/8/6.png" />
      <img src="images/nft/8/7.png" />
      <img src="images/nft/8/8.png" /> */}

      {/* issue 9 */}
      {/* <div className={s.firstBanner}>
        <img src="images/nft/9/1.png" />
        <Link href="/unlockable/">
          <a className={s.viewBundles}> VIEW BUNDLES </a>
        </Link>
      </div>
      <img src="images/nft/9/2.png" />
      <img src="images/nft/9/3.png" />
      <img src="images/nft/9/4.png" />
      <img src="images/nft/9/5.png" />
      <img src="images/nft/9/6.png" />
      <img src="images/nft/9/7.png" />
      <img src="images/nft/9/8.png" /> */}

      {/* issue 10 */}

      {/* <div className={s.firstBanner}>
        <img src="images/nft/10/1.png" />
        <Link href="/unlockable/">
          <a className={s.viewBundles}> VIEW BUNDLES </a>
        </Link>
      </div>
      <img src="images/nft/10/2.png" />
      <img src="images/nft/10/3.png" />
      <img src="images/nft/10/4.png" />
      <img src="images/nft/10/5.png" />
      <img src="images/nft/10/6.png" />
      <img src="images/nft/10/7.png" />
      <img src="images/nft/10/8.png" /> */}

      {/* issue 11 */}

      <div className={s.firstBanner}>
        <img src="images/nft/11/1.jpg" />
        {/* <Link href="/unlockable/">
          <a className={s.viewBundles}> VIEW BUNDLES </a>
        </Link> */}
      </div>
      <img src="images/nft/11/2.jpg" />
      <img src="images/nft/11/3.jpg" />
      <img src="images/nft/11/4.jpg" />
      <img src="images/nft/11/5.jpg" />
      <img src="images/nft/11/6.jpg" />
      <img src="images/nft/11/7.jpg" />
    </Carousel>
  </div>
);

export default NftBanners;
