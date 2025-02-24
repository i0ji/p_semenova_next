import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from 'public';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  return (
    <>
      <Header />
      {SlideData.map((slides: SlideModelNamespace.SlidesDataModel) => (
        <Slides
          key={uuidv4()}
          slides={slides.slides}
          description={slides.description}
          lastSlide={slides.lastSlide}
        />
      ))}
      <Footer />
    </>
  );
}