import { Component, OnInit } from '@angular/core';
import { BrandsliderService } from '../../services/brand-slider.service';
import {BrandImage} from './interfaces/brand.interface';

@Component({
  selector: 'app-brand-slider',
  standalone: false,
  templateUrl: './brand-slider.component.html',
  styleUrls: ['./brand-slider.component.scss']
})
export class BrandSliderComponent implements OnInit {
  brandImages: BrandImage[] | undefined ;

  constructor(private brandService: BrandsliderService) {}

  ngOnInit(): void {
   this.fetchBrandImages();
  }

  fetchBrandImages(): void {
    this.brandService.getBrands().subscribe({
      next: (data) => {
        this.brandImages = data;
        console.log(this.brandImages);
      },
      error: (err) => console.error('Error loading brand images:', err)
    });
  }
}
