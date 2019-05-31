import {Component, Inject, OnInit} from '@angular/core';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';

@Component({
  selector: 'app-user-designator',
  templateUrl: './user-designator.component.html'
})
export class UserDesignatorComponent implements OnInit {
  constructor(@Inject(USER_SERVICE) private userService: UserService) {}

  private onUserChosen(user: string) {
    this.userService.setUser(parseInt(user, 10));
  }

  ngOnInit(): void {
    this.userService.setUser(1);
  }
}

