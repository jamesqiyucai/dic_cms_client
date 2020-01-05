import {Component} from '@angular/core';
import {AbstractPresenterContent} from '../example_presenter_component/abstract-presenter-content';

@Component({
  selector: 'app-proposal-presenter',
  templateUrl: './example-proposal-presenter-component.html'
})
export class ExampleProposalPresenterComponent extends AbstractPresenterContent {}
