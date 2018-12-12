import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditEntryComponent} from './pages/editEntry/edit-entry.component';
import {NewEntryComponent} from './pages/newEntry/new-entry.component';
import {EntryNameComponent} from './components/entryBasicInfo/entry-name.component';
import {NewEntryService} from './shared/new-entry.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NewEntryComponent,
    EditEntryComponent,
  ],
  providers: [NewEntryService]
})
export class EditorModule {}
