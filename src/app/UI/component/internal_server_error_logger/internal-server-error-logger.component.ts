import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {EXAMPLE_PROPOSAL_DATA_SERVICE} from '../../../data_access/service/example_proposal/injection-token';
import {ExampleProposalDataService} from '../../../data_access/service/example_proposal/example-proposal.data.service';
import {ServerErrorListener} from '../../../data_access/server-error-listener';
import {ServerErrorListenerImplementation} from './server-error-listener.implementation';
import {InternalServerErrorLoggerComponentInterface} from './internal-server-error-logger.component.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-internal-server-error-logger',
  templateUrl: './internal-server-error-logger.component.html'
})
export class InternalServerErrorLoggerComponent {
  constructor(
    // @Inject(EXAMPLE_PROPOSAL_DATA_SERVICE) private exampleProposalDataService: ExampleProposalDataService,
    private router: Router
  ) {}

  // public ngOnInit(): void {
  //   this.exampleProposalDataService.injectErrorListener(this.makeListener());
  // }

  // private makeListener(): ServerErrorListener {
  //   return new ServerErrorListenerImplementation(this);
  // }

  public resetApplication() {
    window.location.reload();
  }

  // public logError(): void {
  //   this.router.navigate(['internal_server_error']);
  // }
}
