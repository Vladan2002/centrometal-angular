import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import {map} from 'rxjs/operators';
import {CategoryNode} from '../app/index/components/side/accordion/interfaces/accordion.interface';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  private apiUrl: string="";

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.apiUrl=this.apiService.getBaseUrl()
  }

  public getAccordionData(): Observable<CategoryNode[]> {
    return this.http.get<{ accordion: CategoryNode[] }>(this.apiUrl + '/accordion')
      .pipe(map(response => response.accordion));
  }

}
