import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarService } from '../services/navbar.service';
import {IndexModule} from './index/index.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HttpClientModule,
    IndexModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
