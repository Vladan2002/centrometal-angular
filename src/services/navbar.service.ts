import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private apiUrl = 'http://localhost:3000/navbar';

  constructor(private http: HttpClient) {}

  getNavbarData(role: string): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((data) => {
        return data[role] || data['guest'];
      })
    );
  }
}
