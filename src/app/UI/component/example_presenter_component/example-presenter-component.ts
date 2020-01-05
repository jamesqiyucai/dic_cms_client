import {Component} from '@angular/core';
import {AbstractPresenterContent} from './abstract-presenter-content';

@Component({
  selector: 'app-example-presenter',
  templateUrl: './example-presenter-component.html'
})
export class ExamplePresenterComponent extends AbstractPresenterContent {}
