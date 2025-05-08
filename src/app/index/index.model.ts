import{IndexComponent} from './index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideModel} from './side/side.model';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SideModel],
  exports: [IndexComponent]

})
export class IndexModule { }
