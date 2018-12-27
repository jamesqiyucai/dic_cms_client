import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BurgerIconModule} from './toolkit/burger-icon';
import {ProposalListModule} from './proposal-list/proposal-list.module';
import {SidebarModule} from './toolkit/sidebar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BurgerIconModule,
    ProposalListModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
