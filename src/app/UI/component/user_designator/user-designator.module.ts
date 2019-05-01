import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDesignatorComponent} from './user-designator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserDesignatorComponent],
  exports: [
    UserDesignatorComponent
  ],
})
export class UserDesignatorModule {}
