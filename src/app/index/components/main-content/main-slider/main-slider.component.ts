import { Component, OnInit } from '@angular/core';
import { MainSliderService } from '../../../../../services/main-slider.service';

@Component({
  selector: 'app-main-slider',
  standalone:false,
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  slides: any = { pictures: [] };

  constructor(private service: MainSliderService) {}

  ngOnInit(): void {
    this.loadSlides();
  }

  private loadSlides(): void {
    this.service.getImages().subscribe({
      next: (slides) => {
        this.slides = slides;
        console.log(this.slides);
      },
      error: (error) => {
        console.error('Error loading slides:', error);
      }
    });
  }
}
