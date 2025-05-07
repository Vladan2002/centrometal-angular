import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Section} from '../app/navbar/interfaces/navbar.interface';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private apiUrl = 'http://localhost:3000/navbar';

  constructor(private http: HttpClient) {}

  getNavbarData(): Observable<{ navbar: Section[] }> {
    return this.http.get<{ navbar: Section[] }>(this.apiUrl);
  }

}
