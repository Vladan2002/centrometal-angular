import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import {map} from 'rxjs/operators';

export interface Accordion {
  category: {
    name: string;
    subcategory: string[];
  };
}



@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  private apiUrl = 'http://localhost:3000/accordion';

  constructor(private http: HttpClient) {}

  getAccordionData(): Observable<Accordion[]> {
    return this.http.get<{ accordion: Accordion[] }>(this.apiUrl).pipe(
      map(response => response.accordion)
    );
  }
}
