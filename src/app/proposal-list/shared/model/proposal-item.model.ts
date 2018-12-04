export class ProposalItem {
  entry: string;
  comment: string;
  proposer: string;
  proposalDate: Date;
  constructor(entry: string, comment: string, proposer: string, proposalDate: Date) {
    this.entry = entry;
    this.comment = comment;
    this.proposer = proposer;
    this.proposalDate = proposalDate;
  }
}
