'use client';

// import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import styles from './Slides.module.scss';
// import Skeleton from 'react-loading-skeleton';
import 'react-multi-carousel/lib/styles.css';

export default function Slides(props: SlideModelNamespace.SlidesDataModel) {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   if (typeof props.slides[0].img === 'string') {
  //     const img = new globalThis.Image();
  //     img.src = props.slides[0].img;
  //     img.onload = () => setIsLoaded(true);
  //   }
  //   return () => {};
  // }, [props.slides]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // const slideSettings = {
  //   swipeable: false,
  //   draggable: false,
  //   showDots: true,
  //   responsive: responsive,
  //   ssr: true,
  //   infinite: true,
  //   // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  //   autoPlaySpeed: 1000,
  //   keyBoardControl: true,
  //   // customTransition="all .5"
  //   transitionDuration: 500,
  //   containerClass: 'carousel-container',
  //   // removeArrowOnDeviceType:{["tablet", "mobile"]},
  //   // deviceType=this.props.deviceType,
  //   dotListClass: 'custom-dot-list-style',
  //   itemClass: 'carousel-item-padding-40-px'
  // };

  const slideSettings = {
    autoPlay: true,
    showDots: true,
    ssr: true,
    infinite: true
  };

  return (
    <section className={styles.slides}>
      <Carousel {...slideSettings} responsive={responsive}>
        {props.slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <Image
              id="image"
              style={{ padding: '0 10' }}
              src={slide.img}
              alt={props.description}
              className={styles.slide__image}
              width={1600}
              height={900}
            />
          </div>
        ))}
      </Carousel>
      <p>{props.description}</p>
    </section>
  );
}

// {/* {isLoaded && (
//   <>
//     <button
//       className={styles.slide__leftArrow}
//       onClick={() => sliderRef.current?.slickPrev()}
//     />
//     <button
//       className={styles.slide__rightArrow}
//       onClick={() => sliderRef.current?.slickNext()}
//     />
//   </>
// )} */}
