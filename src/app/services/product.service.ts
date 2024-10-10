import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts() {}

  getProduct(productId: number) {}

  addProduct(product: Product) {}

  updateProduct(productId: number, product: Product) {}

  deleteProduct(productId: number) {}
}
