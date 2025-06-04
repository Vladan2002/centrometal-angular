import {NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, RouterLink],
  exports: [CardComponent]
})
export class CardModule {}
