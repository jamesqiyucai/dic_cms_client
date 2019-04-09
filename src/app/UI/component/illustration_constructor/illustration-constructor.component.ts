import {Component, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';

@Component({
  selector: 'app-illustration-constructor',
  template: `
    <div>
      <app-example-editor></app-example-editor>
      <button (click)="createNewExample()"></button>
    </div>
  `
})
export class IllustrationConstructorComponent {
  @ViewChild(ExampleEditorComponent) private exampleEditor: ExampleEditorComponent;

  public createNewExample() {
    this.exampleEditor.createNewExample();
  }
}
