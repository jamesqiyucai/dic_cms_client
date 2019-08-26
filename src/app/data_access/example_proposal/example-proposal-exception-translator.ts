import {BackendError} from '../backend-error';
import {ResourceException} from '../resource.exception';
import {BlockedProposalException} from './blocked-proposal.exception';
import {ExceptionTranslator} from '../exception-translator';

export class ExampleProposalExceptionTranslator extends ExceptionTranslator {
  translate(backendError: BackendError): ResourceException {
    if (backendError.code === 'invalid_status') {
      return new BlockedProposalException();
    } else {
      super.translate(backendError);
    }
  }
}
