import {NgModule} from '@angular/core';
import {ExampleProposalConstructorComponent} from './example-proposal-constructor.component';
import {ExampleEditorModule} from '../example_editor/example-editor.module';
import {ExampleSourceModule} from '../example_source/example-source.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, ExampleEditorModule, ExampleSourceModule],
  declarations: [ExampleProposalConstructorComponent],
  exports: [ExampleProposalConstructorComponent]
})
export class ExampleProposalConstructorModule {}
