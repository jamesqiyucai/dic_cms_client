import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleEditorComponent} from './example-editor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ToolkitModule} from '../../../toolkit/toolkit.module';

@NgModule({
  imports: [CommonModule, DragDropModule, ToolkitModule],
  declarations: [ExampleEditorComponent],
  exports: [ExampleEditorComponent]
})
export class ExampleEditorModule {}
