import {Component, Input} from '@angular/core';
import {CategoryNode} from './interfaces/accordion.interface';

@Component({
  selector: 'app-accordion',
  standalone:false,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent{
  @Input() node!: CategoryNode;
  @Input() isActive = true;
  @Input() expandedCategories: { [key: string]: boolean } = {};

  toggle(name: string): void {
    this.expandedCategories[name] = !this.expandedCategories[name];
  }
}
