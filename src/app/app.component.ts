import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ExceptionNotifier, REMOTE_RESOURCE_FACTORY, RemoteResourceFactory} from './service/remote_resource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(REMOTE_RESOURCE_FACTORY) rrf: RemoteResourceFactory
    ) {
    // register a listener into RRF
    const handler = () => {
      this.router.navigate(['internal_server_error']);
    };
    const notifier: ExceptionNotifier = {notifyCriticalMistake: handler};
    rrf.register(notifier);
  }

  ngOnInit(): void {
    this.router.navigate(['']);
  }

}
