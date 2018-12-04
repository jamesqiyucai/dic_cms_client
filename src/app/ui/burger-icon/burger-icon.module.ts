import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerIconComponent } from './burger-icon/burger-icon.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BurgerIconComponent
  ],
  exports: [
    BurgerIconComponent
  ]
})
export class BurgerIconModule {}
