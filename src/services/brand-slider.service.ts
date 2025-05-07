import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BrandImage {
  src: string;
}

@Injectable({
  providedIn: 'root'
})
export class BrandsliderService {
  private apiUrl = 'http://localhost:3000/brands';

  constructor(private http: HttpClient) {}

  getBrands(): Observable<BrandImage[]> {
    return this.http.get<BrandImage[]>(`${this.apiUrl}`);
  }


}
