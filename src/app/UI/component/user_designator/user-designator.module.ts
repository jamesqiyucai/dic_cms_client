import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDesignatorComponent} from './user-designator.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UserDesignatorComponent],
  exports: [
    UserDesignatorComponent
  ],
})
export class UserDesignatorModule {}
