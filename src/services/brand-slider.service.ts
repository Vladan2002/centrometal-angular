import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BrandImage } from '../shared/brand-slider/interfaces/brand.interface';

@Injectable({
  providedIn: 'root'
})
export class BrandsliderService {
  private apiUrl = 'http://localhost:3000/brands';

  constructor(private http: HttpClient) {}

  getBrands(): Observable<BrandImage[]> {
    return this.http.get<{ brands: string[] }>(this.apiUrl).pipe(
      map(response => response.brands.map(path => ({ src: path })))
    );
  }
}
