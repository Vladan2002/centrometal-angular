import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FooterComponent} from '../shared/footer/footer.component';
import {IndexModule} from './index/index.module';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {BrandSliderModule} from '../shared/brand-slider/brand-slider.module';
import {OpenProductComponent} from './open-product/open-product.component';
@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IndexModule,
    NavbarModule,
    BrandSliderModule,
    OpenProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
