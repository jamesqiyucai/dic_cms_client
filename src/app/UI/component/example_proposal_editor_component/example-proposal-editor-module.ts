import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleProposalEditorComponent} from './example-proposal-editor-component';
import {ToolkitModule} from '../../toolkit/toolkit.module';
import {SourceModule} from '../source_component/source-module';
import {ExampleSourceJournalComponent} from '../source_component/example_source_journal/example-source-journal.component';
import {ExampleSourceBookComponent} from '../source_component/example_source_book/example-source-book.component';
import {ListManipulatorModule} from '../list_manipulator_component/list-manipulator-module';
import {TranslationModule} from '../translation_component/translation-module';
import {KeywordModule} from '../keyword_component/keyword-module';

@NgModule({
  imports: [CommonModule, ToolkitModule, SourceModule, ListManipulatorModule, TranslationModule, KeywordModule],
  declarations: [ExampleProposalEditorComponent],
  entryComponents: [ExampleSourceJournalComponent, ExampleSourceBookComponent],
  exports: [ExampleProposalEditorComponent]
})
export class ExampleProposalEditorModule {}
