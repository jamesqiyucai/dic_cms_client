import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ListManipulatorComponent} from './list-manipulator-component';
import {ListElementContainerComponent} from '../list_manipulator_element_container/list-element-container-component';

@NgModule({
  imports: [CommonModule, DragDropModule],
  declarations: [ListManipulatorComponent, ListElementContainerComponent],
  exports: [ListManipulatorComponent],
})
export class ListManipulatorModule {}
