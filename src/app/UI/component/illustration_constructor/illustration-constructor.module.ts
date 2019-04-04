import {NgModule} from '@angular/core';
import {IllustrationConstructorComponent} from './illustration-constructor.component';
import {ExampleEditorModule} from '../example_editor/example-editor.module';
import {ExampleSourceModule} from '../example_source/example-source.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, ExampleEditorModule, ExampleSourceModule],
  declarations: [IllustrationConstructorComponent],
  exports: [IllustrationConstructorComponent]
})
export class IllustrationConstructorModule {}
