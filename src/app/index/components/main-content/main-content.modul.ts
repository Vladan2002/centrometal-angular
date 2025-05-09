import { NgModule } from '@angular/core';
import {MainContentComponent} from './main-content.component';
import {MainSliderModule} from './main-slider/main-slider.modul';
import {ProductsComponent} from './products/products.component';

@NgModule({
  declarations: [MainContentComponent],
  imports: [
    MainSliderModule,
    ProductsComponent
  ],
  exports: [MainContentComponent]
})
export class MainContentModule {}
