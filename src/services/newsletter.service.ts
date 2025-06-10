
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscriber } from '../shared/newsletter/interfaces/subcriber.interface';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private apiUrl:string = '';

  constructor(private http: HttpClient,private apiService:ApiService) {
    this.apiUrl=this.apiService.getBaseUrl()+'/subscribers';
  }

  public subscribe(data: Subscriber): Observable<Subscriber> {
    return this.http.post<Subscriber>(this.apiUrl, data);
  }

   public getByEmail(email: string): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>(`${this.apiUrl}?email=${email}`);
  }
}
