export enum SourceType {
  Book= 'book',
  Journal = 'journal',
}

export function getProposalSourceType(type: string): SourceType | null {
  let sourceType: SourceType | null = null;
  Object.keys(SourceType)
    .map(key => SourceType[(key as keyof typeof SourceType)])
    .forEach(value => {
      if (value === type) {
        sourceType = type;
      }
    });
  return sourceType;
}
