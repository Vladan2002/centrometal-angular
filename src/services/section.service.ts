import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, forkJoin, of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Section,Picture,Product} from '../app/index/components/main-content/products/interfaces/products.interface';
import {ApiService} from './api.service';


@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  private apiUrl: string;

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.apiUrl = this.apiService.getBaseUrl() + '/';
  }
  public getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.apiUrl+"sections").pipe(
      map(sections => sections.map(section => ({
        name: section.name,
        param: section.param,
        color: section.color,
        icon: section.icon,
        gte: section.gte,
        limit: section.limit,
        cards: [],
        loaded: false

      }))),
      catchError(error => {
        console.error('Error fetching sections:', error);
        return of([]);
      })
    );
  }
 public populateSectionCards(section: Section): Observable<Section> {
        let url=`${this.apiUrl}products?discount_gte=${section.gte}&_limit=${section.limit}`;
    return forkJoin({
      products: this.http.get<Product[]>(url).pipe(catchError(() => of([]))),
      pictures: this.http.get<Picture[]>(this.apiUrl+"pictures").pipe(catchError(() => of([])))
    }).pipe(
      map(({ products, pictures }) => ({
        ...section,
        loaded: true,
        cards: products
          .map(product => ({
            ...product,
            picture: [{
              product_id: product.id,
              url: pictures.find(pic => pic.product_id === product.id)?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
            }]
          }))
      })),
      catchError(error => {
        console.error(`Error populating cards for section`, error);
        return of({ ...section, cards: [] });
      })
    );
  }
}
