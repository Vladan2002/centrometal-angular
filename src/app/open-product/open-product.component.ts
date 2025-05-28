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

  public productData!: Product;
  public productDescription: ProductDescription[]=[];
  public loading = true;
  private id: number = -1;

  constructor(
      private dataService: OpenProductService,
      private route: ActivatedRoute
  ) {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  public ngOnInit(): void {

    setTimeout(() => this.loadContent(), 1000);

  }

  private loadContent(): void {
    this.dataService.getData(this.id).subscribe(data => {
      this.productData = data;
      console.log(this.productData);
      if (this.productData?.id) {
        this.dataService.getDescription(this.productData.id).subscribe(desc => {
          this.productDescription = desc;
          this.loading = false;
        });
      } else {
        console.warn('Not valid', this.productData);
      }
    });

  }
}
