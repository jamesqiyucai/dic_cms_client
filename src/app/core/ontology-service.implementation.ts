import {Injectable} from '@angular/core';

@Injectable()
export class OntologyServiceImplementation {
  private posNumberToName: Map<number, string> = new Map([[1, 'noun']]);
  public getPosByID(id: number) {
    return this.posNumberToName.get(id);
  }
}
