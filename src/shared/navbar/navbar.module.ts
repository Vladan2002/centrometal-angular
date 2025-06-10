import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {RouterLink} from "@angular/router";
import {CartModule} from './cart/cart.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterLink, CartModule],
  exports: [NavbarComponent]
})
export class NavbarModule {}
