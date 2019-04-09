export interface ExampleEditor {
  createNewExample(): void;
  loadExample(id: number): void;
  deleteCurrentExample(): void;
  modifyCurrentExample(): void;
}
