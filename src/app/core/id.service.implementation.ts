export class IDServiceImplementation {
  private senseGroupID = 0;
  private baseSenseID = 0;
  private subSenseID = 0;
  private exampleID = 0;
  private storyID = 0;
  public getID(type: string): number {
    switch (type) {
      case 'SENSEGROUP':
        this.senseGroupID += 1;
        return this.senseGroupID;
      case 'BASESENSE':
        this.baseSenseID += 1;
        return this.baseSenseID;
      case 'SUBSENSE':
        this.subSenseID += 1;
        return this.subSenseID;
      case 'EXAMPLE':
        this.exampleID += 1;
        return this.exampleID;
      case 'STORY':
        this.storyID += 1;
        return this.storyID;
      default:
        throw new Error('TYPE NOT FOUND');
    }
  }
}
