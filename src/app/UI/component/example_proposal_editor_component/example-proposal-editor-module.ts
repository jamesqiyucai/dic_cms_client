import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleProposalEditorComponent} from './example-proposal-editor-component';
import {ToolkitModule} from '../../toolkit/toolkit.module';
import {ExampleProposalSourceModule} from '../example_proposal_editor_source';
import {ExampleProposalEditorJournalSourceComponent} from '../example_proposal_editor_source/journal-source/example-proposal-editor-journal-source.component';
import {ExampleProposalEditorBookSourceComponent} from '../example_proposal_editor_source/book_source/example-proposal-editor-book-source.component';
import {ListManipulatorModule} from '../list_manipulator';
import {ExampleProposalTranslationModule} from '../translation_component';
import {ExampleProposalKeywordModule} from '../keyword_component';

@NgModule({
  imports: [CommonModule, ToolkitModule, ExampleProposalSourceModule, ListManipulatorModule, ExampleProposalTranslationModule, ExampleProposalKeywordModule],
  declarations: [ExampleProposalEditorComponent],
  entryComponents: [ExampleProposalEditorJournalSourceComponent, ExampleProposalEditorBookSourceComponent],
  exports: [ExampleProposalEditorComponent]
})
export class ExampleProposalEditorModule {}
