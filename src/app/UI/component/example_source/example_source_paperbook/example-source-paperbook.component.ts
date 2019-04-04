import {Component, Inject} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourcePaperbookComp} from '../../../model/example_source_paperbook/example-source-paperbook-comp.class';
import {EXAMPLE_SOURCE_PAPERBOOK_FACTORY} from '../../../model/example_source_paperbook/injection-token';
import {ExampleSourcePaperbookFactory} from '../../../model/example_source_paperbook/example-source-paperbook-comp-factory.interface';
import {ExampleSourcePaperbookFactoryImpl} from '../../../model/example_source_paperbook/example-source-paperbook-comp-factory.class';

@Component({
  selector: 'app-example-source-paperbook',
  templateUrl: './example-source-paperbook.component.html',
  providers: [{provide: EXAMPLE_SOURCE_PAPERBOOK_FACTORY, useClass: ExampleSourcePaperbookFactoryImpl}]
})
export class ExampleSourcePaperbookComponent extends SourceComponent {
  protected sourceInfo: ExampleSourcePaperbookComp = this.exampleSourcePaperbookFactory.createNewSource();

  constructor(@Inject(EXAMPLE_SOURCE_PAPERBOOK_FACTORY) private exampleSourcePaperbookFactory: ExampleSourcePaperbookFactory) {
    super();
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
}
