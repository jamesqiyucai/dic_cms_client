import {Component, Input} from '@angular/core';
import {ProposalItem} from '../../shared/model/proposal-item.model';

@Component({
  selector: 'app-proposal-item',
  templateUrl: `./proposal-item.component.html`,
  styleUrls: [`./proposal-item.component.css`]
})
export class ProposalItemComponent {
  @Input() private proposalItem: ProposalItem;
  get entryName() {
    return this.proposalItem.entry;
  }
  get proposer() {
    return this.proposalItem.proposer;
  }
  get comment() {
    return this.proposalItem.comment;
  }
  get date() {
    return this.proposalItem.proposalDate;
  }
}
