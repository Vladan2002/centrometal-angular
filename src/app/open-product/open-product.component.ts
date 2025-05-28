import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenProductSliderService } from './open-product-slider.service';
import {ProductSliderComponent} from './components/product-slider/product-slider.component';
import {SideBarModule} from '../index/components/side/side-bar/side-bar.modul';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {NgForOf, NgIf} from '@angular/common';
import {ProductTableComponent} from './product-table/product-table.component';
import {
  ProductDescriptionSkeletonComponent
} from './product-description-skeleton/product-description-skeleton.component';
import {ProductSliderSkeletonComponent} from './product-slider-skeleton/product-slider-skeleton.component';
import {Product} from '../index/components/main-content/products/interfaces/products.interface';
import {ProductDescription} from './product-description.interface';
import {SectionsService} from "../../services/section.service";
import {CardModule} from "../index/components/main-content/products/section/card/card.module";
import {SkeletonCardModule} from "../index/components/main-content/products/skeleton-card/skeleton-card.module";

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
    ProductSliderSkeletonComponent,
    CardModule,
    NgForOf,
    SkeletonCardModule
  ]
})
export class OpenProductComponent implements OnInit {
  productData: Product | null =null;
  productDescription: ProductDescription | null=null;
  array:string[]=[];
  loading = true;
  similar:any;

  constructor(
    private dataService: OpenProductSliderService,
    private route: ActivatedRoute,
    private card:SectionsService

  ) {}

  ngOnInit(): void {

    setTimeout(() => this.loadContent(), 5000);

  }

  loadContent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;

    this.dataService.getData(id).subscribe(data => {
      this.productData = data;
      console.log(this.productData);

      if (this.productData && this.productData?.id && this.productData?.subcategory_id) {

        this.card.getSimilarProducts(
            this.productData.subcategory_id,
            this.productData.id
        ).subscribe(similar => {
          this.similar = similar;
          console.log(this.similar);
          this.loading = false;
        });
        this.dataService.getDescription(this.productData.id).subscribe(desc => {
          this.productDescription = desc;
          console.log(this.productDescription);

          this.array = this.productDescription.product_description.split('|');


        });
      } else {
        console.warn('product_id nije validan:', this.productData);
        this.loading = false;
      }
      this.loading = false;
    });
  }

}
