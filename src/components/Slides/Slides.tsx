'use client';

import Slider from 'react-slick';
import styles from './Slides.module.scss';
import Image from 'next/image';
import { SlidesDataModel } from '@/services/declarations';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Slides(props: SlidesDataModel) {
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
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    prevArrow: <button className={styles.arrow}>&lt;</button>,
    nextArrow: <button className={styles.arrow}>&gt;</button>
  };

  //CONSOLE checking unique keys
  // for (let i = 0; i < props.slides.length; i++) {
  //   console.log(props.slides[i].id);
  // }

  return (
    <div className={styles.slides}>
      <Slider {...settings}>
        {props.slides.map((slide) => (
          <div key={slide.id}>
            <Image
              src={slide.img}
              alt={props.description}
              className={styles.slides__image}
            />
          </div>
        ))}
      </Slider>

      <p>{props.description}</p>
    </div>
  );
}
