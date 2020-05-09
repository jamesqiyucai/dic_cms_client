import {NgModule} from '@angular/core';
import {ExampleProposalJournalSourceComponent} from './journal-source/example-proposal-journal-source.component';
import {ExampleProposalBookSourceComponent} from './book_source/example-proposal-book-source.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ExampleProposalJournalSourceComponent, ExampleProposalBookSourceComponent],
  exports: [ExampleProposalBookSourceComponent, ExampleProposalJournalSourceComponent]
})
export class ExampleProposalSourceModule {}
