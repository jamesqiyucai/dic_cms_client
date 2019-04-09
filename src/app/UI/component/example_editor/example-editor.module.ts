import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleEditorComponent} from './example-editor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ToolkitModule} from '../../../toolkit/toolkit.module';
import {ExampleSourceModule} from '../example_source/example-source.module';

@NgModule({
  imports: [CommonModule, DragDropModule, ToolkitModule, ExampleSourceModule],
  declarations: [ExampleEditorComponent],
  exports: [ExampleEditorComponent]
})
export class ExampleEditorModule {}
