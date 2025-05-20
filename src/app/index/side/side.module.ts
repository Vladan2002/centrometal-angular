import {SideComponent} from './side.component';
import{NgModule} from '@angular/core';
import {AccordionModule} from './accordion/accordion.module';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        AccordionModule,
        CommonModule
    ],
  declarations: [SideComponent],
  exports: [SideComponent]
})
export class SideModule {}
