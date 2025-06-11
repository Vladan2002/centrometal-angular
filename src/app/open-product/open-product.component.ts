import { Component, OnInit } from '@angular/core';
import {Product} from "../index/components/main-content/products/interfaces/products.interface"
import { ProductDescription } from './interfaces/product-description.interface';
import { OpenProductService } from '../../services/open-product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-open-product',
  standalone: false,
  templateUrl: './open-product.component.html',
  styleUrls: ['./open-product.component.scss']
})
export class OpenProductComponent implements OnInit {

  public productData: Product | null = null;
  public productDescription: ProductDescription[] = [];
  public products: Product[] = [];
  public loader: boolean = true;
  public limit: number[] = [1, 2, 3, 4];
  private id: number = -1;

  constructor(
    private dataService: OpenProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }


  private resetData(): void {
    this.productData=null;
    this.productDescription= [];
    this.products= [];
    this.loader= true;

    setTimeout(()=>{window.scrollTo({top:0,behavior: 'smooth'});},10)
  }


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.resetData();
      setTimeout(() => this.fetchProductData(), 0);
    });


  }


  private fetchProductData(): void {

    this.dataService.getData(this.id).subscribe({
      next: (data) => {
        this.productData = data;
        if (!this.productData) {
          this.router.navigate(['/']);
          this.loader = false;
          return;
        }

        console.log('Product data:', this.productData);
        this.fetchProductDescription();
        this.fetchSimilarProducts();

      },
      error: (err) => {
        console.warn('Error while fetching product:', err);
        this.router.navigate(['/']);
      }
    });
  }

  private fetchProductDescription(): void {
    if (this.productData?.id) {
      this.dataService.getDescription(this.productData.id).subscribe(desc => {
        this.productDescription = desc;
        console.log(this.productDescription);
        if (!this.productDescription.length) {
          this.productDescription = [{
            id: '',
            product_id: `${this.productData?.id}`,
            SKU: 'Nije dostupno',
            product_description: 'Nije dostupno',
            product_specs: 'Nije dostupno',
          }];
        }
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
