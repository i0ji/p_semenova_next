import { StaticImageData } from 'next/image';

declare global {
  namespace SlideModelNamespace {

    interface SlideModel {
      id: number;
      img?: string;
    }

    //FIXME
    interface SlidesDataModel {
      slides: Array<SlideModel>;
      description: string;
    }
  }

  //FIXME
  //LATER
  // namespace AccordionModelNamespace {
  //   interface AccordionModel {
  //     description: string;
  //     plot: string;
  //     visibility: boolean;
  //   }
  // }
}
