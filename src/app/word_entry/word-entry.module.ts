import {NgModule} from '@angular/core';
import {WordEntryExplanationComponent} from './components/word-entry-explanation.component';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    WordEntryExplanationComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class WordEntryModule {}
