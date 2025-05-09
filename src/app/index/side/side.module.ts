import {SideComponent} from './side.component';
import{NgModule} from '@angular/core';
import {SideBarModule} from './side-bar/side-bar.module';

@NgModule({
  imports: [
    SideBarModule
  ],
  declarations: [SideComponent],
  exports: [SideComponent]
})
export class SideModule {}
