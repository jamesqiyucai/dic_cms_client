import {NgModule} from '@angular/core';
import {ExampleSourceJournalComponent} from './example_source_journal/example-source-journal.component';
import {ExampleSourceBookComponent} from './example_source_book/example-source-book.component';
import {CommonModule} from '@angular/common';
import {SourceDirective} from './source.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ExampleSourceJournalComponent, ExampleSourceBookComponent, SourceDirective],
  exports: [ExampleSourceBookComponent, ExampleSourceJournalComponent, SourceDirective]
})
export class SourceModule {}
