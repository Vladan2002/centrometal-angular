import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CartItem} from '../interfaces/cart.interface';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
 standalone:false,
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() public item!: CartItem;
  @Input() public index!: number;

  @Output() public increase: EventEmitter<number> = new EventEmitter<number>();
  @Output() public decrease: EventEmitter<number> = new EventEmitter<number>();
  @Output() public remove: EventEmitter<number> = new EventEmitter<number>();


  public onIncrease() {
    this.increase.emit(this.index);
  }

  public onDecrease() {
    this.decrease.emit(this.index);
  }

  public onRemove() {
    this.remove.emit(this.index);
  }
}
