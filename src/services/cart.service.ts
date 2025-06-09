import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../app/index/components/main-content/products/interfaces/products.interface';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: Product[] = [];

  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  private totalPriceSubject = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPriceSubject.asObservable();

  addToCart(item: Product) {
    this.cartItems.push(item);
    this.cartSubject.next([...this.cartItems]);
    this.updateTotalPrice();
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.cartSubject.next([...this.cartItems]);
    this.updateTotalPrice();
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
    this.updateTotalPrice();
  }

  getCurrentCart() {
    return [...this.cartItems];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, product) => {
      const priceAfterDiscount = product.discount && product.discount > 0
        ? product.price * (1 - product.discount / 100)
        : product.price;
      return total + priceAfterDiscount;
    }, 0);
  }

  private updateTotalPrice() {
    const total = this.getTotalPrice();
    this.totalPriceSubject.next(total);
  }
}
