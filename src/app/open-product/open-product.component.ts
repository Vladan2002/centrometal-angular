import {Component, OnInit} from '@angular/core';
import {OpenProductService} from '../../services/open-product.service';
import {Product} from './products.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-open-product',
  standalone:false,
  templateUrl: './open-product.component.html',
  styleUrl: './open-product.component.scss'
})
export class OpenProductComponent implements OnInit{

  public loader:boolean = true;
  public products:Product[]=[];
  public productData!:Product;
  private id:number=-1;
  public limit:number[]=[1,2,3,4];
  constructor(
    private dataService: OpenProductService,
    private route: ActivatedRoute
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  public ngOnInit(){
    setTimeout(()=>{this.fetchProductData()},1000)
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
        this.fetchSimilarProducts();
      },
      error: (err) => {
        console.warn('Error while fetching product:', err);
        this.loader = false;
      }
    });
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
