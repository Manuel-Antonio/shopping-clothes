import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css']
})
export class MenuAsideComponent{
 
  isClosed = false; // Controla si el menú está cerrado o abierto

  // Definir las secciones del menú con sus iconos y etiquetas
  menuItems = [
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'shopping_cart', label: 'Products', route: '/products' },
    { icon: 'people', label: 'Employees', route: '/employees' },
    { icon: 'assessment', label: 'Reports', route: '/reports' },
    { icon: 'payment', label: 'Payments', route: '/payments' },
    { icon: 'local_offer', label: 'Discounts', route: '/discounts' }
  ];

  // Alternar el estado de cerrado/abierto
  toggleAside() {
    this.isClosed = !this.isClosed;
  }
   // Método para verificar si el elemento es el último
   isLast(item: any): boolean {
    return item === this.menuItems[this.menuItems.length - 1];
  }

}
