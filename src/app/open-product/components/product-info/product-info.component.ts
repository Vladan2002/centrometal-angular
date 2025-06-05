import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ProductDescription} from '../../interfaces/product-description.interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
  standalone:false
})
export class ProductInfoComponent implements OnChanges {

  @Input() public productDescription: ProductDescription[]=[];
   public activeTab = 'proizvod';
   public productSpecsLeft:string[] = [];
   public productSpecsRight:string[] = [];
   public tempStars: number = 0;
   public limit:number[]=[1,2,3,4,5]
  ngOnChanges(changes: SimpleChanges) {
    if (changes['productDescription']?.currentValue) {
      this.fillSpecification();
    }
  }

  private fillSpecification() {
    const specs = this?.productDescription[0]?.product_specs?.split('|') || [];
    const mid = Math.ceil(specs.length / 2);
    this.productSpecsLeft = specs.slice(0, mid);
    this.productSpecsRight = specs.slice(mid);
  }
  public setTab(tab: string) {
    this.activeTab = tab;
  }

  public rateStar(index: number) {
    this.tempStars = index;
  }

}
