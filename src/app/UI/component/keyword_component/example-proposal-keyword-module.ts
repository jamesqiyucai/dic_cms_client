import {NgModule} from '@angular/core';
import {ExampleProposalKeywordComponent} from './example-proposal-keyword-component';
import {ToolkitModule} from '../../toolkit/toolkit.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [ToolkitModule, CommonModule],
  declarations: [ExampleProposalKeywordComponent],
  exports: [
    ExampleProposalKeywordComponent
  ]
})
export class ExampleProposalKeywordModule {}
