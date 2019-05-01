import {Injectable} from '@angular/core';
import {ExampleServIdService} from './example-serv-id-service.interface';

@Injectable()
export class ExampleServIdServiceImpl implements ExampleServIdService {

  private id = 0;

  public getId(): number {
    this.id += 1;
    return this.id;
  }
}
