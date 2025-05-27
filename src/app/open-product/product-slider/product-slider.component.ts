import {Component, Input} from '@angular/core';
import {Picture} from '../products.interface';

@Component({
  selector: 'app-product-slider',
  standalone:false,
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss'
})
export class ProductSliderComponent {
  @Input() pictures: Picture[] = [];
  activeIndex = 0;

  prev() {
    if (this.pictures.length) {
      this.activeIndex = (this.activeIndex - 1 + this.pictures.length) % this.pictures.length;
    }
  }
  next() {
    if (this.pictures.length) {
      this.activeIndex = (this.activeIndex + 1) % this.pictures.length;
    }
  }

  setActive(index: number) {
    this.activeIndex = index;
  }
}
