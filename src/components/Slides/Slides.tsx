import styles from './Slides.module.scss';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { SlideData } from '@/assets';
// import Image from 'next/image';

// import dynamic from 'next/dynamic';

// const DynamicSlider = dynamic(() => import('react-slick'), {
//   ssr: false, // Disable server-side rendering for this component
// });

import a1 from '@/assets/AnniversarySlides/a1.webp';

export default function Slides() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <div className={styles.temp}>
      {/* <Slider {...settings}> */}
   <img src={a1.src} alt="" />
      {/* </Slider> */}
    </div>
  );
}
