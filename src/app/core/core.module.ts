import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {IDServiceImplementation} from './id.service.implementation';
import {OntologyServiceImplementation} from './ontology-service.implementation';

@NgModule({
  providers: [
    IDServiceImplementation,
    OntologyServiceImplementation
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
