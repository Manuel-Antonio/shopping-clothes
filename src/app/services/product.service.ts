import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts() {}

  getProduct(productId: number) {}

  addProduct(product: any) {}

  updateProduct(productId: number, product: any) {}

  deleteProduct(productId: number) {}
}
