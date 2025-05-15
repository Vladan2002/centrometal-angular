import{IndexComponent} from './index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideModule} from './components/side/side.module';
import {MainContentModule} from './components/main-content/main-content.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SideModule, MainContentModule],
  exports: [IndexComponent]

})
export class IndexModule { }
