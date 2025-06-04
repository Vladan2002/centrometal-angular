import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { NavbarService } from '../services/navbar.service';
import {IndexModule} from './index/index.module';
import {OpenProductModule} from './open-product/open-product.module';
import {FooterModule} from '../shared/footer/footer.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HttpClientModule,
    IndexModule,
    OpenProductModule,
    FooterModule,
    AppRoutingModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
