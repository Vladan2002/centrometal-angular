import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {ApiService} from '../services/api.service';
import { Product, Picture } from '../app/open-product/products.interface';
import { ProductDescription } from '../app/open-product/product-description.interface';

@Injectable({
  providedIn: 'root'
})
export class OpenProductService {
  private apiUrl = '';

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.apiUrl = this.apiService.getBaseUrl();
  }

  public getData(id: number): Observable<Product> {
    return forkJoin({
      product: this.http.get<Product>(`${this.apiUrl}/products/${id}`),
      pictures: this.http.get<Picture[]>(`${this.apiUrl}/pictures?product_id=${id}`).pipe(
        catchError(() => of([]))
      )
    }).pipe(
      map(({ product, pictures }) => ({
        ...product,
        picture: pictures.length > 0
          ? pictures
          : [{
              product_id: id,
              url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
            }]
      })),
      catchError(error => {
        console.error('Error fetching product and pictures', error);
        throw error;
      })
    );
  }

  public getDescription(id: number): Observable<ProductDescription[]> {
    return this.http.get<ProductDescription[]>(`${this.apiUrl}/description?product_id=${id}`);
  }

  public getSimilarProducts(subcategoryId: number, excludeId: number): Observable<Product[]> {
    const url = `${this.apiUrl}/products?subcategory_id=${subcategoryId}&id_ne=${excludeId}&_limit=4`;

    return forkJoin({
      products: this.http.get<Product[]>(url).pipe(catchError(() => of([]))),
      pictures: this.http.get<Picture[]>(`${this.apiUrl}/pictures`).pipe(catchError(() => of([])))
    }).pipe(
      map(({ products, pictures }) =>
        products.map(product => ({
          ...product,
          picture: [{
            product_id: product.id,
            url: pictures.find(pic => pic.product_id === product.id)?.url ||
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
          }]
        }))
      ),
      catchError(error => {
        console.error('Error fetching similar products', error);
        return of([]);
      })
    );
  }
}
