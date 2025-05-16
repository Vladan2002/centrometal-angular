import {Component, Input} from '@angular/core';
import{Product} from "../../interfaces/products.interface";

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Product;
}
