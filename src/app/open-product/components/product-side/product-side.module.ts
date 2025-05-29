import {NgModule} from '@angular/core';
import {ProductSideComponent} from './product-side.component';
import {NewsletterModule} from './newsletter/newsletter.module';

@NgModule({
  declarations: [ProductSideComponent],
  imports: [
    NewsletterModule
  ],
  exports: [ProductSideComponent]
})
export class ProductSideModule { }
