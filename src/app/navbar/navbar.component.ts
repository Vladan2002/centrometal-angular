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
  navbarItems: Section[] | undefined;
  isMenuActive: boolean = false;

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData(): void {
    this.navbarService.getNavbarData().subscribe(data => {
      this.navbarItems = data.navbar;
      console.log(this.navbarItems);
    });
  }

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }
}
