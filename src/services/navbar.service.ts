import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Section} from '../shared/navbar/interfaces/navbar.interface';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private apiUrl ="";

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.apiUrl = this.apiService.getBaseUrl()+"/navbar";
  }

  public getNavbarData(): Observable<{ navbar: Section[] }> {
    return this.http.get<{ navbar: Section[] }>(this.apiUrl);
  }

}
