import {Component, Input} from '@angular/core';
import{Product} from '../../../../../../services/section.service';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Product;
}
