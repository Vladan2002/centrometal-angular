import {Component, OnInit} from '@angular/core';
import {Accordion, AccordionService} from '../../../services/accordion.service';

@Component({
  selector: 'app-accordion',
  standalone:false,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent implements OnInit {

  accordion: Accordion[] | undefined;
  constructor(private accordionService: AccordionService) {}

  fetchAccordionData(): void {
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
    this.fetchAccordionData()

  }
}
