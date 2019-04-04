import {Component} from '@angular/core';
import {ExampleSourceType} from '../../event/example_source_type/example-source-type.class';

@Component({
  selector: 'app-illustration-constructor',
  template: `
    <div>
      <app-example-editor (sourceChosen)="setSourceType($event)">
        <app-example-source-paperbook *ngIf="isPaperbook"></app-example-source-paperbook>
        <app-example-source-newspaper *ngIf="isNewspaper"></app-example-source-newspaper>
      </app-example-editor>
    </div>
  `
})
export class IllustrationConstructorComponent {
  private sourceInstruction = new ExampleSourceType(false, false);
  public setSourceType($event: ExampleSourceType) {
    console.log('called');
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
