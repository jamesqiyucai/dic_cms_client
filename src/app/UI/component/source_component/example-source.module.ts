import {NgModule} from '@angular/core';
import {ExampleSourceJournalComponent} from './example_source_journal/example-source-journal.component';
import {ExampleSourceBookComponent} from './example_source_book/example-source-book.component';
import {CommonModule} from '@angular/common';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../service/entity/example_proposal/injection-token';
import {ExampleProposalServiceImplementation} from '../../../service/entity/example_proposal/example-proposal.service.implementation';

@NgModule({
  imports: [CommonModule],
  declarations: [ExampleSourceJournalComponent, ExampleSourceBookComponent],
  providers: [{provide: EXAMPLE_PROPOSAL_SERVICE, useClass: ExampleProposalServiceImplementation}],
  exports: [ExampleSourceBookComponent, ExampleSourceJournalComponent]
})
export class ExampleSourceModule {}
