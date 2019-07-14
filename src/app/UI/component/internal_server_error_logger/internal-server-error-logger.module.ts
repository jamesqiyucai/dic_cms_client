import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InternalServerErrorLoggerComponent} from './internal-server-error-logger.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InternalServerErrorLoggerComponent],
  exports: [InternalServerErrorLoggerComponent]
})
export class InternalServerErrorLoggerModule {}
