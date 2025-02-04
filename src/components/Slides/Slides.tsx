'use client';

import { useRef, useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import Slider from 'react-slick';

import './Slider.scss';
import styles from './Slides.module.scss';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const sliderRef = useRef<Slider>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof props.slides[0].img === 'string') {
      const img = new globalThis.Image();
      img.src = props.slides[0].img;
      img.onload = () => setIsLoaded(true);
    }
    return () => {};
  }, [props.slides]);

  const settings = {
    accessibility: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    afterChange: (currentSlide: number) => {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement) {
        activeElement.blur();
      }
      const slides = document.querySelectorAll('.slick-slide');
      slides.forEach((slide, index) => {
        if (index === currentSlide) {
          slide.removeAttribute('inert');
        } else {
          slide.setAttribute('inert', 'true');
        }
      });
    }
  };

  return (
    <section className={styles.slides}>
      <Slider ref={sliderRef} {...settings}>
        {props.slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            {slide.img && (
              <Image
                id="image"
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
              // tabIndex={-1}
            />
            <button
              className={styles.slide__rightArrow}
              onClick={() => sliderRef.current?.slickNext()}
              // tabIndex={-1}
            />
          </div>
        ))}
      </Slider>
      <p>{props.description}</p>
    </section>
  );
}
