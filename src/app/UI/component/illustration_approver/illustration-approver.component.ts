import {Component, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';

@Component({
  selector: 'app-illustration-approver',
  templateUrl: './illustration-approver.component.html'
})
export class IllustrationApproverComponent {
  @ViewChild(ExampleEditorComponent) exampleEditor: ExampleEditorComponent;
  public pendingExamples: Array<{submitter: string, text: string, id: number, version: number}>;

  public loadExampleProposal(id: number, version: number) {
    this.exampleEditor.loadExampleProposal(id, version);
  }

  public approve() {}

  public reject() {}
}
