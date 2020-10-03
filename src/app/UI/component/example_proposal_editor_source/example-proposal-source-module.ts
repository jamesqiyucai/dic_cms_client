import {NgModule} from '@angular/core';
import {ExampleProposalEditorJournalSourceComponent} from './journal-source/example-proposal-editor-journal-source.component';
import {ExampleProposalEditorBookSourceComponent} from './book_source/example-proposal-editor-book-source.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ExampleProposalEditorJournalSourceComponent, ExampleProposalEditorBookSourceComponent],
  exports: [ExampleProposalEditorBookSourceComponent, ExampleProposalEditorJournalSourceComponent]
})
export class ExampleProposalSourceModule {}
