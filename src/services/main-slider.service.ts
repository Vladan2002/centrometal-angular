import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  }
)
export class MainSliderService {

  apiUrl = 'http://localhost:3000/slider';
  constructor(private http: HttpClient) {
  }
  getImages(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
}
