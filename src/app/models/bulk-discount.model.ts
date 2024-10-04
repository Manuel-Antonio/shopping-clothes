export interface BulkDiscount {
    discountId: number;
    categoryId?: number;  // (Optional) Relationship with the product category
    branchId?: number;    // (Optional) Relationship with the branch
    discountPercentage: number;  // Percentage of discount
    startDate: Date;
    endDate: Date;
}
