import {NgModule} from '@angular/core';
import {ProductInfoComponent} from './product-info.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ProductInfoComponent],
  imports: [ CommonModule],
  exports: [ ProductInfoComponent ]
})
export class ProductInfoComponentModule {}
