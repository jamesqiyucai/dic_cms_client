import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDesignatorComponent} from '../UI/component/user_designator/user-designator.component';
import {HomeComponent} from '../UI/component/home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: UserDesignatorComponent },
  // { path: 'home', component: HomeComponent},
  // { path: 'proposals/new', component: ExampleProposalConstructorComponent},
  // { path: 'proposals/review', component: ExampleProposalApproverComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
