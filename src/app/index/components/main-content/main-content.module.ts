import { NgModule } from '@angular/core';
import {MainContentComponent} from './main-content.component';
import {ProductsModule} from './products/products.module';
import {MainSliderModule} from "./main-slider/main-slider.module";

@NgModule({
  declarations: [MainContentComponent],
    imports: [
        ProductsModule,
        MainSliderModule
    ],
  exports: [MainContentComponent]
})
export class MainContentModule {}
