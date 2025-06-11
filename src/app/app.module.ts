import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { NavbarService } from '../services/navbar.service';
import {FooterModule} from '../shared/footer/footer.module';
import { AppRoutingModule } from './app-routing.module';
import { BrandSliderModule } from './brand-slider/brand-slider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HttpClientModule,
    FooterModule,
    AppRoutingModule,
    BrandSliderModule

  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
