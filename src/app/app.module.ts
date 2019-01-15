import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {IDServiceImplementation} from './core/id.service.implementation';
import { ToolkitModule } from './toolkit/toolkit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ToolkitModule,
    BrowserAnimationsModule
  ],
  providers: [IDServiceImplementation],
  bootstrap: [AppComponent]
})
export class AppModule { }
