import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from 'public';
import { SlidesDataModel } from '@/services/declarations';


export default function Home() {
  console.log('v: 0.1.0 a');




  return (
    <>
      <Header />
      yml:v18
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
