import {NgModule} from '@angular/core';
import {TranslationComponent} from './translation-component';
import {ToolkitModule} from '../../toolkit/toolkit.module';

@NgModule({
  imports: [ToolkitModule],
  declarations: [TranslationComponent],
  exports: [TranslationComponent]
})
export class TranslationModule {}
