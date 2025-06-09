import {NgModule} from '@angular/core';
import {CartComponent} from './cart.component';
import {CartService} from '../../../services/cart.service';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';

@NgModule({
  declarations: [CartComponent],
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf
  ],
  providers: [CartService],
  exports: [CartComponent]
})
export class CartModule {}
