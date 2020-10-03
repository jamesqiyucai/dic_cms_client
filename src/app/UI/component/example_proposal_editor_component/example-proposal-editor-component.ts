import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {List} from 'immutable';
import {SourceType} from '../../../service/proposal';
import {ExampleProposalEditorModelImpl} from './example-proposal-editor-model-impl';
import {ExampleProposalEditorBookSourceModelImpl} from '../example_proposal_editor_source/book_source/example-proposal-editor-book-source-model-impl';
import {ExampleProposalEditorJournalSourceModelImpl} from '../example_proposal_editor_source/journal-source/example-proposal-editor-journal-source-model-impl';
import {getProposalSourceType} from '../../../source-type';
import {ProposalDocumentFakeImpl} from '../../../service/proposal/document/proposal-document-fake-impl';

@Component({
  selector: 'app-example-proposal-editor',
  templateUrl: './example-proposal-editor-component.html',
  styleUrls: ['./example-proposal-editor-component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalEditorComponent {
  @Input() public model: ExampleProposalEditorModelImpl;
  constructor() {
    this.model = new ExampleProposalEditorModelImpl(new ProposalDocumentFakeImpl());
  }
  public onItalicsChange(newRanges: List<[number, number]>) {
    if (this.model) {
      this.model.italics = newRanges;
    }
  }
  public onTextChange(newText: string) {
    this.model.text = newText;
  }
  public onNoteChange(newNote: string) {
    this.model.note = newNote;
  }
  public onCommentChange(newComment: string) {
    if (this.model) {
      this.model.comment = newComment;
    }
  }
  public onSourceChoose(type: string | null) {
    if (this.model) {
      if (type) {
        this.model.setSource(getProposalSourceType(type));
      } else {
        this.model.setSource(null);
      }
    } else {
      throw new Error('model is not defined');
    }
  }
  public displaySource(type: string) {
    return this.model?._sourceModel?.type.toString() === type;
  }
  public get bookSourceComponentModel() {
    if (this.model) {
      if (this.model._sourceModel?.type === SourceType.Book) {
        return <ExampleProposalEditorBookSourceModelImpl>this.model._sourceModel;
      } else {
        throw new Error('wrong type of source');
      }
    }
  }
  public get journalSourceComponentModel() {
    if (this.model) {
      if (this.model._sourceModel?.type === SourceType.Journal) {
        return <ExampleProposalEditorJournalSourceModelImpl>this.model._sourceModel;
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
