import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(REMOTE_RESOURCES_FACTORY) rrf: RemoteResourcesFactory
    ) {
    // register a listener into RRF
    const handler = () => {
      this.router.navigate(['internal_server_error']);
    };
    rrf.register(new ServerErrorListenerImplementation(handler));
  }

  ngOnInit(): void {
    this.router.navigate(['']);
  }

}
