import {NgModule} from '@angular/core';
import {NewsletterComponent} from './newsletter.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [NewsletterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [NewsletterComponent]
})
export class NewsletterModule { }
