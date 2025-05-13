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

  constructor(private sectionsService: SectionsService) {}

  ngOnInit() {
    this.sectionsService.getSections().subscribe(sections => {
      this.sections = sections;
      setTimeout(() => {
        this.loadCardsSequentially(0);
      }, 5000);
    });
  }

  private loadCardsSequentially(index: number) {
    if (index >= this.sections.length) return;
    this.sectionsService.populateSectionCards(this.sections[index]).subscribe(updatedSection => {
      this.sections[index] = updatedSection;
      console.log(this.sections[index]);
      setTimeout(() => this.loadCardsSequentially(index + 1), 1500);
    });
  }
}
