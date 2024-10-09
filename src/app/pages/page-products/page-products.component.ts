import { Component, OnInit } from '@angular/core';
import { productsData } from 'src/app/data/products.data';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css'],
})
export class PageProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getProducts(): Product[] {
    return productsData;
  }

  switchToListView() {
    console.log('Modo listado');
  }
  switchToGridView() {
    console.log('Modo Grid');
  }
}
