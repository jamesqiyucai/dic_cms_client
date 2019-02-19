export abstract class AbstractFactory {
  protected id = 1;
  protected incrementID(): void {
    this.id += 1;
  }
}
