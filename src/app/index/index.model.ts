import{IndexComponent} from './index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideModel} from './components/side/side.model';
import {MainContentModule} from './components/main-content/main-content.modul';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SideModel, MainContentModule],
  exports: [IndexComponent]

})
export class IndexModule { }
