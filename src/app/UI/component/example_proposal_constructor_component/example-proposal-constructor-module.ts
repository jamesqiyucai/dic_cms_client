import {NgModule} from '@angular/core';
import {ExampleProposalConstructorComponent} from './example-proposal-constructor-component';
import {PROPOSAL_REPOSITORY} from '../../../service/proposal';
import {ProposalRepositoryImpl} from '../../../service/proposal/repository/proposal-repository-impl';
import {ExampleProposalEditorModule} from '../example_proposal_editor_component/example-proposal-editor-module';
import {ExampleProposalConstructorRoutingModule} from './example-proposal-constructor-routing-module';


@NgModule({
  declarations: [ExampleProposalConstructorComponent],
  providers: [{provide: PROPOSAL_REPOSITORY, useClass: ProposalRepositoryImpl}],
  imports: [
    ExampleProposalEditorModule,
    ExampleProposalConstructorRoutingModule
  ],
  exports : [ExampleProposalConstructorComponent],
})
export class ExampleProposalConstructorModule {}
