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
  public isActive = true;
  public accordion: CategoryNode[] = [];
  public level: number = 0;
  constructor(private accordionService: AccordionService) {}

  public toggleMenu(): void {
    this.isActive = !this.isActive;
  }
  private fetchData(): void {
    this.accordionService.getAccordionData().subscribe((data) => {
      this.accordion = data;
    })
  }
  public ngOnInit(): void {
    this.fetchData();
  }
}
