'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Slides.module.scss';
import { v4 as uuidv4 } from 'uuid';

//CURRENT

// SKELETON
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Slides(props: SlidesDataModel) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // SKELETON USE EFFECT CONDITION
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

  // CONSOLE
  // console.log('IMAGES LOADED: ', imagesLoaded);

  return (
    <section className={styles.slides}>
      {/* {props.slides.map((slide) =>
        !imagesLoaded ? (
          <Skeleton key={uuidv4()} height={900} width={2000} />
        ) : (
          slide.img && (
            <Image
              key={uuidv4()}
              src={slide.img}
              alt={props.description}
              className={`${styles.slide__image} embala__slide`}
              width={1600}
              height={900}
              priority
              aria-hidden={false}
            />
          )
        )
      )} */}

      {props.slides.map((slide) =>
        !imagesLoaded ? (
          <Skeleton key={uuidv4()} height={900} width={2000} />
        ) : (
          slide.img && (
            <Image
              key={uuidv4()}
              src={slide.img}
              alt={props.description}
              className={`${styles.slide__image} panel`}
              width={1600}
              height={900}
              priority
              aria-hidden={false}
            />
          )
        )
      )}

      <p>{props.description}</p>
    </section>
  );
}
