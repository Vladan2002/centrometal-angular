import {SideComponent} from './side.component';
import{NgModule} from '@angular/core';
import {AccordionModule} from './accordion/accordion.module';

@NgModule({
  imports: [
    AccordionModule
  ],
  declarations: [SideComponent],
  exports: [SideComponent]
})
export class SideModel {}
