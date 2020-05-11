import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleProposalTranslationComponentModel} from './example-proposal-translation-component-model';

@Component({
  selector: 'app-translation',
  templateUrl: './example-proposal-translation-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalTranslationComponent {
  @Input() public model: ExampleProposalTranslationComponentModel;
  constructor() {
    this.model = new ExampleProposalTranslationComponentModel();
  }
  public onTextChange(newText: string) {
    if (this.model) {
      this.model.text = newText;
    }
  }
}
