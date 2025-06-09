import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../app/index/components/main-content/products/interfaces/products.interface';

@Injectable({ providedIn: 'root' })
export class CartService {
  public cartItems: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems.next(JSON.parse(storedCart));
    }
  }

  getItems(): Observable<Product[]> {
    return this.cartItems.asObservable();
  }

  addToCart(item: Product) {
    const current = this.cartItems.value;
    const updated = [...current, item];
    this.cartItems.next(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  }

  removeFromCart(id: number) {
    const updated = this.cartItems.value.filter(item => item.id !== id);
    this.cartItems.next(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  }

  clearCart() {
    this.cartItems.next([]);
    localStorage.removeItem('cart');
  }
}
