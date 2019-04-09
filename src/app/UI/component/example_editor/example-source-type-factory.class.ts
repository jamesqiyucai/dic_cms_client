import {ExampleSourceType} from './example-source-type.class';

export class ExampleSourceTypeFactory {
  public createNewspaper() {
    return new ExampleSourceType(true, false);
  }

  public createPaperbook() {
    return new ExampleSourceType(false, true);
  }

  public createNull() {
    return new ExampleSourceType(false, false);
  }
}
