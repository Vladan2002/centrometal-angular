import {NgModule} from '@angular/core';
import{MainSliderComponent} from './main-slider.component';
import {MainSliderService} from '../../../../../services/main-slider.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [MainSliderComponent],
  imports: [
    CommonModule,

  ],
  providers: [MainSliderService],
  exports: [MainSliderComponent]
})
export class MainSliderModule { }
