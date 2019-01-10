export interface Phonetic {
  region: number;
  symbol: string;
  changeRegion(newRegion: number): number;
  changeSymbol(newSymbol: string): string;
}
