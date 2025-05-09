import { NgModule } from '@angular/core';
import {MainContentComponent} from './main-content.component';
import {MainSliderModule} from './main-slider/main-slider.modul';

@NgModule({
  declarations: [MainContentComponent],
  imports: [
    MainSliderModule
  ],
  exports: [MainContentComponent]
})
export class MainContentModule {}
