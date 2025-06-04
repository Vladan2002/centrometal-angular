import { Component, OnInit } from '@angular/core';
import { Product } from './products.interface';
import { ProductDescription } from './product-description.interface';
import { OpenProductService } from '../../services/open-product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-open-product',
  standalone: false,
  templateUrl: './open-product.component.html',
  styleUrls: ['./open-product.component.scss']
})
export class OpenProductComponent implements OnInit {

  public productData!: Product;
  public productDescription: ProductDescription[] = [];
  public products: Product[] = [];
  public loader: boolean = true;
  public limit: number[] = [1, 2, 3, 4];
  private id: number = 2;

  constructor(
    private dataService: OpenProductService,
    private route: ActivatedRoute
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  public ngOnInit(): void {
    setTimeout(() => this.fetchProductData(), 1000);
  }

  private fetchProductData(): void {
    this.loader = true;

    this.dataService.getData(this.id).subscribe({
      next: (data) => {
        if (!data) {
          console.warn(`Product with ID ${this.id} was not found.`);
          this.loader = false;
          return;
        }

        this.productData = data;
        console.log('Product data:', this.productData);

        this.fetchProductDescription();
        this.fetchSimilarProducts();
      },
      error: (err) => {
        console.warn('Error while fetching product:', err);
        this.loader = false;
      }
    });
  }

  private fetchProductDescription(): void {
    if (this.productData?.id) {
      this.dataService.getDescription(this.productData.id).subscribe(desc => {
        this.productDescription = desc;
      });
    } else {
      console.warn('Missing product ID for description fetch');
    }
  }

  private fetchSimilarProducts(): void {
    const { subcategory_id, id } = this.productData || {};

    if (subcategory_id && id) {
      this.dataService.getSimilarProducts(subcategory_id, id).subscribe({
        next: (similarProducts) => {
          this.products = similarProducts;
          console.log('Similar products:', this.products);
          this.loader = false;
        },
        error: (err) => {
          console.error('Error while fetching similar products:', err);
          this.loader = false;
        }
      });
    } else {
      console.warn('Product data is missing subcategory_id or id.');
      this.loader = false;
    }
  }
}
