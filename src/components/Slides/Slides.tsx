'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Slides.module.scss';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    // slideChanged(slider) {
    //   setCurrentSlide(slider.track.details.rel);
    // },
    created() {
      setLoaded(!loaded);
    },
    loop: true
  });

  return (
    <section className={styles.slides}>
      <div className={styles.slidesWrapper}>
        <div ref={sliderRef} className="keen-slider">
          {props.slides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <Image
                src={slide.img}
                alt={props.description}
                className={`${styles.slide__image} ${'keen-slider__slide'}`}
                width={1600}
                height={900}
                priority
              />
            </div>
          ))}

          <button
            className={styles.lefButton}
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
          />
          <button
            className={styles.rightButton}
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
          />
        </div>
      </div>
      <p>{props.description}</p>
    </section>
  );
}

// {props.slides.map((slide) => (
//   <div key={slide.id} className={styles.slide}>
//     <Image
//       src={slide.img}
//       alt={props.description}
//       className={styles.slide__image}
//       width={1600}
//       height={900}
//       priority
//     />
//   </div>

// {loaded && instanceRef.current && (
//   <div className="dots">
//     {[
//       ...Array(instanceRef.current.track.details.slides.length).keys()
//     ].map((idx) => {
//       return (
//         <button
//           key={idx}
//           onClick={() => {
//             instanceRef.current?.moveToIdx(idx);
//           }}
//           className={
//             `${styles.dot}` + (currentSlide === idx ? ' active' : '')
//           }
//         ></button>
//       );
//     })}
//   </div>
// )}
