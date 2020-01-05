import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExampleProposalConstructorComponent} from '../proposal_constructor/example-proposal-constructor.component';
import {ExampleProposalApproverComponent} from '../example_proposal_approver_component/example-proposal-approver.component';
import {HomeComponent} from './home.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'proposals/new', component: ExampleProposalConstructorComponent},
      { path: 'proposals/review', component: ExampleProposalApproverComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
