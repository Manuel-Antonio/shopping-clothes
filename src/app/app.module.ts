import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconButton } from '@angular/material/button';

import { AppComponent } from './app.component';
import { MenuAsideComponent } from './components/menu-aside/menu-aside.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProductsComponent } from './pages/page-products/page-products.component';
import { PageEmployeesComponent } from './pages/page-employees/page-employees.component';
import { PageReportsComponent } from './pages/page-reports/page-reports.component';
import { PagePaymentsComponent } from './pages/page-payments/page-payments.component';
import { PageDiscountsComponent } from './pages/page-discounts/page-discounts.component';
import { AnnualSalesComponent } from './components/annual-sales/annual-sales.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent, 
    MenuAsideComponent,
    PageHomeComponent,
    PageProductsComponent,
    PageEmployeesComponent,
    PageReportsComponent,
    PagePaymentsComponent,
    PageDiscountsComponent,
    AnnualSalesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    AppRoutingModule,
    MatCheckboxModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
