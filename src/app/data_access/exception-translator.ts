import {BackendError} from './backend-error';
import {ResourceException} from './resource.exception';

export class ExceptionTranslator {
  translate(backendError: BackendError): ResourceException {
    return undefined;
  }
}
