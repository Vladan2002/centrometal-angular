import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarService } from '../services/navbar.service';
import {IndexModule} from './index/index.module';
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
    IndexModule,
    OpenProductModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
