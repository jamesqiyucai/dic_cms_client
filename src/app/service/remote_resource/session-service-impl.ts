import {Inject, Injectable} from '@angular/core';
import {REMOTE_RESOURCE_FACTORY} from './remote-resource-factory';
import {RemoteResourceFactory} from './remote-resource-factory';
import {Resource} from './resource';
import {from, Observable} from 'rxjs';
import {SessionExceptionTranslator} from './session-exception-translator';
import {map, mergeMap} from 'rxjs/operators';
import {SessionService} from './session-service';
import {ValidationResponseBody} from './validation-response-body';
import {SessionOption} from './session-option';
import {SessionEstablisher} from './session-establisher';
import {toByteArray} from 'base64-js';
import {fromByteArray} from 'base64-js';

interface ValidationRequestBody {
  challenge: string;
  response: string;
  identifier: string;
}

@Injectable()
export class SessionServiceImpl implements SessionService, SessionEstablisher {
  private readonly _identifier: string;
  private ongoingSessionEstablishment: Observable<string> | undefined;
  private sessionResource: Resource;
  constructor(@Inject(REMOTE_RESOURCE_FACTORY) private rrf: RemoteResourceFactory) {
    this._identifier = `${Math.random()}`;
    this.rrf.sessionEstablisher = this;
    this.sessionResource = rrf.bind('api/sessions', new SessionExceptionTranslator(), SessionOption.none);
  }
  private get identifier() {
    return this._identifier;
  }
  private async respond(challenge: string) {
    challenge = challenge + '==';
    const tuple = new Int8Array(toByteArray(challenge).buffer);
    const answer = new Int8Array(32);
    let buffer = new Int8Array(32);
    let base = Int8Array.from(tuple.subarray(0, 32));

    for (let i = 0; i < 32; i++) {
      find_code:
        for (; ; ) {
          for (let j = 0; j < 256; j++) {
            const c = j;
            buffer = Int8Array.from(base.subarray(0, 32));
            for (let k = 0; k < 32; k++) {
              // tslint:disable-next-line:no-bitwise
              buffer[k] = buffer[k] ^ c;
            }
            buffer = new Int8Array(await crypto.subtle.digest('SHA-256', buffer));
            // tslint:disable-next-line:no-bitwise
            if (((buffer[i] ^ tuple[i]) & 31) === 0) {
              answer[i] = c;
              // tslint:disable-next-line:no-bitwise
              break find_code;
            } else {
              // tslint:disable-next-line:no-bitwise
            }
          }
          throw new Error();
        }
      base = Int8Array.from(buffer.subarray(0, 32));
    }
    const respond = fromByteArray(new Uint8Array(answer.buffer));
    return respond.substring(0, respond.length - 1);
  }
  private getChallenge(): Observable<{challenge: string}> {
    return this.sessionResource.get<{challenge: string}>('/challenge', {});
  }
  private validateAnswer(challenge: string, answer: string) {
    const request: ValidationRequestBody = {
      challenge: challenge,
      response: answer,
      identifier: this.identifier
    };
    return this.sessionResource.post<ValidationRequestBody, ValidationResponseBody>(request);
  }
  public establishSession() {
    if (this.ongoingSessionEstablishment === undefined) {
      this.rrf.clearSession();
      const result = this.getChallenge()
        .pipe(
          mergeMap(response => from(this.respond(response.challenge)).pipe(map(val => {
            return {
              challenge: response.challenge,
              answer: val
            };
          }))),
          mergeMap(response => this.validateAnswer(response.challenge, response.answer)),
          map((response) => {
            if (!response) {
              throw new Error('Response body is empty after validating answer');
            } else {
              this.ongoingSessionEstablishment = undefined;
              this.rrf.setSession(response.session);
              return response.session;
            }
          })
        );
      result.subscribe();
      this.ongoingSessionEstablishment = result;
      return result;
    } else {
      return this.ongoingSessionEstablishment;
    }
  }
}
