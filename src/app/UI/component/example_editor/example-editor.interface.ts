import {StoryComp} from '../../model/story/story-comp.class';
import {ExampleSourceBookComponentModel} from '../../model/example_source_book/example-source-book-component.model';
import {ExampleSourceJournalComponentModel} from '../../model/example_source_journal/example-source-journal-component.model';

export interface ExampleEditor {
  getData(): {
    exampleId: number,
    text: string,
    italic: Array<[number, number]>,
    keywords: Array<string>,
    translations: Array<string>,
    stories: Array<StoryComp>,
    note: string,
    comment: string,
    source: ExampleSourceBookComponentModel & ExampleSourceJournalComponentModel
  };
  fillData(
    exampleId: number,
    text: string,
    italic: Array<[number, number]>,
    keywords: Array<string>,
    translations: Array<string>,
    stories: Array<StoryComp>,
    note: string,
    comment: string,
    source: ExampleSourceBookComponentModel & ExampleSourceJournalComponentModel
  ): void;

  createPersistentExampleProposal();
  loadPersistentExampleProposal(id: number): void;

  loadPersistentExample(id: number): void;

  refresh(): void;
}
