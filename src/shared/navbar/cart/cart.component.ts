import { Component } from '@angular/core';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
standalone:false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  emptyCart() {
    this.cartService.clearCart();
  }

  constructor(public cartService: CartService) {}

}
