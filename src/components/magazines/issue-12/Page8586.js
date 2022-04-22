import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page8586.module.scss';

const Page8586 = () => {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      fetch(
        'https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test1'
      )
        .then((res) => res.json())
        .then((data) => {
          setImages1(data?.data.map((item) => item.data));
        });

      fetch(
        'https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test2'
      )
        .then((res) => res.json())
        .then((data) => {
          setImages2(data?.data.map((item) => item.data));
        });
    };

    fetchContents();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
      <div className={styles.rect6}></div>
      <div className={styles.rect7}></div>
      <video autoPlay muted loop className={styles.video2}>
        <source src={`${DIGIFIZZY_S3}/12/videos/8586_video2.mp4`} />
      </video>
      <div className={styles.rect8}></div>

      <div className={styles.text1}>The New Pocket Digital Factory: Portable & Interoperable</div>
      <div className={styles.text2}>
        Everything we have achieved in the realm of technology has arrived because of the Industrial
        Revolution.
        <br />
        <br />
        For every counterargument against industrialization there is, there’s little doubt that it
        has brought on a taste of economic growth and prosperity, raising standards of living across
        the board to the levels we are familiar with today.
        <br />
        <br />
        Economic opportunities became abundant, wages hiked across the board for multiple sectors
        and industries, manufacturing work became a sought-after job after subsequent hikes in wages
        and benefits, and spurred on the development of living spaces and housing in the major
        cities and their suburbs as people flocked to them in search of opportunity.
        <br />
        <br />
        Necessity was the mother of invention, and technological advancements brought humanity to a
        veritable renaissance of sorts, bringing in an era of technological evolution that greatly
        enhanced the development of our society to where it is now.
        <br />
        <br />
        Consequently, the first era of the Industrial Revolution brought on a paradigm shift; it
        would be a herculean task to identify every aspect of humanity that had not changed as far
        as the economy, society, and culture are concerned. On the whole, civilization benefited and
        accelerated thanks to the Industrial Revolution.
        <br />
        <br />
        Naturally, however, the price of progress has had a steep cost – and it hasn’t been pretty.
        The questions of child labor, and its subsequent effects on the nuclear family, slavery,
        disenfranchisement of certain sectors of society, and environmental destruction in the form
        of widespread deforestation, wholesale extinction, and a waste problem that’s out of
        control, still pervading to this very day.
      </div>

      <video autoPlay muted loop className={styles.video1}>
        <source src={`${DIGIFIZZY_S3}/12/videos/8586_video1.mp4`} />
      </video>
    </div>
  );
};

export default Page8586;
