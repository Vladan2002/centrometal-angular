import {NgModule} from '@angular/core';
import {ProductSliderComponent} from './product-slider.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ProductSliderComponent],
  imports: [CommonModule],
  exports: [ProductSliderComponent]
})
export class ProductSliderModule {}
