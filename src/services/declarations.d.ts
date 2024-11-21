import { StaticImageData } from 'next/image';

interface SlideModel {
  id: number;
  img: string | StaticImageData;
}

interface SlidesDataModel {
  slides: Array<SlideModel>;
  description: string;
  id?: number;
  lastSlide?: boolean;
}
