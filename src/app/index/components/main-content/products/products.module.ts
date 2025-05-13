import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {CommonModule} from '@angular/common';
import {SectionsService} from '../../../../../services/section.service';
import {CardModule} from './card/card.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule,CardModule],
  providers: [SectionsService],
  exports: [ProductsComponent]
})
export class ProductsModule {}
