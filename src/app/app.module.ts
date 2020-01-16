import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { ToolkitModule } from './UI/toolkit/toolkit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserDesignatorModule} from './UI/component/user_designator/user-designator.module';
import {AppRoutingModule} from './routing/app-routing.module';
import {HomeModule} from './UI/component/home/home.module';
import {InternalServerErrorLoggerModule} from './UI/component/internal_server_error_logger/internal-server-error-logger.module';
import {CommonModule} from '@angular/common';
import {ExampleProposalServiceModule} from './service/proposal/example-proposal-service-module';
import {RemoteResourceModule} from './service/remote_resource/remote-resource-module';

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
    HomeModule,
    AppRoutingModule,
    InternalServerErrorLoggerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
