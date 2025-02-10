//LATER
//   //FIXME
// declare global {
//   namespace SlideModelNamespace {
//     interface SlideModel {
//       id: number;
//       img?: string;
//     }

//     interface SlidesDataModel {
//       slides: Array<SlideModel>;
//       description: string;
//     }
//   }

//   // namespace AccordionModelNamespace {
//   //   interface AccordionModel {
//   //     description: string;
//   //     plot: string;
//   //     visibility: boolean;
//   //   }
//   // }
// }

interface SlideModel {
  id: number;
  img: string;
}

interface SlidesDataModel {
  slides: Array<SlideModel>;
  description: string;
}
