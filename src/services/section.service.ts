import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, forkJoin, of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Section {
  name: string;
  param: number;
  color: string;
  icon: string;
  cards: Product[];
  loaded: boolean;
}

export interface Product {
  id: number;
  name: string;
  discount: number;
  subcategory_id:number;
  price: number;
  picture: Picture;
}

export interface Picture {
  product_id: number;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  private apiUrl = 'http://localhost:3000/sections';
  private picturesUrl = 'http://localhost:3000/pictures';
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}
  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.apiUrl).pipe(
      map(sections => sections.map(section => ({
        name: section.name,
        param: section.param,
        color: section.color,
        icon: section.icon,
        cards: [],
        loaded: false,
      }))),
      catchError(error => {
        console.error('Error fetching sections:', error);
        return of([]);
      })
    );
  }

  private getProductsUrl(param: number): string {
    if (param === 0) return `${this.productsUrl}?discount_gte=0&_limit=4`;
    else if (param === 1) return `${this.productsUrl}?discount_gte=5&_limit=8`;
    else if (param === 2) return `${this.productsUrl}?discount_gte=0&_limit=4`;
    else if (param === 3) return `${this.productsUrl}?discount_gte=100&_limit=4`;
    else if (param === 4) return `${this.productsUrl}?discount_gte=970&_limit=4`;
    else return this.productsUrl;
  }


  populateSectionCards(section: Section): Observable<Section> {

    let url = this.getProductsUrl(section.param);
    return forkJoin({
      products: this.http.get<Product[]>(url).pipe(catchError(() => of([]))),
      pictures: this.http.get<Picture[]>(this.picturesUrl).pipe(catchError(() => of([])))
    }).pipe(
      map(({ products, pictures }) => ({
        ...section,
        loaded: true,
        cards: products
          .map(product => ({
            ...product,
            picture: {
              product_id: product.id,
              url: pictures.find(pic => pic.product_id === product.id)?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
            }
          }))
      })),
      catchError(error => {
        console.error(`Error populating cards for section`, error);
        return of({ ...section, cards: [] });
      })
    );
  }
}

