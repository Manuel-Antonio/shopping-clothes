export interface DiscountCoupon {
    couponId: number;
    code: string;
    discountPercentage: number;  // Percentage of discount
    expirationDate: Date;
}
