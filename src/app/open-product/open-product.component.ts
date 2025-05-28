import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "./products.interface";
import {ProductDescription} from "./product-description.interface";
import {OpenProductService} from "../../services/open-product.service";

@Component({
  selector: 'app-open-product',
  standalone:false,
  templateUrl: './open-product.component.html',
  styleUrl: './open-product.component.scss'
})
export class OpenProductComponent implements OnInit {

  productData: Product | null =null;
  productDescription: ProductDescription | null =null;
  loading = true;
  id: number = -1;

  constructor(
      private dataService: OpenProductService,
    private route: ActivatedRoute
  ) {
   this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    setTimeout(() => this.loadContent(), 5000);

  }

  loadContent(): void {
    this.loading = true;
    this.dataService.getData(this.id).subscribe(data => {
      this.productData = data;
      console.log(this.productData);
      if (this.productData?.id) {
        this.dataService.getDescription(this.productData.id).subscribe(desc => {
          this.productDescription = desc;
        });
      } else {
        console.warn('', this.productData);
      }
      this.loading = false;

    });
    this.loading=true;

  }
}
