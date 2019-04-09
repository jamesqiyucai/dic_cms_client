import {NgModule} from '@angular/core';
import {IllustrationModifierComponent} from './illustration-modifier.component';
import {ExampleEditorModule} from '../example_editor/example-editor.module';
import {ExampleSourceModule} from '../example_source/example-source.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, ExampleEditorModule, ExampleSourceModule],
  declarations: [IllustrationModifierComponent]
})
export class IllustrationModifierModule {}
