import {ExceptionTranslator} from './exception-translator';
import {AppError} from './app-error';

export abstract class AbstractExceptionTranslator<T> implements ExceptionTranslator {
  protected abstract createAppError(statusCode: number, errorCode: number, properties: T): AppError;
  protected parseRemoteError(statusCode: number, body: any) {
    const parsedBody: {
      code: number,
      message: string,
      properties: T,
    } = JSON.parse(body);
    return this.createAppError(statusCode, parsedBody.code, parsedBody.properties);
  }
  public getAppError(statusCode: number, body: any): AppError {
    return this.parseRemoteError(statusCode, body);
  }
}
