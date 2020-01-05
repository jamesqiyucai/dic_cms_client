import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BurgerIconComponent} from './burger_icon';
import {SidebarComponent} from './sidebar';
import { InputboxComponent } from './inputbox';
import { OptionsComponent } from './options';
import { OptionDirective } from './options/option.directive';
import {EditableDivDirective} from './editable-div/editable-div.directive';
import {SourceDirective} from './source_directive/source.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EditableDivDirective,
    BurgerIconComponent,
    SidebarComponent,
    InputboxComponent,
    OptionsComponent,
    OptionDirective,
    SourceDirective
  ],
  exports: [
    EditableDivDirective,
    BurgerIconComponent,
    SidebarComponent,
    InputboxComponent,
    OptionsComponent,
    OptionDirective,
    SourceDirective
  ]
})
export class ToolkitModule {}
