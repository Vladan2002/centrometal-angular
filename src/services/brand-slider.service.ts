import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BrandImage } from '../shared/brand-slider/interfaces/brand.interface';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsliderService {
  private apiUrl:string;

  constructor(private http: HttpClient ,private apiService: ApiService) {
    this.apiUrl=this.apiService.getBaseUrl()
  }

  getBrands(): Observable<BrandImage[]> {
    return this.http.get<{ brands: string[] }>(this.apiUrl+'/brands').pipe(
      map(response => response.brands.map(path => ({ src: path })))
    );
  }
}
