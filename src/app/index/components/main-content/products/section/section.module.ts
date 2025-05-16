import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from './section.component';
import {SkeletonCardModule} from '../skeleton-card/skeleton-card.module';
import {CardModule} from './card/card.module';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule,SkeletonCardModule,CardModule],
  exports: [SectionComponent]
})
export class SectionModule {

}
