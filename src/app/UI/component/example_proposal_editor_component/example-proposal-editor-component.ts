import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {List} from 'immutable';
import {ProposalSourceType} from '../../../service/proposal';
import {ExampleProposalEditorComponentModel} from './example-proposal-editor-component-model';
import {ExampleProposalBookSourceComponentModel} from '../example_proposal_source_component/book_source/example-proposal-book-source-component-model';
import {ExampleProposalJournalSourceComponentModel} from '../example_proposal_source_component/journal-source/example-proposal-journal-source-component-model';
import {getProposalSourceType} from '../../../service/proposal/proposal-source-type';
import {ProposalDocumentFakeImpl} from '../../../service/proposal/proposal-document-fake-impl';

@Component({
  selector: 'app-example-proposal-editor',
  templateUrl: './example-proposal-editor-component.html',
  styleUrls: ['./example-proposal-editor-component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalEditorComponent {
  @Input() public model: ExampleProposalEditorComponentModel;
  constructor() {
    this.model = new ExampleProposalEditorComponentModel(new ProposalDocumentFakeImpl());
  }
  public onItalicsChange(newRanges: List<[number, number]>) {
    if (this.model) {
      this.model.italics = newRanges;
    }
  }
  public onTextChange(newText: string) {
    if (this.model) {
      this.model.text = newText;
    }
  }
  public onNoteChange(newNote: string) {
    if (this.model) {
      this.model.note = newNote;
    }
  }
  public onCommentChange(newComment: string) {
    if (this.model) {
      this.model.comment = newComment;
    }
  }
  public onSourceChoose(type: string | null) {
    if (this.model) {
      if (type) {
        this.model.switchSource(getProposalSourceType(type));
      } else {
        this.model.switchSource(null);
      }
    } else {
      throw new Error('model is not defined');
    }
  }
  public displaySource(type: string) {
    return this.model?.sourceComponentModel?.type.toString() === type;
  }
  public get bookSourceComponentModel() {
    if (this.model) {
      if (this.model.sourceComponentModel?.type === ProposalSourceType.Book) {
        return <ExampleProposalBookSourceComponentModel>this.model.sourceComponentModel;
      } else {
        throw new Error('wrong type of source');
      }
    }
  }
  public get journalSourceComponentModel() {
    if (this.model) {
      if (this.model.sourceComponentModel?.type === ProposalSourceType.Journal) {
        return <ExampleProposalJournalSourceComponentModel>this.model.sourceComponentModel;
      } else {
        throw new Error('wrong type of source');
      }
    }
  }
  public save() {
    if (this.model) {
      this.model.save();
    } else {
      throw new Error('model is undefined thus unable to save');
    }
  }
}
