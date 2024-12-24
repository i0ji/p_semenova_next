import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from 'public';

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
