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
  public totalPrice:number=0;

  isCartVisible = false;

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }
  onCloseCart() {
    this.isCartVisible = false;
  }
  updateTotalPrice(price: number) {
    this.totalPrice = price;
  }

  constructor(private navbarService: NavbarService, private cartService:CartService) {}

  public ngOnInit(): void {
    this.fetchData()

    this.cartService.totalPrice$.subscribe(price => {
      this.totalPrice = price;
    });
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
}
