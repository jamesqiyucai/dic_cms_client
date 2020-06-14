import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { ToolkitModule } from './UI/toolkit/toolkit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './routing/app-routing.module';
import {CommonModule} from '@angular/common';
import {ExampleProposalServiceModule} from './service/proposal';
import {RemoteResourceModule} from './service/remote_resource/index1';
import {UserDesignatorModule} from './UI/component/user_designator/user-designator.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ToolkitModule,
    RemoteResourceModule,
    ExampleProposalServiceModule,
    UserDesignatorModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
