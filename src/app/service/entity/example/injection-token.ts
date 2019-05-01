import {InjectionToken} from '@angular/core';
import {ExampleService} from './example-service.interface';

export const EXAMPLE_SERVICE = new InjectionToken<ExampleService>('EXAMPLE_SERVICE');
