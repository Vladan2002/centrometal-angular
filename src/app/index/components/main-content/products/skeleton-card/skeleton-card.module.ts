import {NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import {SkeletonCardComponent} from './skeleton-card.component';

@NgModule({
  declarations: [SkeletonCardComponent],
  imports: [CommonModule],
  exports: [SkeletonCardComponent]
})
export class SkeletonCardModule {}
