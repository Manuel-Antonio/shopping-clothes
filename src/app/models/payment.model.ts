export interface Payment {
    paymentId: number;
    paymentDate: Date;
    totalAmount: number;
    employeeId: number;   // Relationship with the employee who processed the payment
    branchId: number;     // Relationship with the branch where the payment was made
    couponId?: number;    // (Optional) Relationship with the coupon used in the payment
}
