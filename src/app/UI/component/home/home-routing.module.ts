import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExampleProposalConstructorModule} from "../example_proposal_constructor_component/example-proposal-constructor-module";
import {HomeComponent} from "./home.component";

const homeRoutes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'construct-proposals',
        loadChildren: () => import('../example_proposal_constructor_component/example-proposal-constructor-module').then(m => m.ExampleProposalConstructorModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    ExampleProposalConstructorModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
