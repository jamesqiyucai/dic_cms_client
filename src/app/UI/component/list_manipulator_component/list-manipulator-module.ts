import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ListManipulatorComponent} from './list-manipulator-component';
import {ListElementComponent} from './list_element/list-element-component';

@NgModule({
  imports: [CommonModule, DragDropModule],
  declarations: [ListManipulatorComponent, ListElementComponent],
  exports: [ListManipulatorComponent],
})
export class ListManipulatorModule {}
