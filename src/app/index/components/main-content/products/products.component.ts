import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {SectionsService,Section} from '../../../../../services/section.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  sections: Section[] = [];
  loading = true;

  constructor(private sectionsService: SectionsService) {}

  ngOnInit(): void {
    this.sectionsService.getSectionsWithCards().subscribe(data => {
      this.sections = data;
      this.loading = false;
    });
  }
}
