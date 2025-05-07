import{IndexComponent} from './index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from './accordion/accordion.modul';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule,AccordionModule],
  exports: [IndexComponent]

})
export class IndexModule { }
