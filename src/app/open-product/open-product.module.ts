import {CommonModule} from '@angular/common';
import {OpenProductComponent} from './open-product.component';
import {NgModule} from '@angular/core';
import {ProductSliderSkeletonModule} from './components/loaders/product-slider-skeleton/product-slider-skeleton.module';
import {ProductDescriptionSkeletonModule} from './components/loaders/product-description-skeleton/product-description-skeleton.module';
import {CardModule} from './components/card/card.module';
import {SkeletonCardModule} from './components/loaders/skeleton-card/skeleton-card.module';
import {NoProductsModule} from './components/no-products/no-products.module';

@NgModule({
  declarations: [ OpenProductComponent ],
  imports: [CommonModule, ProductSliderSkeletonModule, ProductDescriptionSkeletonModule, CardModule, SkeletonCardModule, NoProductsModule],
  providers:[],
  exports: [ OpenProductComponent ]
})
export class OpenProductModule {

}
