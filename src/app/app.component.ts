import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServerErrorListenerImplementation} from './UI/component/internal_server_error_logger/server-error-listener.implementation';
import {REMOTE_RESOURCES_FACTORY} from './data_access/remote_resource_factory/injection-token';
import {RemoteResourcesFactory} from './data_access/remote_resource_factory/remote-resources-factory';

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
