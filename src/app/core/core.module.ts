import {APP_INITIALIZER, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {OntologyServiceImplementation} from './ontology/ontology-service.implementation';
import {HttpClientModule} from '@angular/common/http';
import {API_INFLECTIONS, API_POSES, API_VARIATIONS, ONTOLOGY_SERVICE} from './tokens';
import {OntologyService} from './ontology/ontology.service.interface';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    {provide: API_POSES, useValue: 'http://localhost:3000/poses'},
    {provide: API_INFLECTIONS, useValue: 'http://localhost:3000/inflections'},
    {provide: API_VARIATIONS, useValue: 'http://localhost:3000/variations'},
    {provide: ONTOLOGY_SERVICE, useClass: OntologyServiceImplementation},
    {
      provide: APP_INITIALIZER,
      useFactory: (ontologyService: OntologyService) => function() { return ontologyService.loadPoses(); },
      deps: [ONTOLOGY_SERVICE],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (ontologyService: OntologyService) => function() { return ontologyService.loadVariations(); },
      deps: [ONTOLOGY_SERVICE],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (ontologyService: OntologyService) => function() { return ontologyService.loadInflections(); },
      deps: [ONTOLOGY_SERVICE],
      multi: true
    },
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
