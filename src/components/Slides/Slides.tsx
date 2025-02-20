'use client';

import { useRef, useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import Slider from 'react-slick';

import './Slider.scss';
import styles from './Slides.module.scss';

export default function Slides(
  props: SlideModelNamespace.SlidesDataModel
) {
  const sliderRef = useRef<Slider>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);

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

  const settings = {
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
    afterChange: () => {
      const activeElement =
        document.activeElement as HTMLElement;
      if (activeElement) {
        activeElement.blur();
      }
    },
  };

  return (
    <section className={styles.slides}>
      <Slider ref={sliderRef} {...settings}>
        {props.slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
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
