'use client';

import { useState, useEffect, useRef } from 'react';

import Image from 'next/image';

//SPLIDE
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
//------

import styles from './Slides.module.scss';

//SKELETON
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
//--------

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const splideRef  = useRef(null);

  //SKELETON USE EFFECT CONDITION
  useEffect(() => {
    const imageElements = document.querySelectorAll(`.${styles.slide__image}`);
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === imageElements.length) {
        setImagesLoaded(true);
      }
    };

    imageElements.forEach((img) => {
      const image = img as HTMLImageElement;

      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener('load', handleImageLoad);
      }
    });

    if (imageElements.length === 0) {
      setImagesLoaded(true);
    }

    return () => {
      imageElements.forEach((img) => {
        const image = img as HTMLImageElement;
        image.removeEventListener('load', handleImageLoad);
      });
    };
  }, [props.slides]);

  //CONSOLE
  console.log('IMAGES LOADED: ', imagesLoaded);

  //CURRENT
  // OPTION SPLIDE SETTINGS
  const carouselParams = {
    type: 'loop', // Включаем бесконечную прокрутку
    perPage: 1, // Количество отображаемых слайдов
    autoplay: true, // Автопрокрутка
    interval: 3000, // Интервал автопрокрутки
    pauseOnHover: true, // Пауза при наведении
    resetProgress: false
  };
  const goNext = () => {
    if (splideRef.current) {
      splideRef.current.go('>');
    }
  };


  const goPrev = () => {
    if (splideRef.current) {
      splideRef.current.go('<');
    }
  };



  // OPTION
  return (
    <section className={styles.slides}>
      <Splide
        {...carouselParams}
        // options={ {
        //   rewind: true,
        //   width : 800,
        //   gap   : '1rem',
        // } }
      >
        <SplideTrack>
          {props.slides.map((slide) => (
            <SplideSlide key={slide.id} className={styles.slide}>
              {!imagesLoaded ? (
                <Skeleton height={900} width={2000} />
              ) : (
                slide.img && (
                  <div inert={true}>
                    <Image
                      src={slide.img}
                      alt={props.description}
                      className={styles.slide__image}
                      width={1600}
                      height={900}
                      priority
                      aria-hidden={false}
                    />
                  </div>
                )
              )}
              {/* <button
              className={styles.slide__leftArrow}
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <button
              className={styles.slide__rightArrow}
              onClick={() => sliderRef.current?.slickNext()}
            /> */}
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows">
          <button onClick={goPrev} className="splide__arrow splide__arrow--prev" />
          <button onClick={goNext} className="splide__arrow splide__arrow--next" />
        </div>
      </Splide>
      <p>{props.description}</p>
    </section>
  );
}
