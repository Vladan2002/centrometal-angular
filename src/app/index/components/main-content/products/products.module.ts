import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {CommonModule} from '@angular/common';
import {SectionsService} from '../../../../../services/section.service';
import {CardModule} from './section/card/card.module';
import {SectionModule} from './section/section.module';

@NgModule({
  declarations: [ProductsComponent],
    imports: [CommonModule, CardModule, SectionModule],
  providers: [SectionsService],
  exports: [ProductsComponent]
})
export class ProductsModule {}
