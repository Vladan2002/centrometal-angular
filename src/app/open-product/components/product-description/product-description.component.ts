import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../index/components/main-content/products/interfaces/products.interface"
import {ProductDescription} from '../../interfaces/product-description.interface';
import { CartService } from "../../../../services/cart.service"


@Component({
  selector: 'app-product-description',
  standalone:false,
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent implements OnInit {
  @Input() public productData!: Product;
  @Input() public productDescription!: ProductDescription[];

  public quantity: number = 1;
  public description: string[] = [];

  constructor(private cartService: CartService) {}

  public ngOnInit() {
    this.description = this?.productDescription[0]?.product_description.split('|') || [];
  }

  public addToCart() {
    if (this.quantity > 0) {
      for (let i = 0; i < this.quantity; i++) {
        this.cartService.addToCart({ ...this.productData });
      }
    }
  }

  public increase() {
    this.quantity++;
  }

  public decrease() {
    if (this.quantity > 0) this.quantity--;
  }
}
