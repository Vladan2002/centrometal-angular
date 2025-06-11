import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { BrandsliderService } from '../../services/brand-slider.service';
import {BrandImage} from './interfaces/brand.interface';

@Component({
  selector: 'app-brand-slider',
  standalone: false,
  templateUrl: './brand-slider.component.html',
  styleUrls: ['./brand-slider.component.scss']
})
export class BrandSliderComponent implements OnInit {
  @ViewChild('sliderContainer', { static: false }) sliderContainer!: ElementRef<HTMLDivElement>;
 public  brandImages: BrandImage[] = [];
  constructor(private brandService: BrandsliderService) {}

  public ngOnInit(): void {
    this.fetchBrandImages();
    setInterval(() => {
      this.scroll('right');
    }, 2000);
  }


  private fetchBrandImages(): void {
    this.brandService.getBrands().subscribe({
      next: (data) => {
        this.brandImages = [...data, ...data, ...data];
      },
      error: (err) => console.error('Error loading brand images:', err)
    });
  }

  public scroll(direction: 'left' | 'right'): void {
    console.log('scroll');
    const container = this.sliderContainer.nativeElement;
    const scrollAmount = 220;

    if (direction === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
    setTimeout(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0 });
      }
      if (container.scrollLeft === 0 && direction === 'left') {
        container.scrollTo({ left: container.scrollWidth / 2 });
      }
    }, 400);
  }
}
