import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';


export interface Section {
  color: string;
  name: string;
  icon: string;
  param: number;
  cards: any[];
  loaderId?: string;
}

export interface Product {
  id: number;
  name: string;
  param: number;
}

export interface Picture {
  productId: number;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  private apiUrl = 'http://localhost:3000/sections';
  private picturesUrl = 'http://localhost:3000/pictures';
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getSectionsWithCards(): Observable<Section[]> {
    return this.http.get<Section[]>(this.apiUrl).pipe(
      switchMap(sections =>
        forkJoin({
          pictures: this.http.get<Picture[]>(this.picturesUrl).pipe(catchError(() => of([]))),
          products: this.http.get<Product[]>(this.productsUrl).pipe(catchError(() => of([])))
        }).pipe(
          map(({ pictures, products }) =>
            sections.map(section => ({
              ...section,
              cards: products
                .filter(product => product.param === section.param)
                .map(product => ({
                  ...product,
                  imageUrl: pictures.find(pic => pic.productId === product.id)?.url || 'assets/placeholder.jpg'
                }))
            }))
          )
        )
      ),
      catchError(error => {
        console.error('Error fetching sections or cards:', error);
        return of([]);
      })
    );
  }
}
