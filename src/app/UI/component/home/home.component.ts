import {Component, Inject} from '@angular/core';
import {USER_SERVICE, UserService} from '../../../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(@Inject(USER_SERVICE) private userService: UserService) {}

  private showReview() {
    return this.userService.getCurrentUser() === 1;
  }

  private onLogOut() {

  }
}
