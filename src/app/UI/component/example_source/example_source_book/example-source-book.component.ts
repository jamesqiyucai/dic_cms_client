import {Component, Inject, Input, OnInit} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceBookComponentModel} from '../../../model/example_source_book/example-source-book-component.model';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../../service/entity/example_proposal/injection-token';
import {ExampleProposalService} from '../../../../service/entity/example_proposal/example-proposal-service.interface';

@Component({
  selector: 'app-example-source-paperbook',
  templateUrl: './example-source-book.component.html'
})
export class ExampleSourceBookComponent extends SourceComponent implements OnInit {
  protected sourceInfo: ExampleSourceBookComponentModel;

  constructor(@Inject(EXAMPLE_PROPOSAL_SERVICE) private exampleProposalService: ExampleProposalService) {
    super();
  }

  public ngOnInit() {
    this.sourceInfo = new ExampleSourceBookComponentModel('', '', null, null, null, '');
  }

  public deleteSource(): void {}

  public get page() {
    return this.sourceInfo.page;
  }

  public changePage(newPage: string) {
    this.sourceInfo.page = Number(newPage);
  }

  public get initialPublishingYear() {
    return this.sourceInfo.initialPublishingYear;
  }

  public changeInitialPublishingYear(newYear: string) {
    this.sourceInfo.initialPublishingYear = Number(newYear);
  }

  public get publishedYear() {
    return this.sourceInfo.publishedYear;
  }

  public changePublishedYear(newYear: string) {
    this.sourceInfo.publishedYear = Number(newYear);
  }

  public get publishedPlace() {
    return this.sourceInfo.publishedPlace;
  }

  public changePublishedPlace(newPlace: string) {
    this.sourceInfo.publishedPlace = newPlace;
  }

  public fillData(
    author: string,
    title: string,
    page: number,
    initialPublishingYear?: number,
    publishedYear?: number,
    publishedPlace?: string,
    passageTitle?: string,
    publishingDate?: string
  ) {
    this.sourceInfo = new ExampleSourceBookComponentModel(
      author,
      title,
      page,
      initialPublishingYear,
      publishedYear,
      publishedPlace
    );
  }

  public getData() {
    return this.exampleProposalService.getNewExampleSourceBookServ(
      this.author,
      this.title,
      this.page,
      this.initialPublishingYear,
      this.publishedYear,
      this.publishedPlace
    );
  }
}
