import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDesignatorComponent} from '../UI/component/user_designator/user-designator.component';
import {InternalServerErrorLoggerComponent} from '../UI/component/internal_server_error_logger/internal-server-error-logger.component';
import {HomeComponent} from '../UI/component/home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: UserDesignatorComponent },
  { path: 'internal_server_error', component: InternalServerErrorLoggerComponent},
  { path: 'home', loadChildren: () => import(`../UI/component/home/home.module`).then(m => m.HomeModule)},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
