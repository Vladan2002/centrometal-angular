import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import {AccordionService} from '../../../../services/accordion.service';
@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule],
  providers: [AccordionService],
  exports: [AccordionComponent]
})
export class AccordionModule {}
