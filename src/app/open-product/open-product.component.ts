import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {
  ProductDescriptionComponent
} from '../../open-product/components/product-description/product-description.component';
import {
  ProductDescriptionSkeletonComponent
} from '../../open-product/product-description-skeleton/product-description-skeleton.component';
import {ProductSliderComponent} from '../../open-product/components/product-slider/product-slider.component';
import {
  ProductSliderSkeletonComponent
} from '../../open-product/product-slider-skeleton/product-slider-skeleton.component';
import {ProductTableComponent} from '../../open-product/product-table/product-table.component';

@Component({
  selector: 'app-open-product',
  standalone:false,
  templateUrl: './open-product.component.html',
  styleUrl: './open-product.component.scss'
})
export class OpenProductComponent {

}
