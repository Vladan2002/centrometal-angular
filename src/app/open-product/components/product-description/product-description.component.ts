import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ProductDescriptionSkeletonComponent
} from '../../product-description-skeleton/product-description-skeleton.component';

@Component({
  selector: 'app-product-description',
  imports: [
    CommonModule,
  ],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent implements OnInit {
  @Input() productData: any;
  @Input() productDescription: any;
  arr: string[]=[]
  ngOnInit() {
    this.arr = this.productDescription[0].product_description.split('|');
  }

}
