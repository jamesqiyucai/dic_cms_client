import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ListManipulatorComponent} from './list-manipulator-component';
import {ListManipulatorElementDirective} from './list_manipulator_element/list-manipulator-element-directive';

@NgModule({
  imports: [CommonModule, DragDropModule],
  declarations: [ListManipulatorComponent, ListManipulatorElementDirective],
  exports: [ListManipulatorComponent],
})
export class ListManipulatorModule {}
