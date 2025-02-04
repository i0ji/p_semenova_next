import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from 'public';

export default function Home() {
  //CONSOLE
  console.log('v: 0.3.3/04.02.25');

  return (
    <>
      <Header />
      {SlideData.map((slides: SlideModelNamespace.SlidesDataModel) => (
        <Slides
          key={slides.id}
          slides={slides.slides}
          description={slides.description}
        />
      ))}
      {/* <Slides
        key={SlideData[0].id}
        slides={SlideData[0].slides}
        description={SlideData[0].description}
      />
      OPTION for one slide set test  */}
      <Footer />
    </>
  );
}
