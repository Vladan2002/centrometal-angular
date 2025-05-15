import {Component, OnInit} from '@angular/core';
import {AccordionService} from '../../../../services/accordion.service';
import {Accordion} from './interfaces/accordion.interface';

@Component({
  selector: 'app-accordion',
  standalone:false,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent implements OnInit {
  accordion: Accordion[] =[];
  expandedCategories: { [key: string]: boolean } = {};
  isActive: boolean = true;
  constructor(private accordionService: AccordionService) {}

 private fetchAccordionData(): void {
    this.accordionService.getAccordionData().subscribe({
      next: (data) => {
        this.accordion = data;
        console.log(this.accordion);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }


  ngOnInit(): void {
    this.fetchAccordionData();
  }



  public toggleSubcategories(categoryName: string): void {
    this.expandedCategories[categoryName] = !this.expandedCategories[categoryName];
  }

  public toggleAccordion(): void {
    this.isActive = !this.isActive;
  }

}
