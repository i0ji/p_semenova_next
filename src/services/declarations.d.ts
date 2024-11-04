export interface ISlides {
  id: number;
  img: string;
}

export interface ISlidesData {
  slides: Array<ISlides>;
  description: string;
  id?: number;
  lastSlide?: boolean;
}

interface SlideModel {
  id: number;
  slide_name: string;
  description: string;
  image_path: string;
}
