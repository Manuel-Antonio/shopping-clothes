export interface Product {
  productId: number;
  description: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  discount: number; // Discount applied to individual product
  categoryId: number; // Relationship with the category
  branchId: number; // Relationship with the branch
}
