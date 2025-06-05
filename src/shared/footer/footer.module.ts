import {NgModule} from '@angular/core';
import {FooterComponent} from './footer.component';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterLink],
  providers: [],
  exports: [FooterComponent]
})
export class FooterModule {}
