import { Component, OnInit } from '@angular/core';
import { BrandsliderService } from '../../services/brand-slider.service';

@Component({
  selector: 'app-brand-slider',
  standalone: false,
  templateUrl: './brand-slider.component.html',
  styleUrls: ['./brand-slider.component.scss']
})
export class BrandSliderComponent implements OnInit {
  brandImages: any;

  constructor(private brandService: BrandsliderService) {}

  ngOnInit(): void {
    this.brandService.getBrands().subscribe({
      next: (data) => {
        this.brandImages = data;
        this.brandImages= this.brandImages.brands;
        console.log(this.brandImages);
      },
      error: (err) => console.error('Error loading brand images:', err)
    });
  }
}
