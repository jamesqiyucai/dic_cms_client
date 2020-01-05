import {NgModule} from '@angular/core';
import {ExampleProposalConstructorComponent} from './example-proposal-constructor.component';
import {ExampleEditorModule} from '../example_proposal_editor_component/example-editor.module';
import {ExampleSourceModule} from '../source_component/example-source.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, ExampleEditorModule, ExampleSourceModule],
  declarations: [ExampleProposalConstructorComponent],
  exports: [ExampleProposalConstructorComponent]
})
export class ExampleProposalConstructorModule {}
