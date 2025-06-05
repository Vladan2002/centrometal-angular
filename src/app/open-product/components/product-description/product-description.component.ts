import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../index/components/main-content/products/interfaces/products.interface"
import {ProductDescription} from '../../interfaces/product-description.interface';

@Component({
  selector: 'app-product-description',
  standalone:false,
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent implements OnInit {
  @Input() public productData!: Product;
  @Input() public productDescription!: ProductDescription[];
  public description: string[]=[]
  ngOnInit() {
    this.description = this?.productDescription[0]?.product_description.split('|') || [];
  }

}
