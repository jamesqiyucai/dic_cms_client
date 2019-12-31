import {AppError} from './app-error';

export interface ExceptionTranslator {
  getAppError(statusCode: number, body: any): AppError;
}
