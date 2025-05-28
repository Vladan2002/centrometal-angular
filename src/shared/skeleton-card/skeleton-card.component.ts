import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skeleton-card',
  standalone:false,
  templateUrl: './skeleton-card.component.html',
  styleUrl: './skeleton-card.component.scss'
})
export class SkeletonCardComponent {
  @Input() limit: number[]=[];
}
