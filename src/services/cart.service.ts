import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Product } from '../app/index/components/main-content/products/interfaces/products.interface';
import { CartItem} from '../shared/navbar/cart/interfaces/cart.interface';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: CartItem[] = [];

  private cartSubject:BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  public cart$:Observable<CartItem[]> = this.cartSubject.asObservable();

  private totalPriceSubject = new BehaviorSubject<number>(0);
  public totalPrice$ = this.totalPriceSubject.asObservable();

  public addToCart(product: Product) {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.updateCart();
  }

  public removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.updateCart();
  }

  public clearCart() {
    this.cartItems = [];
    this.updateCart();
  }

  public increaseQuantity(index: number) {
    this.cartItems[index].quantity += 1;
    this.updateCart();
  }

  public decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity -= 1;
    } else {
      this.removeFromCart(index);
      return;
    }
    this.updateCart();
  }

  public getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      const price = item.product.discount
        ? item.product.price * (1 - item.product.discount / 100)
        : item.product.price;
      return total + price * item.quantity;
    }, 0);
  }

  private updateCart() {
    this.cartSubject.next([...this.cartItems]);
    this.totalPriceSubject.next(this.getTotalPrice());
  }
}
