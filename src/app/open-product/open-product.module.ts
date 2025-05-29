import {CommonModule} from '@angular/common';
import {OpenProductComponent} from './open-product.component';
import {NgModule} from '@angular/core';
import {ProductSliderSkeletonModule} from './components/loaders/product-slider-skeleton/product-slider-skeleton.module';
import {ProductDescriptionSkeletonModule} from './components/loaders/product-description-skeleton/product-description-skeleton.module';
import {ProductSideModule} from './components/product-side/product-side.module';

@NgModule({
  declarations: [ OpenProductComponent ],
  imports: [CommonModule, ProductSliderSkeletonModule, ProductDescriptionSkeletonModule, ProductSideModule],
  providers:[],
  exports: [ OpenProductComponent ]
})
export class OpenProductModule {

}
