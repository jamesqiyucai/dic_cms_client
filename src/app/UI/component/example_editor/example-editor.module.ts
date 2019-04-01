import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleEditorComponent} from './example-editor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [CommonModule, DragDropModule],
  declarations: [ExampleEditorComponent],
  exports: [ExampleEditorComponent]
})
export class ExampleEditorModule {}
