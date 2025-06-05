import {Component, Input} from '@angular/core';
import {CategoryNode} from './interfaces/accordion.interface';
@Component({
  selector: 'app-accordion',
  standalone:false,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent{
  @Input() public accordion!: CategoryNode;
  @Input() public isActive = true;

  public expanded = false;
  @Input() public level!: number;

  public toggle(): void {
    this.expanded = !this.expanded;
  }
  getBackgroundColor(level: number): string {
    const val = 244 - Math.min(level * 15, 90);
    return `rgb(${val}, ${val}, ${val})`;
  }


}
