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
    arrows: true,
    pauseOnHover: true,
  };

  return (
    // FIXME remove class
    <div className={styles.temp}>
      <Slider {...settings}>
        {props.slides.map((slide) => (
          <div key={slide.id}>
            <Image src={slide.img} alt="" />
          </div>
        ))}
      </Slider>

      <p>{props.description}</p>
    </div>
  );
}
