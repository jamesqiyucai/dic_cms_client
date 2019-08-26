import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
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
