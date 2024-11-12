import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from '@/assets';

export default function Home() {
  console.log('v: 0.0.2a');

  return (
    <>
      <Header />
      {SlideData.map((slides: SlidesModel) => (
        <section key={slides.id}>
          <Slides
            slides={slides.slides}
            description={slides.description}
            lastSlide={slides.lastSlide}
          />
        </section>
      ))}
      <Footer />
    </>
  );
}
