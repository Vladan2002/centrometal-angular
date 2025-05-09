import {SideComponent} from './side.component';
import{NgModule} from '@angular/core';
import {AccordionModule} from './accordion/accordion.modul';
import {SideBarModule} from './side-bar/side-bar.modul';

@NgModule({
  imports: [
    AccordionModule,
    SideBarModule
  ],
  declarations: [SideComponent],
  exports: [SideComponent]
})
export class SideModel {}
