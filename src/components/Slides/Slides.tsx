'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Slides.module.scss';
import { v4 as uuidv4 } from 'uuid';

//SPLIDE
import {
  Splide,
  SplideSlide,
  SplideInstance,
  SplideTrack,
} from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
//------

//SKELETON
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
//--------

export default function Slides(props: SlidesDataModel) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  //CURRENT
  const splideRef = useRef<SplideInstance | null>(null);

  //SKELETON USE EFFECT CONDITION
  useEffect(() => {
    const imageElements = document.querySelectorAll(
      `.${styles.slide__image}`
    );
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

  // const goNext = () => {
  //   if (splideRef.current) {
  //     //CONSOLE
  //     console.log('NEXT');
  //     splideRef.current.go('>');
  //   }
  // };

  // const goPrev = () => {
  //   if (splideRef.current) {
  //     //CONSOLE
  //     console.log('PREV');
  //     splideRef.current.go('<');
  //   }
  // };

  // OPTION
  return (
    <section className={styles.slides}>
      <Splide
        hasTrack={false}
        ref={splideRef}
        options={{
          // arrows: false,
          type: 'loop',
          // gap: '2rem',
        }}
      >
        <SplideTrack>
          {props.slides.map((slide) => (
            <SplideSlide
              key={uuidv4()}
              ref={splideRef}
              className={styles.slide}
            >
              {!imagesLoaded ? (
                <Skeleton width={2000} height="100%" />
              ) : (
                slide.img && (
                  <Image
                    src={slide.img}
                    alt={props.description}
                    className={styles.slide__image}
                    width={2000}
                    height={900}
                    priority
                  />
                )
              )}
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className={`${styles.test} splide__arrows`}>
          <button className="splide__arrow splide__arrow--prev">
            Prev
          </button>
          <button className="splide__arrow splide__arrow--next">
            Next
          </button>
        </div>
      </Splide>

      <p>{props.description}</p>
    </section>
  );
}
