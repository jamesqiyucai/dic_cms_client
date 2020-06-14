import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDesignatorComponent} from './user-designator.component';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../../../core/core.module';

@NgModule({
  imports: [CommonModule, RouterModule, CoreModule],
  declarations: [UserDesignatorComponent],
  exports: [
    UserDesignatorComponent
  ],
})
export class UserDesignatorModule {}
