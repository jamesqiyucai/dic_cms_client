import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BurgerIconComponent} from './burger_icon';
import {SidebarComponent} from './sidebar';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BurgerIconComponent,
    SidebarComponent,
  ],
  exports: [
    BurgerIconComponent,
    SidebarComponent,
  ]
})
export class ToolkitModule {}
