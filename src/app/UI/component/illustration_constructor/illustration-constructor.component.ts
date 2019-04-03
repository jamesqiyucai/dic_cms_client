import {Component} from '@angular/core';

@Component({
  selector: 'app-illustration-constructor',
  template: `
    <div>
      <app-example-editor>
        <app-example-source-paperbook></app-example-source-paperbook>
        <app-example-source-newspaper></app-example-source-newspaper>
      </app-example-editor>
    </div>
  `
})
export class IllustrationConstructorComponent {}
