import {Component, Inject} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceNewspaperComp} from '../../../model/example_source_newspaper/example-source-newspaper-comp.class';
import {ExampleSourceNewspaperFactory} from '../../../model/example_source_newspaper/example-source-newspaper-comp-factory.interface';
import {EXAMPLE_SOURCE_NEWSPAPER_FACTORY} from '../../../model/example_source_newspaper/injection-token';
import {ExampleSourceNewspaperFactoryImpl} from '../../../model/example_source_newspaper/example-source-newspaper-comp-factory.class';
import {ExampleSourceNewspaperServ} from '../../../../service/model/example-source-newspaper-serv.interface';

@Component({
  selector: 'app-example-source-newspaper',
  templateUrl: './example-source-newspaper.component.html',
  providers: [{provide: EXAMPLE_SOURCE_NEWSPAPER_FACTORY, useClass: ExampleSourceNewspaperFactoryImpl}]
})
export class ExampleSourceNewspaperComponent extends SourceComponent {
  protected sourceInfo: ExampleSourceNewspaperComp = this.exampleSourceNewspaperFactory.createNewSource();

  constructor(@Inject(EXAMPLE_SOURCE_NEWSPAPER_FACTORY) private exampleSourceNewspaperFactory: ExampleSourceNewspaperFactory) {
    super();
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
    this.sourceInfo.pageNumber = Number(newNumber);
  }

  public getPublishingDate() {
    return this.sourceInfo.getPublishingDate();
  }

  public dateChange(newDate: Date) {
    this.sourceInfo.dateChange(newDate);
  }

  public getInfo(): ExampleSourceNewspaperServ {
    return {
      author: this.author,
      title: this.title,
      passageTitle: this.passageTitle,
      publishingDate: this.getPublishingDate().getTime(),
      pageNumber: this.pageNumber
    };
  }
}
