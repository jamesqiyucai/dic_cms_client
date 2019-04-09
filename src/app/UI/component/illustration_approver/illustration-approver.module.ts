import {NgModule} from '@angular/core';
import {IllustrationApproverComponent} from './illustration-approver.component';
import {ExampleEditorModule} from '../example_editor/example-editor.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, ExampleEditorModule],
  declarations: [IllustrationApproverComponent]
})
export class IllustrationApproverModule {}
