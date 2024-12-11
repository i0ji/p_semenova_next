import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from 'public';
import { SlidesDataModel } from '@/services/declarations';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  console.log('v: 0.1.6 a');
  console.log('font/favico path issues');
  
  return (
    <>
      <Header />
      {SlideData.map((slides: SlidesDataModel) => (
        <Slides
          key={slides.id}
          slides={slides.slides}
          description={slides.description}
          lastSlide={slides.lastSlide}
        />
      ))}
      <Footer />
    </>
  );
}
