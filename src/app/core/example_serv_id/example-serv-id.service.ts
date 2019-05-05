import {Injectable} from '@angular/core';
import {ExampleServiceIdentifierService} from './example-serv-id-service.interface';

@Injectable()
export class ExampleServIdServiceImpl implements ExampleServiceIdentifierService {

  private id = 0;

  public getId(): number {
    this.id += 1;
    return this.id;
  }
}
