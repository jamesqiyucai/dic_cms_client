export enum ProposalSourceType {
  Book= 'book',
  Journal = 'journal',
}

export function getProposalSourceType(type: string): ProposalSourceType | null {
  let sourceType: ProposalSourceType | null = null;
  Object.keys(ProposalSourceType)
    .map(key => ProposalSourceType[(key as keyof typeof ProposalSourceType)])
    .forEach(value => {
      if (value === type) {
        sourceType = type;
      }
    });
  return sourceType;
  // Object.keys(ProposalSourceType).forEach(key => {
  //   if (ProposalSourceType[(key as keyof typeof ProposalSourceType)] === type) {
  //     sourceType = ProposalSourceType[(key as keyof typeof ProposalSourceType)];
  //   } else {
  //     throw new Error('cannot find corresponding type');
  //   }
  // });
  // return sourceType;
}
