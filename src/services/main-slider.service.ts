import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SliderData } from '../app/index/components/main-content/main-slider/interfaces/main-slider.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MainSliderService {

  private apiUrl: string;

  constructor(
      private http: HttpClient,
      private apiService: ApiService
  ) {
    this.apiUrl = this.apiService.getBaseUrl() + '/slider';
  }
  getImages(): Observable<SliderData[]> {
    return this.http.get<SliderData[]>(this.apiUrl);
  }
}
