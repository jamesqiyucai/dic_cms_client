import {InjectionToken} from '@angular/core';
import {ExampleService} from './example.service';

export const EXAMPLE_SERVICE = new InjectionToken<ExampleService>('EXAMPLE_SERVICE');
