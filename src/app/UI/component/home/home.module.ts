import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {ExampleProposalEditorModule} from '../example_proposal_editor_component/example-proposal-editor-module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ExampleProposalEditorModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
