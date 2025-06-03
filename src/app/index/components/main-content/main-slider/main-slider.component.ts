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
 public  slides: SliderData = { pictures: [] };
 public  activeIndex: number = 0;

  constructor(private service: MainSliderService) {}

 public ngOnInit(): void {
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

  public nextSlide(): void {
    if (this.slides.pictures.length > 0) {
      this.activeIndex = (this.activeIndex + 1) % this.slides.pictures.length;
    }
  }

 public prevSlide(): void {
    if (this.slides.pictures.length > 0) {
      this.activeIndex =
        (this.activeIndex - 1 + this.slides.pictures.length) %
        this.slides.pictures.length;
    }
  }

 public goToSlide(index: number): void {
    this.activeIndex = index;
  }
}

