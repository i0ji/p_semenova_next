import { StaticImageData } from 'next/image';

declare global {
  namespace SlideModelNamespace {
    interface SlideModel {
      id: number;
      img?: string;
    }

    interface SlidesDataModel {
      slides: Array<SlideModel>;
      description: string;
    }
  }
}
