import {AppError} from './app-error';
import {AbstractExceptionTranslator} from './abstract-exception-translator';

export class SessionExceptionTranslator extends AbstractExceptionTranslator<any> {
  protected createAppError(statusCode: number, errorCode: number, properties: any): AppError {
    return undefined;
  }
}
