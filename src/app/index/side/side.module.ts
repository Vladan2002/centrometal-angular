import {SideComponent} from './side.component';
import{NgModule} from '@angular/core';
import {AccordionModule} from './accordion/accordion.module';
import {NgForOf} from "@angular/common";

@NgModule({
    imports: [
        AccordionModule,
        NgForOf
    ],
  declarations: [SideComponent],
  exports: [SideComponent]
})
export class SideModule {}
