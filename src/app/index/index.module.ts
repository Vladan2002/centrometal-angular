import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideModule } from './components/side/side.module';
import {MainContentModule} from './components/main-content/main-content.modul';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SideModule, MainContentModule,
  RouterModule.forChild([
    {path:'', component: IndexComponent},
  ])],
  exports: [IndexComponent]
})
export class IndexModule { }
