import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Footer } from '../shared/footer/interfaces/footer.interface';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private apiUrl = 'http://localhost:3000/footer';

  constructor(private http: HttpClient) {}

  public getFooterData(): Observable<Footer> {
    return this.http.get<Footer>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error fetching footer data:', error);
    return throwError(() => new Error('Failed to load footer data; please try again later.'));
  }
}
