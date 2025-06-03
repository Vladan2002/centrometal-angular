import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.baseUrl;

  public getBaseUrl(): string {
    return this.baseUrl;
  }

 public setBaseUrl(url: string): void {
    this.baseUrl = url;
  }
}
