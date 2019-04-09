import {Component, ViewChild} from '@angular/core';
import {ExampleSourceType} from '../../event/example_source_type/example-source-type.class';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';

@Component({
  selector: 'app-illustration-constructor',
  template: `
    <div>
      <app-example-editor (sourceChosen)="setSourceType($event)">
        <app-example-source-paperbook *ngIf="isPaperbook"></app-example-source-paperbook>
        <app-example-source-newspaper *ngIf="isNewspaper"></app-example-source-newspaper>
      </app-example-editor>
      <button (click)="createNewExample()"></button>
    </div>
  `
})
export class IllustrationConstructorComponent {
  private sourceInstruction = new ExampleSourceType(false, false);
  @ViewChild(ExampleEditorComponent) private exampleEditor: ExampleEditorComponent;

  public createNewExample() {
    this.exampleEditor.createNewExample();
  }

  public setSourceType($event: ExampleSourceType) {
    this.sourceInstruction = $event;
  }

  public get isPaperbook() {
    if (this.sourceInstruction.isPaperbook) {
      return true;
    } else {
      return false;
    }
  }

  public get isNewspaper() {
    if (this.sourceInstruction.isNewspaper) {
      return true;
    } else {
      return false;
    }
  }
}
