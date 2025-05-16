import {SideComponent} from './side.component';
import{NgModule} from '@angular/core';
import {AccordionModule} from './accordion/accordion.module';
import {SideBarModule} from './side-bar/side-bar.modul';
import {NgForOf} from "@angular/common";

@NgModule({
    imports: [
        AccordionModule,
        SideBarModule,
        NgForOf
    ],
  declarations: [SideComponent],
  exports: [SideComponent]
})
export class SideModule {}
