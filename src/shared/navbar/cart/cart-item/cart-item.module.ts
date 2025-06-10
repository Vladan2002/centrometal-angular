import {CartItemComponent} from './cart-item.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@NgModule({
  declarations: [CartItemComponent],
  imports: [CommonModule,RouterLink],
  exports: [CartItemComponent]
})
export class CartItemModule { }
