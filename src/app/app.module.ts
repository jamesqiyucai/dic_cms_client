import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {IDServiceImplementation} from './core/id.service.implementation';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [IDServiceImplementation],
  bootstrap: [AppComponent]
})
export class AppModule { }
