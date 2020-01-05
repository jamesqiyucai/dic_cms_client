import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleProposalEditorComponent} from './example-proposal-editor-component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ToolkitModule} from '../../toolkit/toolkit.module';
import {ExampleSourceModule} from '../source_component/example-source.module';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../service/entity/example_proposal/injection-token';
import {ExampleProposalServiceImplementation} from '../../../service/entity/example_proposal/example-proposal.service.implementation';
import {ExampleSourceJournalComponent} from '../source_component/example_source_journal/example-source-journal.component';
import {ExampleSourceBookComponent} from '../source_component/example_source_book/example-source-book.component';

@NgModule({
  imports: [CommonModule, DragDropModule, ToolkitModule, ExampleSourceModule],
  declarations: [ExampleProposalEditorComponent],
  providers: [{provide: EXAMPLE_PROPOSAL_SERVICE, useClass: ExampleProposalServiceImplementation}],
  entryComponents: [ExampleSourceJournalComponent, ExampleSourceBookComponent],
  exports: [ExampleProposalEditorComponent]
})
export class ExampleEditorModule {}
