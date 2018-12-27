import {Phonetic} from '../service/models/phonetic/phonetic.interface';
import {List} from 'immutable';
import {EntryService} from '../service/entry-service.interface';
import {AppEvent} from '../../events/app-event.interface';
import {changeElementOrder} from '../../../helpers/changeElementOrder.function';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

export abstract class EntryBasicInfoComponent {
  private _name: string;
  private _phonetics: List<Phonetic>;
  protected constructor(private entryService: EntryService) {}
  public onInit() {
    const nameFn = (newName: string) => this._name = newName;
    this.entryService.subscribeNameChange(nameFn);
    const phoneticFn = (newPhonetics: List<Phonetic>) => this._phonetics = newPhonetics;
    this.entryService.subscribePhoneticsChange(phoneticFn);
  }
  get name() {
    return this._name;
  }
  get phonetics() {
    return this._phonetics;
  }
  public onNameChange(newName: string): any {
    this._name = newName;
    const event: AppEvent<string, string> = {
      payload: newName,
      verifier: newName
    };
    this.entryService.onNameChange(event);
    this.entryService.broadcastName();
  }
  public onPhoneticsOrderChange(event: CdkDragDrop<List<Phonetic>>) {
    this._phonetics = changeElementOrder(this._phonetics, event.previousIndex, event.currentIndex);
    const appEvent: AppEvent<List<Phonetic>, List<Phonetic>> = {
      payload: this._phonetics,
      verifier: this._phonetics
    };
    this.entryService.onPhoneticsChange(appEvent);
    this.entryService.broadcastPhonetics();
  }
}
