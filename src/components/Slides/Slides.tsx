'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

import styles from './Slides.module.scss';

import Slider from 'react-slick';
import './Slider.scss';

import Accordion from '../Accordion/Accordion';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const sliderRef = useRef<Slider>(null);
  const [visibility, setVisibility] = useState(false);

  const handleToggleVisibility = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  };

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
    arrows: false
  };

  return (
    <section className={styles.slides}>
      <Slider ref={sliderRef} {...settings}>
        {props.slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <Image
              id="image"
              src={slide.img}
              alt={props.description}
              className={styles.slide__image}
              width={1600}
              height={900}
              priority
            />

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
      <div className={styles.slides__description}>
        <button onClick={handleToggleVisibility}>
          <p>
            {props.description} {visibility ? '↓' : '↑'}
          </p>
        </button>
        <Accordion
          description={props.description}
          plot={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse atque obcaecati consequatur itaque illo incidunt quas quos aliquid repudiandae quia rerum libero voluptatibus repellendus beatae corporis doloribus, numquam praesentium!  '
          }
          visibility={visibility}
        />
      </div>
    </section>
  );
}
