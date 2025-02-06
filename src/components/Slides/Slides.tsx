'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Slides.module.scss';

//SPLIDE
import {
  Splide,
  Splide as SplideType,
  SplideSlide,
  SplideInstance,
} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
//------

//SKELETON
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
//--------

export default function Slides(
  props: SlideModelNamespace.SlidesDataModel
) {
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

  // OPTION SPLIDE SETTINGS
  const carouselParams = {
    type: 'loop',
    perpage: 1,
    autoPlay: true,
    interval: 3000,
    pauseonhover: true,
    resetporogress: false,
  };
  const goNext = () => {
    if (splideRef.current) {
      //CONSOLE
      console.log('NEXT');
      splideRef.current.go('>');
    }
  };

  const goPrev = () => {
    if (splideRef.current) {
      //CONSOLE
      console.log('PREV');
      splideRef.current.go('<');
    }
  };

  // OPTION
  return (
    <section className={styles.slides}>
      <Splide
        ref={splideRef}
        tag="div"
        options={{
          arrows: false,
          type: 'loop',
          gap: '2rem',
          // autoPlay: true,
          // interval: 3000,Z
          // pauseOnHover: true,
          // resetProgress: false
        }}
      >
        {props.slides.map((slide) => (
          <SplideSlide key={slide.id} className={styles.slide}>
            {!imagesLoaded ? (
              <Skeleton width={2000} height="100%" />
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
            <button
              className={styles.slide__leftArrow}
              onClick={goPrev}
            />

            <button
              className={styles.slide__rightArrow}
              onClick={goNext}
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* <button
        className={styles.slide__leftArrow}
        onClick={goPrev}
      />

      <button
        className={styles.slide__rightArrow}
        onClick={goNext}
      /> */}
      <p>{props.description}</p>
    </section>
  );
}
