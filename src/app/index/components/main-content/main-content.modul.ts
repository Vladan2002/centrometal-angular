import { NgModule } from '@angular/core';
import {MainContentComponent} from './main-content.component';
import {MainSliderModule} from './main-slider/main-slider.module';
import {ProductsModule} from './products/products.module';

@NgModule({
  declarations: [MainContentComponent],
  imports: [
    MainSliderModule,
    ProductsModule
  ],
  exports: [MainContentComponent]
})
export class MainContentModule {}
