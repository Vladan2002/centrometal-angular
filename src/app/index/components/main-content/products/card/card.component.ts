import {Component, Input} from '@angular/core';
import{Product} from '../../../../../../services/section.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Product & { imageUrl: string };
}
