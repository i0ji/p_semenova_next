'use client';

// import Image from 'next/image';
import styles from './Slides.module.scss';
// import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';

import Swiper from 'react-id-swiper';
import "./swiper.scss"
// import 'swiper/css/swiper.css';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  const isAllImagesLoaded = loadedImages.size === props.slides.length;

  //OPTION
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    dynamicBullets: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  //OPTION

  return (
    <section className={styles.slides}>
      asd
      <Swiper {...params}>
        <div style={{ width: 400, height: 500, backgroundColor: 'red' }}>
          Slide #1
        </div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
      <p>{props.description}</p>
    </section>
  );
}

{
  /* <Swiper {...params}>
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
</Swiper>
<p>{isAllImagesLoaded ? props.description : <Skeleton count={1} />}</p> */
}
