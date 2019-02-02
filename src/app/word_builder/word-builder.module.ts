import {NgModule} from '@angular/core';
import {BuilderComponent} from './components/builder.component';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ListedSensesComponent} from './components/listed-senses.component';
import {GroupedSensesComponent} from './components/grouped-senses.component';

@NgModule({
  declarations: [
    ListedSensesComponent,
    GroupedSensesComponent,
    BuilderComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class WordBuilderModule {}
