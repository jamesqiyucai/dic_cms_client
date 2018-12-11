export interface Spelling {
  region: number;
  text: string;
  changeRegion(newRegion: number): number;
  changeText(newText: number): string;
}
