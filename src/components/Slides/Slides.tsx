'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Slides.module.scss';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Button from '../Button/Button';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true
  });

  const handleNext = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    } else {
      console.warn('Slider instance is not ready.');
    }
  };

  const handlePrev = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    } else {
      console.warn('Slider instance is not ready.');
    }
  };

  if (!props.slides || props.slides.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    <section className={`${styles.slides} ${'keen-slider'}`} ref={sliderRef}>
      {props.slides.map((slide) => (
        <div key={slide.id} className={styles.slide}>
          <Image
            src={slide.img}
            alt={props.description}
            className={styles.slide__image}
            width={1600}
            height={900}
            priority
          />
        </div>
      ))}

      {loaded && instanceRef.current && (
        <>
          <Button
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          />

          <Button
            onClick={(e: React.ChangeEvent<HTMLInputElement>) => e.stopPropagation() || instanceRef.current?.next()}
          />
        </>
      )}

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            );
          })}
        </div>
      )}
    </section>
  );
}
