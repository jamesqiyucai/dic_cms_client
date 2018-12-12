import {Component, OnInit} from '@angular/core';
import {EntryService} from '../../shared/service/entry-service.class';

@Component({
  selector: 'app-new-entry',
  templateUrl: 'new-entry.component.html'
})
export class NewEntryComponent implements OnInit{
  private _name: string;
  constructor(private newEntryService: EntryService) {}
  ngOnInit() {
    const nameChangeHandler = (newName: string) => this.name = newName;
    this.newEntryService.entryDocument.eventBroadcaster.subscribe('nameChange', nameChangeHandler);
  }
  get name() {
    return this._name;
  }
  set name(newName: string) {
    this._name = newName;
  }
  public onNameChange(newName: string) {
    this.name = newName;
    this.newEntryService.entryDocument.name = newName;
    this.newEntryService.entryDocument.eventBroadcaster.emit('nameChange', newName);
  }
}
