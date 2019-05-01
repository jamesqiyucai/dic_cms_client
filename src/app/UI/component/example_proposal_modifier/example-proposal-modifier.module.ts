import {NgModule} from '@angular/core';
import {ExampleProposalModifierComponent} from './example-proposal-modifier.component';
import {ExampleEditorModule} from '../example_editor/example-editor.module';
import {ExampleSourceModule} from '../example_source/example-source.module';
import {CommonModule} from '@angular/common';
import {ExampleProposalConstructorModule} from '../example_proposal_constructor/example-proposal-constructor.module';

@NgModule({
  imports: [CommonModule, ExampleEditorModule, ExampleSourceModule, ExampleProposalConstructorModule],
  declarations: [ExampleProposalModifierComponent]
})
export class ExampleProposalModifierModule {}
