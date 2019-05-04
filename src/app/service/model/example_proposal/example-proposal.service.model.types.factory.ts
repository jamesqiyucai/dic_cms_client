import {ExampleProposalPurposeServiceModelTypes} from './example-proposal-purpose.service.model.types';
import {ExampleProposalSourceServiceModelType} from './example-proposal-source.service.model.type';

export class ExampleProposalServiceModelTypesFactory {
  public get ExampleProposalPurpose() {
    return ExampleProposalPurposeServiceModelTypes;
  }
  public get ExampleProposalSourceType() {
    return ExampleProposalSourceServiceModelType;
  }
}
