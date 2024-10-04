export interface Product {
    productId: number;
    name: string;
    price: number;
    stock: number;
    discount: number;  // Discount applied to individual product
    categoryId: number;  // Relationship with the category
    branchId: number;   // Relationship with the branch
}
