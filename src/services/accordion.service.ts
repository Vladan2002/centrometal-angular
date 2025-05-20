import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import {map} from 'rxjs/operators';
import {CategoryNode} from '../app/index/side/accordion/interfaces/accordion.interface';





@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  private apiUrl: string="localhost:3000/accordion";

  constructor(private http: HttpClient) {
  }

  getAccordionData(): Observable<CategoryNode[]> {
    return this.http.get<{ accordion: CategoryNode[] }>(this.apiUrl + '/accordion')
      .pipe(map(response => response.accordion));
  }

}
