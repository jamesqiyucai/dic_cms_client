import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ExampleProposalConstructorComponent} from "./example-proposal-constructor-component";

const routes: Routes = [
  {
    path: '',
    component: ExampleProposalConstructorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleProposalConstructorRoutingModule {}
