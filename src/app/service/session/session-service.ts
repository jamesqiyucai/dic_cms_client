import * as base64 from 'base64-js';
import {Injectable} from "@angular/core";

@Injectable()
export class SessionService {
  public async respond(challenge: string) {
    challenge = challenge + '==';
    let tuple = new Int8Array(base64.toByteArray(challenge).buffer);
    let answer = new Int8Array(32);
    let buffer = new Int8Array(32);
    let base = tuple.subarray(0, 32);
    for (let i = 0; i < 32; i++) {
      find_code:
      for (; ; ) {
        for (let j = 0; j < 256; j++) {
          let c = j;
          for (let t = 0; t < 32; t++) {
            buffer[t] = base[t];
          }
          for (let k = 0; k < 32; k++) {
            buffer[k] ^= c;
          }
          const hashedResult = await crypto.subtle.digest('SHA-256', buffer);
          buffer = new Int8Array(hashedResult, 0, 32);
          if (((buffer[i] ^ tuple[i]) & 31) == 0) {
            answer[i] = c;
            break find_code;
          }
        }
        throw new Error();
      }
      for (let n = 0; n < 32; n++) {
        base[n] = buffer[n];
      }
    }
    return base64.fromByteArray(new Uint8Array(buffer.buffer));
  }
}
