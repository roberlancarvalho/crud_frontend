import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly API = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.API, product).pipe(
      first(),
      tap((products) => console.log(products))
    );
  }

  list() {
    return this.httpClient.get<Product[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((products) => console.log(products))
    );
  }
}
