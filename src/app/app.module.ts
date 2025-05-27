import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarService } from '../services/navbar.service';
import {OpenProductModule} from './open-product/open-product.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HttpClientModule,
    OpenProductModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
