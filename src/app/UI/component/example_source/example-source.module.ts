import {NgModule} from '@angular/core';
import {ExampleSourceNewspaperComponent} from './example_source_newspaper/example-source-newspaper.component';
import {ExampleSourcePaperbookComponent} from './example_source_paperbook/example-source-paperbook.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ExampleSourceNewspaperComponent, ExampleSourcePaperbookComponent],
  exports: [ExampleSourcePaperbookComponent, ExampleSourceNewspaperComponent]
})
export class ExampleSourceModule {}
