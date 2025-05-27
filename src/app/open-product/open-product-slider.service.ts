import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../services/api.service';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Picture, Product} from '../index/components/main-content/products/interfaces/products.interface';
import {ProductDescription} from './product-description.interface';

@Injectable({
  providedIn: 'root'
})
export class OpenProductSliderService {
  private apiUrl: string;

  constructor(private http: HttpClient, private apiService:ApiService) {
    this.apiUrl=this.apiService.getBaseUrl()
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
