import {ExampleSourceNewspaperServ} from './example-source-newspaper-serv.interface';
import {ExampleSourcePaperbookServ} from './example-source-paperbook-serv.interface';

export interface ExampleServ {
  text: string;
  format: {
    italic: Array<[number, number]>;
  };
  translations: string[];
  keywords: string[];
  source: ExampleSourceNewspaperServ | ExampleSourcePaperbookServ;
}
