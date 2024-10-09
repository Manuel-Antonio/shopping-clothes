import { Product } from '../models/product.model';

export const productsData: Product[] = [
  {
    productId: 1,
    name: 'Camisa Casual',
    description: 'Camisa de algodón ligera y cómoda.',
    price: 30.0,
    stock: 50,
    image: 'https://via.placeholder.com/150', // Sustituye por la URL real
    discount: 5,
    categoryId: 1,
    branchId: 1,
  },
  {
    productId: 2,
    name: 'Pantalón Deportivo',
    description: 'Pantalón versátil ideal para hacer deporte.',
    price: 40.0,
    stock: 30,
    image: 'https://via.placeholder.com/150',
    discount: 10,
    categoryId: 2,
    branchId: 1,
  },
  {
    productId: 3,
    name: 'Zapatos Elegantes',
    description: 'Zapatos de cuero para ocasiones especiales.',
    price: 80.0,
    stock: 20,
    image: 'https://via.placeholder.com/150',
    discount: 15,
    categoryId: 3,
    branchId: 1,
  },
  {
    productId: 4,
    name: 'Chaqueta de Invierno',
    description: 'Chaqueta abrigadora y elegante.',
    price: 100.0,
    stock: 15,
    image: 'https://via.placeholder.com/150',
    discount: 20,
    categoryId: 4,
    branchId: 2,
  },
  {
    productId: 5,
    name: 'Vestido de Noche',
    description: 'Vestido largo perfecto para eventos formales.',
    price: 120.0,
    stock: 10,
    image: 'https://via.placeholder.com/150',
    discount: 25,
    categoryId: 5,
    branchId: 2,
  },
];
