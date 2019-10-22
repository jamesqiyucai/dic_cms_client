import {SourceService} from './source-service';

export interface BookSourceService extends SourceService {
  // constructor(
  //   author: string,
  //   title: string,
  //   public page: number,
  //   public initialPublishingYear: number,
  //   public publishedYear: number,
  //   public publishedPlace: string) {
  //   super(author, title);
  // }
//   public readonly type: ExampleSourceServiceModelTypes;
//   constructor(
//     public author: string,
//     public title: string,
//     public page: number,
//     public initialPublishingYear: number,
//     public publishedYear: number,
//     public publishedPlace: string,
// ) {
//     this.type = ExampleSourceServiceModelTypes.book;
//   }
  page: number;
  initialPublishingYear: number;
  publishedYear: number;
  publishedPlace: string;
}
