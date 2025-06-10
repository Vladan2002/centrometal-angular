import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Subscription } from "rxjs";
import {CartItem} from './interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private subscription!: Subscription;
  public cartItems: CartItem[] = [];
  public totalPrice: number = 0;

  @Output() public totalPriceChange = new EventEmitter<number>();
  @Output() public closeCart = new EventEmitter<void>();

  constructor(public cartService: CartService) {}




  public increase(i: number) {
    this.cartService.increaseQuantity(i);
  }

  public decrease(i: number) {
    this.cartService.decreaseQuantity(i);
  }



  public close() {
    this.closeCart.emit();
  }

  private calculateTotal() {
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalPriceChange.emit(this.totalPrice);
  }

  public removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  public emptyCart() {
    this.cartService.clearCart();
  }
  private subscribeToCart(): void {
    this.subscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });

  }

  public ngOnInit() {
    this.subscribeToCart()
  }
}
