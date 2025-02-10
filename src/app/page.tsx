import { Header, Slides, Footer } from '@/components/index';
import { SlideData } from 'public';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  //CONSOLE
  console.log('v: 0.3.3a/10.02.25');

  return (
    <>
      <Header />
      {/* {SlideData.map((slides: SlidesDataModel) => (
        <Slides
          key={uuidv4()}
          slides={slides.slides}
          description={slides.description}
        />
      ))} */}

      {/*CURRENT TEST SLIDES */}
      <Slides
        key={uuidv4()}
        slides={SlideData[0].slides}
        description={SlideData[0].description}
      />
      {/* <Slides
        key={uuidv4()}
        slides={SlideData[1].slides}
        description={SlideData[1].description}
      /> */}
      <Footer />
    </>
  );
}
