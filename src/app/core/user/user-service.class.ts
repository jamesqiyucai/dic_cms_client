import {Injectable} from '@angular/core';
import {UserService} from './user-service.interface';

@Injectable()
export class UserServiceImpl implements UserService {
  private user: number;

  public setUser(id: number) {
    this.user = id;
  }

  public getUser(): number {
    return this.user;
  }
}
