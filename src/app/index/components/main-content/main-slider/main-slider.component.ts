import { Component, OnInit } from '@angular/core';
import { MainSliderService } from '../../../../../services/main-slider.service';
import {SliderData} from './interfaces/main-slider.interface';

@Component({
  selector: 'app-main-slider',
  standalone:false,
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  slides: SliderData = { pictures: [] };
  activeIndex: number = 0;

  constructor(private service: MainSliderService) {}

  ngOnInit(): void {
    this.loadSlides();
  }

  private loadSlides(): void {
    this.service.getImages().subscribe({
      next: (slides) => {
        this.slides = slides;
      },
      error: (error) => {
        console.error('Error fetching sliderdata', error);
      }
    });
  }

  nextSlide(): void {
    if (this.slides.pictures.length > 0) {
      this.activeIndex = (this.activeIndex + 1) % this.slides.pictures.length;
    }
  }

  prevSlide(): void {
    if (this.slides.pictures.length > 0) {
      this.activeIndex =
        (this.activeIndex - 1 + this.slides.pictures.length) %
        this.slides.pictures.length;
    }
  }

  goToSlide(index: number): void {
    this.activeIndex = index;
  }
}

