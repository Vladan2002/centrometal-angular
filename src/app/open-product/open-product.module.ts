import {CommonModule} from '@angular/common';
import {OpenProductComponent} from './open-product.component';
import {NgModule} from '@angular/core';
import {ProductSliderSkeletonModule} from './components/loaders/product-slider-skeleton/product-slider-skeleton.module';
import {ProductDescriptionSkeletonModule} from './components/loaders/product-description-skeleton/product-description-skeleton.module';
import {OpenProductService} from "../../services/open-product.service";
import {ProductDescriptionModule} from "./components/product-description/product-description.module";
import {ProductInfoComponentModule} from "./components/product-info/product-info.module";

@NgModule({
  declarations: [ OpenProductComponent ],
  imports: [CommonModule, ProductSliderSkeletonModule, ProductDescriptionSkeletonModule, ProductDescriptionModule, ProductInfoComponentModule],
  providers:[OpenProductService],
  exports: [ OpenProductComponent ]
})
export class OpenProductModule {

}
