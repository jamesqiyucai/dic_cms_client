import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleEditorComponent} from './example-editor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ToolkitModule} from '../../../toolkit/toolkit.module';
import {ExampleSourceModule} from '../example_source/example-source.module';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../service/entity/example_proposal/injection-token';
import {ExampleProposalServiceImplementation} from '../../../service/entity/example_proposal/example-proposal-service.implementation';
import {ExampleSourceJournalComponent} from '../example_source/example_source_journal/example-source-journal.component';
import {ExampleSourceBookComponent} from '../example_source/example_source_book/example-source-book.component';

@NgModule({
  imports: [CommonModule, DragDropModule, ToolkitModule, ExampleSourceModule],
  declarations: [ExampleEditorComponent],
  providers: [{provide: EXAMPLE_PROPOSAL_SERVICE, useClass: ExampleProposalServiceImplementation}],
  entryComponents: [ExampleSourceJournalComponent, ExampleSourceBookComponent],
  exports: [ExampleEditorComponent]
})
export class ExampleEditorModule {}
