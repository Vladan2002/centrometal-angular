import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarService } from '../services/navbar.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavbarModule,
    HttpClientModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
