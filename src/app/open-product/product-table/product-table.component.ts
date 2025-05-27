import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-table',
  imports: [CommonModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent implements OnChanges {

  @Input() productDescription:any;
  activeTab = 'proizvod';
  productSpecsLeft:string[] = [];
  productSpecsRight:string[] = [];

  tempStars: number = 0;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['productDescription']?.currentValue) {
      this.funkcija();
    }
  }

  funkcija() {
    const specs = this.productDescription[0].product_specs?.split('|') || [];
    const mid = Math.ceil(specs.length / 2);
    this.productSpecsLeft = specs.slice(0, mid);
    this.productSpecsRight = specs.slice(mid);
  }
  setTab(tab: string) {
    this.activeTab = tab;
  }

  rateStar(index: number) {
    this.tempStars = index;
  }


}
