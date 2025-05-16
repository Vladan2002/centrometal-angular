import {Component, OnInit} from '@angular/core';
import {CategoryNode} from './accordion/interfaces/accordion.interface';
import {AccordionService} from '../../../../services/accordion.service';

@Component({
  selector: 'app-side',
  standalone:false,
  templateUrl: './side.component.html',
  styleUrl: './side.component.scss'
})
export class SideComponent implements OnInit {
  public accordion: CategoryNode[] = [];
  public expandedCategories: { [key: string]: boolean } = {};
  public isActive = true;

  constructor(private accordionService: AccordionService) {}

  ngOnInit(): void {
    this.accordionService.getAccordionData().subscribe((data) => {
      this.accordion = data;
    });
  }

  toggleAccordion(): void {
    this.isActive = !this.isActive;
  }
}
