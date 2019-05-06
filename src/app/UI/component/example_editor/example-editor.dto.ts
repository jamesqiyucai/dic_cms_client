export interface ExampleEditorDto {
  id: number;
  version: number;
  text: string;
  format: { italics: [number, number][] };
  translations: List<string>;
  keywords: List<string>;
  comment: string;
  note: string;
  source: 
}

