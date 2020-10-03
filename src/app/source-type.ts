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
  // Object.keys(SourceType).forEach(key => {
  //   if (SourceType[(key as keyof typeof SourceType)] === type) {
  //     sourceType = SourceType[(key as keyof typeof SourceType)];
  //   } else {
  //     throw new Error('cannot find corresponding type');
  //   }
  // });
  // return sourceType;
}
