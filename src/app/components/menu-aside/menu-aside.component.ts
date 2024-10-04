import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css']
})
export class MenuAsideComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isClosed = false; // Controla si el menú está cerrado o abierto

  // Definir las secciones del menú con sus iconos y etiquetas
  menuItems = [
    { icon: 'home', label: 'Home' },
    { icon: 'shopping_cart', label: 'Products' },
    { icon: 'people', label: 'Employees' },
    { icon: 'assessment', label: 'Reports' },
    { icon: 'payment', label: 'Payments' },
    { icon: 'local_offer', label: 'Discounts' }
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
