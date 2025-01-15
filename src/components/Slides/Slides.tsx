'use client';

import { useRef } from 'react';

import Image from 'next/image';
import Slider from 'react-slick';

import './Slick.scss';
import styles from './Slides.module.scss';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    //OPTION return to true
    autoplay: false,
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
            {slide.img && (
              <Image
                id="image"
                src={slide.img}
                alt={props.description}
                className={styles.slide__image}
                width={1600}
                height={900}
                priority
              />
            )}
            {slide.about && <p>{slide.about}</p>}

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
