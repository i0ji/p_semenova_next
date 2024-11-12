'use client';

import { useState } from 'react';
import styles from './Slides.module.scss';
import Image from 'next/image';

export default function Slides(props: SlidesModel) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.temp}>
      {props.slides.map((slide) => (
        <div key={slide.id}>
          <Image src={slide.img} alt="" key={props.id} />
        </div>
      ))}
      <p>{props.description}</p>
    </div>
  );
}
