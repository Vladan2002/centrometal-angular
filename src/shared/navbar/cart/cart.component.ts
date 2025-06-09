import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from "../../../app/index/components/main-content/products/interfaces/products.interface";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private subscription!: Subscription;
  public cartItems: Product[] = [];
  totalPrice: number = 0;

  @Output() totalPriceChange = new EventEmitter<number>();
  @Output() closeCart = new EventEmitter<void>();

  constructor(public cartService: CartService) {}

  public close() {
    this.closeCart.emit();
  }

  calculateTotal() {
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalPriceChange.emit(this.totalPrice);
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  public emptyCart() {
    this.cartService.clearCart();
  }

  ngOnInit() {
    this.subscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }
}
