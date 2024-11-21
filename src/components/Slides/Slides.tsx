'use client';

import styles from './Slides.module.scss';
import Image from 'next/image';
import { SlidesDataModel } from '@/services/declarations';
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slides(props: SlidesDataModel) {
  return (
    <section className={styles.slides}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true
        }}
        navigation={{
          nextEl: '.swiperButtonNext',
          prevEl: '.swiperButtonPrev'
        }}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
      >
        <div className={'swiper-wrapper'}>
          {props.slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className={`${styles.slide} ${'swiper-slide'}`}
            >
              <Image
                id="image"
                src={slide.img}
                alt={props.description}
                className={styles.slide__image}
                width={1600}
                height={900}
                layout="responsive"
              />
              <div className={styles.swiperButtonPrev}></div>
              <div className={styles.swiperButtonNext}></div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <p>{props.description}</p>
    </section>
  );
}
