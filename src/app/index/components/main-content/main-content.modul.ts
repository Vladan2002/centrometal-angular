import { NgModule } from '@angular/core';
import {MainContentComponent} from './main-content.component';
import {ProductsModule} from './products/products.module';

@NgModule({
  declarations: [MainContentComponent],
  imports: [
    ProductsModule
  ],
  exports: [MainContentComponent]
})
export class MainContentModule {}
