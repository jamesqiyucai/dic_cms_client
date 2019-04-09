import {Component, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';

@Component({
  selector: 'app-illustration-modifier',
  templateUrl: './illustration-modifier.component.html'
})
export class IllustrationModifierComponent {
  @ViewChild(ExampleEditorComponent) exampleEditor: ExampleEditorComponent;
  public exampleOptions: {id: number, text: string}[];

  public loadExample(id: number) {
    this.exampleEditor.loadExample(id);
  }

  public getExamples(keyword: string) {

  }

  public modifyExample() {
    this.exampleEditor.modifyCurrentExample();
  }
}
