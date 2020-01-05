import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {HttpClientModule} from '@angular/common/http';
import {USER_SERVICE} from './user/injection-token';
import {UserServiceImpl} from './user/user-service-impl';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    {provide: USER_SERVICE, useClass: UserServiceImpl},
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
