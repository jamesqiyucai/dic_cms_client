import {NgModule} from '@angular/core';
import {ListedSensesComponent} from './listed-senses.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ListedSensesComponent],
  imports: [CommonModule],
  exports: [ListedSensesComponent]
})
export class ListedSensesModule {}
