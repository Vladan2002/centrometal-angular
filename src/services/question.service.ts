import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {Question} from '../app/open-product/components/product-info/interfaces/question.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
  })
export class QuestionService {
  public apiUrl:string ="" ;
  constructor(private http: HttpClient,private apiService:ApiService) {
    this.apiUrl=this.apiService.getBaseUrl()+"/questions";
  }

  public ask(data:Question): Observable<Question>{
    return this.http.post<Question>(`${this.apiUrl}`,data);
  }

}
