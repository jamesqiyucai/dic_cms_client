import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDesignatorComponent} from '../UI/component/user_designator/user-designator.component';
import {InternalServerErrorLoggerComponent} from '../UI/component/internal_server_error_logger/internal-server-error-logger.component';
import {HomeComponent} from '../UI/component/home/home.component';
import {ExampleProposalConstructorComponent} from "../UI/component/example_proposal_constructor_component/example-proposal-constructor-component";

const appRoutes: Routes = [
  { path: 'login', component: UserDesignatorComponent },
  { path: 'internal_server_error', component: InternalServerErrorLoggerComponent},
  { path: 'home', component: HomeComponent},
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
