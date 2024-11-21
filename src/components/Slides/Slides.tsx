'use client';

import { useRef } from 'react';
import Slider from 'react-slick';
import styles from './Slides.module.scss';
import Image from 'next/image';
import { SlidesDataModel } from '@/services/declarations';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Slides(props: SlidesDataModel) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    lazyLoad: 'ondemand' as 'ondemand' | 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <section className={styles.slides}>
      <Slider ref={sliderRef} {...settings}>
        {props.slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <Image
              id="image"
              src={slide.img}
              alt={props.description}
              className={styles.slide__image}
              width={1600}
              height={900}
              layout="responsive"
            />
            <button
              className={styles.slide__leftArrow}
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <button
              className={styles.slide__rightArrow}
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        ))}
      </Slider>
      <p>{props.description}</p>
    </section>
  );
}
