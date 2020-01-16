import {NgModule} from '@angular/core';
import {KeywordComponent} from './keyword-component';
import {ToolkitModule} from '../../toolkit/toolkit.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [ToolkitModule, CommonModule],
  declarations: [KeywordComponent],
  exports: [
    KeywordComponent
  ]
})
export class KeywordModule {}
