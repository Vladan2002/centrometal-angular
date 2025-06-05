import {Component, Input} from '@angular/core';
import{Product} from "../../app/index/components/main-content/products/interfaces/products.interface";

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() public product!: Product;
}
