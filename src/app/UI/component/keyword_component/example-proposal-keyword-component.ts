import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleProposalKeywordComponentModel} from './example-proposal-keyword-component-model';

@Component({
  selector: 'app-keyword',
  templateUrl: './example-proposal-keyword-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalKeywordComponent {
  @Input() public model: ExampleProposalKeywordComponentModel;
  constructor() {
    this.model = new ExampleProposalKeywordComponentModel();
  }
  public onTextChange(newText: string) {
    if (this.model) {
      this.model.text = newText;
    }
  }
}
