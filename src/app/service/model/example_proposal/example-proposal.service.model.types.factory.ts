import {ExampleProposalPurposeServiceModelTypes} from './example-proposal-purpose.service.model.types';
import {ExampleSourceServiceModelTypes} from '../example_source/example-source.service.model.types';

export class ExampleProposalServiceModelTypesFactory {
  public get ExampleProposalPurpose() {
    return ExampleProposalPurposeServiceModelTypes;
  }
  public get ExampleProposalSourceType() {
    return ExampleSourceServiceModelTypes;
  }
}
