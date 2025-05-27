import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenProductSliderService } from './open-product-slider.service';
import {ProductSliderComponent} from './components/product-slider/product-slider.component';
import {SideBarModule} from '../index/components/side/side-bar/side-bar.modul';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {NgIf} from '@angular/common';
import {ProductTableComponent} from './product-table/product-table.component';
import {
  ProductDescriptionSkeletonComponent
} from './product-description-skeleton/product-description-skeleton.component';
import {ProductSliderSkeletonComponent} from './product-slider-skeleton/product-slider-skeleton.component';
import {Product} from '../index/components/main-content/products/interfaces/products.interface';
import {ProductDescription} from './product-description.interface';

@Component({
  selector: 'app-open-product',
  templateUrl: './open-product.component.html',
  styleUrl: './open-product.component.scss',
  standalone: true,
  imports: [
    ProductSliderComponent,
    SideBarModule,
    ProductDescriptionComponent,
    NgIf,
    ProductTableComponent,
    ProductDescriptionSkeletonComponent,
    ProductSliderSkeletonComponent
  ]
})
export class OpenProductComponent implements OnInit {
  productData: Product | null | undefined;
  productDescription: ProductDescription | null | undefined;
  array:string[]=[];
  loading = false;

  constructor(
    private dataService: OpenProductSliderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    setTimeout(() => this.loadContent(), 5000);

  }

  loadContent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getData(id).subscribe(data => {
      this.productData = data;
      console.log(this.productData)
      if (this.productData?.id) {
        this.dataService.getDescription(this.productData.id).subscribe(desc => {
          this.productDescription = desc;
          console.log(this.productDescription);
          this.array = this.productDescription.product_description.split('|');
        });
      } else {
        console.warn('product_id nije validan:', this.productData);
      }
    });
    this.loading=true;



  }

}
