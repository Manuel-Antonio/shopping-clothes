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
  isEnabledModeList: boolean = false;
  readonly checked = false;
  readonly indeterminate = false;
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
  private _liveAnnouncer = inject(LiveAnnouncer);
  constructor() {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getProducts(): Product[] {
    return productsData;
  }

  switchToListView() {
    console.log('Modo listado');
  }
  switchToGridView() {
    console.log('Modo Grid');
  }

  switchEnabledModeList() {
    this.isEnabledModeList = !this.isEnabledModeList;
    if (this.isEnabledModeList) {
      this.switchToListView();
    } else {
      this.switchToGridView();
    }
  }
  selection = new SelectionModel<any>(true, []); // 'true' para permitir selección múltiple

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    console.log('Ordenando', sortState);
    this._liveAnnouncer.announce('Sorting cleared');
  }
}
