import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';
import {IndexModule} from './index/index.model';
import {NavbarModule} from './navbar/navbar.module';
import {BrandSliderModule} from './brand-slider/brand-slider.module';
@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IndexModule,
    NavbarModule,
    BrandSliderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
