import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandSliderModule } from './brand-slider/brand-slider.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrandSliderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
