import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {}
