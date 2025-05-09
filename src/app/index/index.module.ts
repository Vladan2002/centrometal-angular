import{IndexComponent} from './index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideModule} from './side/side.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SideModule],
  exports: [IndexComponent]

})
export class IndexModule { }
