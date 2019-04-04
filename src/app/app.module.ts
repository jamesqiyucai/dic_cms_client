import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { ToolkitModule } from './toolkit/toolkit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IllustrationConstructorModule} from './UI/component/illustration_constructor/illustration-constructor.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ToolkitModule,
    IllustrationConstructorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
