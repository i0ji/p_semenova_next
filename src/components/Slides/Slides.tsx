'use client';

import { useRef } from 'react';

import Image from 'next/image';
import Slider from 'react-slick';

import './Slider.scss';
import styles from './Slides.module.scss';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    accessibility: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <section className={styles.slides}>
      <Slider ref={sliderRef} {...settings}>
        {props.slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            {slide.img && (
              <Image
                id={`image-${slide.id}`}
                src={slide.img}
                alt={props.description}
                className={styles.slide__image}
                width={1600}
                height={900}
                priority
              />
            )}
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
