import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Picture} from '../../../index/components/main-content/products/interfaces/products.interface';

@Component({
  selector: 'app-product-slider',
  imports: [
    CommonModule,
  ],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss'
})
export class ProductSliderComponent implements OnInit {
  @Input() pictures: Picture[] = [];
  activeIndex = 0;

  ngOnInit() {
  }

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

  get currentImageUrl(): string {
    return this.pictures?.[this.activeIndex]?.url || '';
  }
}

