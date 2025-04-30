import { Component, OnInit } from '@angular/core';

import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarItems: any[] = [];
  userRole: string = 'guest';
  isMenuActive: boolean = false; // Tracks menu state

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    const storedRole = localStorage.getItem('userRole') || 'guest';
    this.userRole = storedRole;

    this.navbarService.getNavbarData(this.userRole).subscribe(data => {
      this.navbarItems = data;
    });
  }

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }
}
