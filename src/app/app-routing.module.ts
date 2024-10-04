import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProductsComponent } from './pages/page-products/page-products.component';
import { PageEmployeesComponent } from './pages/page-employees/page-employees.component';
import { PageReportsComponent } from './pages/page-reports/page-reports.component';
import { PagePaymentsComponent } from './pages/page-payments/page-payments.component';
import { PageDiscountsComponent } from './pages/page-discounts/page-discounts.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige al inicio
  { path: 'home', component: PageHomeComponent },
  { path: 'products', component: PageProductsComponent },
  { path: 'employees', component: PageEmployeesComponent },
  { path: 'reports', component: PageReportsComponent },
  { path: 'payments', component: PagePaymentsComponent },
  { path: 'discounts', component: PageDiscountsComponent },
  { path: '**', redirectTo: '/home' } // Ruta de redirección para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
