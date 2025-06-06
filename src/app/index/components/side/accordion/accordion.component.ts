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
  @Input() public level!: number;

  public expanded = false;

  public toggle(): void {
    this.expanded = !this.expanded;
  }
   public getBackgroundColor(level: number): string {
    const val = 244 - Math.min(level * 15, 90);
    return `rgb(${val}, ${val}, ${val})`;
  }


}
