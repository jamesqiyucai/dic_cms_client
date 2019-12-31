import {AbstractExceptionTranslator, AppError} from '../remote_resource';

export class ProposalExceptionTranslator extends AbstractExceptionTranslator<any> {
  protected createAppError(statusCode: number, errorCode: number, properties: any): AppError {
    return undefined;
  }
}

