import {Injectable} from '@angular/core';
import {UserService} from './user-service';

@Injectable()
export class UserServiceImpl implements UserService {
  private user?: number;
  private userNames: Map<number, string>;

  constructor() {
    this.userNames = new Map();
    this.userNames.set(1, 'Jason Chu');
    this.userNames.set(2, 'Alex Sun');
  }

  public setUser(id: number) {
    this.user = id;
  }

  public getCurrentUser(): number {
    if (this.user) {
      return this.user;
    } else {
      throw new Error('user not designated');
    }
  }

  public getUser(id: number) {
    const userName = this.userNames.get(id);
    if (userName) {
      return userName;
    } else {
      throw new Error('can not get user name');
    }
  }
}
