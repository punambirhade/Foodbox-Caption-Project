import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = "http://localhost:8080/api/v1/products";

  constructor(private httpClient : HttpClient) { }



  getProduct(){
    return this.httpClient.get<any>("http://localhost:8080/api/v1/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  createProduct(employee: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  updateProduct(id: number, employee: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
}

getProductCuisine(theProductId: number): Observable<ProductCategory> {

  const productUrl = `${this.baseURL}/${theProductId}/cuisine`;
  return this.httpClient.get<ProductCategory>(productUrl);
}
}