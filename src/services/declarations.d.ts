import { StaticImageData } from 'next/image';

declare global {

  namespace SlideModelNamespace {
    interface SlideModel {
      id: number;
      img?: string | StaticImageData;
    }

    //FIXME
    interface SlidesDataModel {
      id: number;
      slides: Array<SlideModel>;
      description: string;
    }
  }

  //FIXME
  // namespace AccordionModelNamespace {
  //   interface AccordionModel {
  //     description: string;
  //     plot: string;
  //     visibility: boolean;
  //   }
  // }
}
