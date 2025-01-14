import { StaticImageData } from 'next/image';

declare global {
  namespace SlideModelNamespace {
    interface SlideModel {
      id: number;
      img?: string | StaticImageData;
      text?: string;
    }

    interface SlidesDataModel {
      slides: Array<SlideModel>;
      description: string;
      id?: number;
      lastSlide?: boolean;
    }
  }

  namespace AccordionModelNamespace {
    interface AccordionModel {
      description: string;
      plot: string;
      visibility: boolean;
    }
  }
}
