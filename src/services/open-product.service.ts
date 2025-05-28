import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Product,Picture} from '../app/open-product/products.interface';
import {ProductDescription} from '../app/open-product/product-description.interface';

@Injectable({
  providedIn: 'root'
})
export class OpenProductService {
  private apiUrl: string="http://localhost:3000";

  constructor(private http: HttpClient) {
  }

  getData(id: number): Observable<Product | null> {
    return forkJoin({
      product: this.http.get<Product>(`${this.apiUrl}/products/${id}`).pipe(
        catchError(() => of(null))
      ),
      pictures: this.http.get<Picture[]>(`${this.apiUrl}/pictures?product_id=${id}`).pipe(
        catchError(() => of([]))
      )
    }).pipe(
      map(({ product, pictures }) => {
        if (!product) return null;
        return {
          ...product,
          picture: pictures.length > 0
            ? pictures
            : [{
              product_id: id,
              url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
            }]
        };
      }),
      catchError(error => {
        console.error('Error fetching product and pictures', error);
        return of(null);
      })
    );
  }
  getDescription(id: number):Observable<ProductDescription> {
    return this.http.get<ProductDescription>(`${this.apiUrl}/description?product_id=${id}`)
  }



}
