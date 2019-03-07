import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListedSensesModule} from '../listed_senses/listed-senses.module';

@NgModule({
  providers: [],
  imports: [CommonModule, ListedSensesModule]
})
export class WordBuilderModule {
}
