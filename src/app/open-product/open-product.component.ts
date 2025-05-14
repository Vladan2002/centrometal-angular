import { Component } from '@angular/core';
import {ProductSliderComponent} from './components/product-slider/product-slider.component';
import {SideBarModule} from '../index/components/side/side-bar/side-bar.modul';

@Component({
  selector: 'app-open-product',
  imports: [
    ProductSliderComponent,
    SideBarModule
  ],
  templateUrl: './open-product.component.html',
  styleUrl: './open-product.component.scss'
})
export class OpenProductComponent {

}
