import {Component, Input} from '@angular/core';
import {CategoryNode} from './interfaces/accordion.interface';
@Component({
  selector: 'app-accordion',
  standalone:false,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent{
  @Input() accordion!: CategoryNode;
  @Input() isActive = true;

  expanded = false;

  toggle(): void {
    this.expanded = !this.expanded;
  }
}
