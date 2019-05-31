import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { ToolkitModule } from './toolkit/toolkit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ExampleProposalConstructorModule} from './UI/component/example_proposal_constructor/example-proposal-constructor.module';
import {UserDesignatorModule} from './UI/component/user_designator/user-designator.module';
import {ExampleProposalApproverModule} from './UI/component/example_proposal_approver/example-proposal-approver.module';
import {AppRoutingModule} from './routing/app-routing.module';
import {HomeModule} from './UI/component/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ToolkitModule,
    ExampleProposalConstructorModule,
    UserDesignatorModule,
    ExampleProposalApproverModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
