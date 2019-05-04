import {Component, Inject, Input, OnInit} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceJournalComponentModel} from '../../../model/example_source_journal/example-source-journal-component.model';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../../service/entity/example_proposal/injection-token';
import {ExampleProposalService} from '../../../../service/entity/example_proposal/example-proposal.service';

@Component({
  selector: 'app-example-source-newspaper',
  templateUrl: './example-source-journal.component.html',
})
export class ExampleSourceJournalComponent extends SourceComponent implements OnInit{
  protected sourceInfo: ExampleSourceJournalComponentModel;

  constructor(@Inject(EXAMPLE_PROPOSAL_SERVICE) private exampleProposalService: ExampleProposalService) {
    super();
  }

  ngOnInit(): void {
    this.sourceInfo = new ExampleSourceJournalComponentModel('', null, null, null, null);
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
    this.sourceInfo = new ExampleSourceJournalComponentModel(
      author,
      title,
      passageTitle,
      `${publishingDate.slice(0, 3)}-${publishingDate.slice(4, 5)}-${publishingDate.slice(6, 7)}`,
      page,
    );
  }

  public deleteSource(): void {}

  public get passageTitle() {
    return this.sourceInfo.passageTitle;
  }

  public changePassageTitle(newTitle: string) {
    this.sourceInfo.passageTitle = newTitle;
  }

  public get pageNumber() {
    return this.sourceInfo.pageNumber;
  }

  public changePageNumber(newNumber: string) {
    this.sourceInfo.page = +newNumber;
  }

  public get publishingDate() {
    return this.sourceInfo.publishingDate;
  }

  public getPublishingDateWithoutDash() {
    return this.sourceInfo.publishingDate.replace(/-/g, '');
  }

  public dateChange(newDate: string) {
    this.sourceInfo.publishingDate = newDate;
  }

  public getData() {
    return this.exampleProposalService.getNewExampleSourceJournalServ(
      this.author,
      this.title,
      this.passageTitle,
      this.getPublishingDateWithoutDash(),
      this.pageNumber,
    );
  }
}
