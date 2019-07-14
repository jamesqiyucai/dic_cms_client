import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EXAMPLE_PROPOSAL_DATA_SERVICE} from './data_access/service/example_proposal/injection-token';
import {ExampleProposalDataService} from './data_access/service/example_proposal/example-proposal.data.service';
import {ServerErrorListener} from './data_access/server-error-listener';
import {ServerErrorListenerImplementation} from './UI/component/internal_server_error_logger/server-error-listener.implementation';
// tslint:disable-next-line:max-line-length
import {InternalServerErrorLoggerComponentInterface} from './UI/component/internal_server_error_logger/internal-server-error-logger.component.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, InternalServerErrorLoggerComponentInterface {
  constructor(
    private router: Router,
    @Inject(EXAMPLE_PROPOSAL_DATA_SERVICE) private exampleProposalDataService: ExampleProposalDataService
    ) {}

  ngOnInit(): void {
    this.router.navigate(['']);
    this.exampleProposalDataService.injectErrorListener(this.makeListener());
  }

  private makeListener(): ServerErrorListener {
    return new ServerErrorListenerImplementation(this);
  }

  logError(): void {
    this.router.navigate(['internal_server_error']);
  }

}
