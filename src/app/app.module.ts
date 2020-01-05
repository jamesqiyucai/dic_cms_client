import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { ToolkitModule } from './UI/toolkit/toolkit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ExampleProposalConstructorModule} from './UI/component/proposal_constructor/example-proposal-constructor.module';
import {UserDesignatorModule} from './UI/component/user_designator/user-designator.module';
import {ExampleProposalApproverModule} from './UI/component/example_proposal_approver_component/example-proposal-approver.module';
import {AppRoutingModule} from './routing/app-routing.module';
import {HomeModule} from './UI/component/home/home.module';
import {InternalServerErrorLoggerModule} from './UI/component/internal_server_error_logger/internal-server-error-logger.module';
import {CommonModule} from '@angular/common';

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
    ExampleProposalConstructorModule,
    UserDesignatorModule,
    ExampleProposalApproverModule,
    HomeModule,
    AppRoutingModule,
    InternalServerErrorLoggerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
