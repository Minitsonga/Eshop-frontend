import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = '/api/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.productsUrl}/${id}`);
  }
}
