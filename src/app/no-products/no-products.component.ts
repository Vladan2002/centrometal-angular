import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-no-products',
  standalone:false,
  templateUrl: './no-products.component.html',
  styleUrl: './no-products.component.scss'
})
export class NoProductsComponent {
@Input() public sectionName: string="";
}
