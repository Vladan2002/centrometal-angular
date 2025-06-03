import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from './section.component';
import {SkeletonCardModule} from '../../../../../../shared/skeleton-card/skeleton-card.module';
import {CardModule} from './card/card.module';
import {NoProductsModule} from '../../../../../../shared/no-products/no-products.module';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, SkeletonCardModule, CardModule, NoProductsModule],
  exports: [SectionComponent]
})
export class SectionModule {

}
