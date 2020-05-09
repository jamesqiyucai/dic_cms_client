import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleProposalEditorComponent} from './example-proposal-editor-component';
import {ToolkitModule} from '../../toolkit/toolkit.module';
import {ExampleProposalSourceModule} from '../example_proposal_source_component';
import {ExampleProposalJournalSourceComponent} from '../example_proposal_source_component/journal-source/example-proposal-journal-source.component';
import {ExampleProposalBookSourceComponent} from '../example_proposal_source_component/book_source/example-proposal-book-source.component';
import {ListManipulatorModule} from '../list_manipulator_component';
import {ExampleProposalTranslationModule} from '../translation_component';
import {ExampleProposalKeywordModule} from '../keyword_component';

@NgModule({
  imports: [CommonModule, ToolkitModule, ExampleProposalSourceModule, ListManipulatorModule, ExampleProposalTranslationModule, ExampleProposalKeywordModule],
  declarations: [ExampleProposalEditorComponent],
  entryComponents: [ExampleProposalJournalSourceComponent, ExampleProposalBookSourceComponent],
  exports: [ExampleProposalEditorComponent]
})
export class ExampleProposalEditorModule {}
