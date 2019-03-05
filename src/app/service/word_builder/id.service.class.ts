import {ModelType} from './model-type.enum';

export class IDServiceImpl {
  private senseID = 0;
  private exampleID = 0;
  private storyID = 0;
  public getID(type: number): number {
    switch (type) {
      case ModelType.sense:
        this.senseID += 1;
        return this.senseID;
      case ModelType.example:
        this.exampleID += 1;
        return this.exampleID;
      case ModelType.story:
        this.storyID += 1;
        return this.storyID;
      default:
        throw new Error('TYPE NOT FOUND');
    }
  }
}
