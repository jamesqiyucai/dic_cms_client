import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'construct-proposals',
        loadChildren: () => import('../example_proposal_constructor_component/example-proposal-constructor-module').then(m => m.ExampleProposalConstructorModule),
      }
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
