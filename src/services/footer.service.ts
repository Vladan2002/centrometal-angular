import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Footer } from '../shared/footer/interfaces/footer.interface';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private apiUrl: string;

  constructor(private http: HttpClient, private apiService:ApiService) {
    this.apiUrl=this.apiService.getBaseUrl()
  }

  getFooterData(): Observable<Footer> {
    return this.http.get<Footer>(this.apiUrl+"/footer").pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error fetching footer data:', error);
    return throwError(() => new Error('Failed to load footer data; please try again later.'));
  }
}
