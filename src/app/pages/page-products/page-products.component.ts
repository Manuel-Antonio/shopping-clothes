import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { productsData } from 'src/app/data/products.data';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css'],
})
export class PageProductsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  ELEMENT_DATA: Product[] = productsData;
  displayedColumns: string[] = [
    'select', 
    'productId',
    'image',
    'name',
    'price',
    'stock',
    'discount',
    'categoryId',
  ];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  

  selectedModeModify :string = '';
  private _liveAnnouncer = inject(LiveAnnouncer);
  constructor() {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {}

  // Metodos de tabla
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getProducts(): Product[] {
    return productsData;
  }

  selection = new SelectionModel<any>(true, []); 

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // Metodos para paginacion

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  announceSortChange(sortState: Sort) {
    this._liveAnnouncer.announce('Sorting cleared');
  }

  // Metodos para CRUD

  modePanelCreate() {
    this.selectedModeModify = 'C';
    console.log(this.selectedModeModify)
  }

}
