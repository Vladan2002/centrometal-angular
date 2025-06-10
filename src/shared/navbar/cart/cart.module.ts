import {NgModule} from '@angular/core';
import {CartComponent} from './cart.component';
import {CartService} from '../../../services/cart.service';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {CartItemModule} from "./cart-item/cart-item.module";

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule,
    CartItemModule
  ],
  providers: [CartService],
  exports: [CartComponent]
})
export class CartModule {}
