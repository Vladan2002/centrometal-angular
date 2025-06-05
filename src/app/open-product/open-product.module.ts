import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OpenProductComponent } from './open-product.component';
import { OpenProductService } from '../../services/open-product.service';
import { ProductSliderSkeletonModule } from './components/loaders/product-slider-skeleton/product-slider-skeleton.module';
import { ProductDescriptionSkeletonModule } from './components/loaders/product-description-skeleton/product-description-skeleton.module';
import { SkeletonCardModule } from './components/loaders/skeleton-card/skeleton-card.module';
import { ProductSliderModule } from './components/product-slider/product-slider.module';
import { ProductDescriptionModule } from './components/product-description/product-description.module';
import { ProductInfoComponentModule } from './components/product-info/product-info.module';
import { CardModule } from '../../shared/card/card.module';
import {NoProductsModule} from "../../shared/no-products/no-products.module";
import {ProductSideModule } from './components/product-side/product-side.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [OpenProductComponent],
  imports: [
    CommonModule,
    ProductSliderSkeletonModule,
    ProductDescriptionSkeletonModule,
    ProductSliderModule,
    ProductDescriptionModule,
    ProductInfoComponentModule,
    CardModule,
    SkeletonCardModule,
    NoProductsModule,
    ProductSideModule,
      RouterModule.forChild([{ path: ':id', component: OpenProductComponent }])
  ],
  providers: [OpenProductService],
  exports: [OpenProductComponent]
})
export class OpenProductModule {}
