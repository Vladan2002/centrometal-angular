import {NgModule} from '@angular/core';
import {CartComponent} from './cart.component';
import {CartService} from '../../../services/cart.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule
  ],
  providers: [CartService],
  exports: [CartComponent]
})
export class CartModule {}
