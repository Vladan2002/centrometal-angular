import {SideComponent} from './side.component';
import{NgModule} from '@angular/core';
import {AccordionModule} from './accordion/accordion.module';
import {CommonModule} from "@angular/common";
import {SideBarModule} from './side-bar/side-bar.module';

@NgModule({
  imports: [
    SideBarModule,
      AccordionModule,
      CommonModule
  ],
  declarations: [SideComponent],
  exports: [SideComponent]
})
export class SideModule {}
