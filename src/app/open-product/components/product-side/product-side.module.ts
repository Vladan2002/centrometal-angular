import {NgModule} from '@angular/core';
import {ProductSideComponent} from './product-side.component';
import {NewsletterModule} from '../../../../shared/newsletter/newsletter.module';

@NgModule({
  declarations: [ProductSideComponent],
  imports: [
    NewsletterModule
  ],
  exports: [ProductSideComponent]
})
export class ProductSideModule { }
