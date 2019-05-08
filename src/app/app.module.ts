import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { ToolkitModule } from './toolkit/toolkit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ExampleProposalConstructorModule} from './UI/component/example_proposal_constructor/example-proposal-constructor.module';
import {UserDesignatorModule} from './UI/component/user_designator/user-designator.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
