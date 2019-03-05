import {NgModule} from '@angular/core';
import {ID_SERVICE} from '../../../service/word_builder/tokens';
import {IDServiceImpl} from '../../../service/word_builder/id.service.class';
import {CommonModule} from '@angular/common';
import {ListedSensesModule} from '../listed_senses/listed-senses.module';

@NgModule({
  providers: [{provide: ID_SERVICE, useClass: IDServiceImpl}],
  imports: [CommonModule, ListedSensesModule]
})
export class WordBuilderModule {
}
