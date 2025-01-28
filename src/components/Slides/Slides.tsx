'use client';

import { useRef, useState, useEffect } from 'react';

import Slider from 'react-slick';
import Image from 'next/image';

import './Slick.scss';
import styles from './Slides.module.scss';
//CURRENT
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const sliderRef = useRef<Slider>(null);

  //CURRENT
  const [loading, setLoading] = useState(true);

  //OPTION
  const [slideHeight, setSlideHeight] = useState<number>(0);

  //OPTION
  //CONSOLE
  const windowWidth = window.innerWidth;
  console.log('Window width: ', windowWidth);

  useEffect(() => {
    const updateHeight = () => {
      const slider = sliderRef.current;

      if (slider && slider.innerSlider && slider.innerSlider.list) {
        const activeSlide = document.querySelector(
          '.slick-slide.slick-active img'
        ) as HTMLImageElement;

        if (activeSlide) {
          const height = activeSlide.clientHeight;
          setSlideHeight(height);
        }
      }
    };

    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [props.slides, windowWidth]);
  //OPTION

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    //OPTION return to true
    adaptiveHeight: false,
    autoplay: false,
    //OPTION
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    afterChange: () => {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement) {
        activeElement.blur();
      }
    }
  };

  return (
    <section className={styles.slides}>
      <Slider ref={sliderRef} {...settings}>
        {props.slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            {loading && (
              <Skeleton
                height={slideHeight || 300}
                width="100%"
                className={styles.skeleton}
              />
            )}

            {slide.img ? (
              <Image
                id={`image-${slide.id}`}
                src={slide.img}
                alt={props.description}
                className={styles.slide__image}
                width={1600}
                height={900}
                priority
                onLoad={() => {
                  const activeSlide = document.querySelector(
                    '.slick-slide.slick-active img'
                  ) as HTMLImageElement;
                  if (activeSlide) {
                    const height = activeSlide.clientHeight;
                    //CONSOLE
                    console.log(`Image height: ${height}`);
                    setSlideHeight(height);
                  }
                }}
              />
            ) : (
              <p
                className={styles.slide__about}
                style={{ height: slideHeight }}
              >
                {slide.about}
              </p>
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
      <p className={styles.slides__description}>{props.description}</p>
    </section>
  );
}
