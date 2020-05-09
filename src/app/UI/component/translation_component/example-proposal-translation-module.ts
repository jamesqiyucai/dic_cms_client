import {NgModule} from '@angular/core';
import {ExampleProposalTranslationComponent} from './example-proposal-translation-component';
import {ToolkitModule} from '../../toolkit/toolkit.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [ToolkitModule, CommonModule],
  declarations: [ExampleProposalTranslationComponent],
  exports: [ExampleProposalTranslationComponent]
})
export class ExampleProposalTranslationModule {}
