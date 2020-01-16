import {NgModule} from '@angular/core';
import {TranslationComponent} from './translation-component';
import {ToolkitModule} from '../../toolkit/toolkit.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [ToolkitModule, CommonModule],
  declarations: [TranslationComponent],
  exports: [TranslationComponent]
})
export class TranslationModule {}
