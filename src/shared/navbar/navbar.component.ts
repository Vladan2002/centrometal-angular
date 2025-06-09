import { Component, OnInit } from '@angular/core';

import { NavbarService } from '../../services/navbar.service';
import {Section} from './interfaces/navbar.interface';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navbarItems: Section[] | undefined;
  public isMenuActive: boolean = false;
  totalPrice: number = 0;

  isCartVisible = false;

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  constructor(private navbarService: NavbarService, private cartService: CartService) {}

  public ngOnInit(): void {
    this.cartService.totalPrice$.subscribe(price => {
      this.totalPrice = price;
    });
    this.fetchData()
  }
  public fetchData(): void {
    this.navbarService.getNavbarData().subscribe(data => {
      this.navbarItems = data.navbar;
      console.log(this.navbarItems);
    });
  }

  public toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  hideCart(): void {
    this.isCartVisible = false;
  }
}
