import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProposalListComponent} from './containers/proposal-list/proposal-list.component';
import {ProposalItemComponent} from './components/proposal-item/proposal-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProposalListComponent,
    ProposalItemComponent
  ],
  exports: [
    ProposalListComponent,
    ProposalItemComponent
  ]
})
export class ProposalListModule {}
