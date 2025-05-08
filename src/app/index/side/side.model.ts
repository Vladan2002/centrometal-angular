import {SideComponent} from './side.component';
import{NgModule} from '@angular/core';
import {SideBarModule} from './side-bar/side-bar.modul';

@NgModule({
  imports: [
    SideBarModule
  ],
  declarations: [SideComponent],
  exports: [SideComponent]
})
export class SideModel {}
