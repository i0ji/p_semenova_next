'use client';

import Image from 'next/image';
import styles from './Slides.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  const isAllImagesLoaded = loadedImages.size === props.slides.length;

  return (
    <section className={styles.slides}>
      {props.slides.map((slide) => (
        <div key={slide.id} className={styles.slide}>
          {!loadedImages.has(slide.id) && (
            <div className={styles.skeletonWrapper}>
              <Skeleton height={900} width={1600} />
            </div>
          )}
          <Image
            id="image"
            src={slide.img}
            alt={props.description}
            className={`${styles.slide__image} ${
              loadedImages.has(slide.id)
                ? styles.imageVisible
                : styles.imageHidden
            }`}
            width={1600}
            height={900}
            onLoad={() => handleImageLoad(slide.id)}
          />
        </div>
      ))}

      <p>{isAllImagesLoaded ? props.description : <Skeleton count={1} />}</p>
    </section>
  );
}
