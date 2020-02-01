import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {ExampleProposalConstructorModule} from "../example_proposal_constructor_component/example-proposal-constructor-module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ExampleProposalConstructorModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
