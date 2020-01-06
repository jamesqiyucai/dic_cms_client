import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ListManipulatorComponent} from './list-manipulator-component';

@NgModule({
  imports: [CommonModule, DragDropModule],
  declarations: [ListManipulatorComponent],
  exports: [ListManipulatorComponent],
})
export class ListManipulatorModule {}
