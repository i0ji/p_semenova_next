'use client';

import { useRef, useState, useEffect, useLayoutEffect  } from 'react';

import Image from 'next/image';
import Slider from 'react-slick';

import './Slider.scss';
import styles from './Slides.module.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const sliderRef = useRef<Slider>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  //CONSOLE
  console.log('IMAGES LOADED: ', imagesLoaded);

  // OPTION

  useEffect(() => {
    const imageElements = document.querySelectorAll(`.${styles.slide__image}`);
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === imageElements.length) {
        setImagesLoaded(true);
      }
    };

    const handleResize = () => {
      const hiddenSlides = document.querySelectorAll(
        '.slick-slide[aria-hidden="true"]'
      );
      hiddenSlides.forEach((slide) => {
        const focusableElements = slide.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        focusableElements.forEach((element) => {
          element.setAttribute('tabindex', '-1');
        });
      });
    };

    window.addEventListener('resize', handleResize);

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
      window.removeEventListener('resize', handleResize);
    };
  }, [props.slides]);


  //OPTION

  const settings = {
    accessibility: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false
  };

  //CONSOLE
  // console.log('ACCESS: ', settings.accessibility);

  return (
    <section className={styles.slides}>
      <Slider ref={sliderRef} {...settings}>
        {props.slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            {/* {slide.img && (
              <Image
                id={`image-${slide.id}`}
                src={slide.img}
                alt={props.description}
                className={styles.slide__image}
                width={1600}
                height={900}
                priority
              />
            )} */}
            {/* OPTION */}

            {!imagesLoaded ? (
              <Skeleton height={900} width={2000} />
            ) : (
              slide.img && (
                <div inert={true}>
                  <Image
                    id={`image-${slide.id}`}
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
              tabIndex={-1}
            />
            <button
              className={styles.slide__rightArrow}
              onClick={() => sliderRef.current?.slickNext()}
              tabIndex={-1}
            />
          </div>
        ))}
        {/* <button
          className={styles.slide__leftArrow}
          onClick={() => sliderRef.current?.slickPrev()}
          tabIndex={-1}
        />
        <button
          className={styles.slide__rightArrow}
          onClick={() => sliderRef.current?.slickNext()}
          tabIndex={-1}
        /> */}
      </Slider>

      <p>{props.description}</p>
    </section>
  );
}
