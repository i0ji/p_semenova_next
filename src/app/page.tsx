import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from 'public';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <>
      <Header />
      {SlideData.map((slides: SlideModelNamespace.SlidesDataModel) => (
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
