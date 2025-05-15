import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import {SliderData} from '../app/index/components/main-content/main-slider/interfaces/main-slider.interface';

@Injectable({
    providedIn: 'root'
  }
)
export class MainSliderService {

  apiUrl = 'http://localhost:3000/slider';
  constructor(private http: HttpClient) {
  }
  getImages(): Observable<SliderData> {
    return this.http.get<SliderData>(this.apiUrl);
  }
}
