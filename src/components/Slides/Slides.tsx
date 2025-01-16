'use client';

import { useRef, useState, useEffect } from 'react';

import Slider from 'react-slick';
import Image from 'next/image';

import './Slick.scss';
import styles from './Slides.module.scss';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const sliderRef = useRef<Slider>(null);

  //OPTION
  const [slideHeight, setSlideHeight] = useState<number>(0);

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
  }, [props.slides]);
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
                  // Находим активный слайд
                  const activeSlide = document.querySelector(
                    '.slick-slide.slick-active img'
                  ) as HTMLImageElement;
                  if (activeSlide) {
                    const height = activeSlide.clientHeight;
                    console.log(`Image height: ${height}`); // Логируем высоту
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
