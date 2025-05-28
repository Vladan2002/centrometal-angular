import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-description',
  standalone:false,
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent implements OnInit {
  @Input() productData: any;
  @Input() productDescription: any;
  description: string[]=[]
  ngOnInit() {
    this.description = this.productDescription[0].product_description.split('|');
  }

}
