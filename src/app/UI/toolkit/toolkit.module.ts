import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {BurgerIconComponent} from './burger_icon';
// import {SidebarComponent} from './sidebar';
// import { InputboxComponent } from './inputbox';
// import { OptionsComponent } from './options';
// import { OptionDirective } from './options/option.directive';
import {EditableDivDirective} from './editable-div/editable-div.directive';
import {TextInputComponent} from './text_input_component/text-input-component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EditableDivDirective,
    TextInputComponent,
  ],
  exports: [
    EditableDivDirective,
    TextInputComponent,
  ]
})
export class ToolkitModule {}
