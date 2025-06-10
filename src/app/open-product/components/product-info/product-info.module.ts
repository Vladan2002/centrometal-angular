import {NgModule} from '@angular/core';
import {ProductInfoComponent} from './product-info.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ProductInfoComponent],
    imports: [CommonModule, ReactiveFormsModule],
  exports: [ ProductInfoComponent ]
})
export class ProductInfoComponentModule {}
