import { Component, OnInit } from '@angular/core';

import { NavbarService } from '../../services/navbar.service';
import {Section} from './interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navbarItems: Section[] | undefined;
  public isMenuActive: boolean = false;

  isCartVisible = false;

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  constructor(private navbarService: NavbarService) {}

  public ngOnInit(): void {
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
}
