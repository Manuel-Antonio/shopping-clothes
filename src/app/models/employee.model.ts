export interface Employee {
    employeeId: number;
    fullName: string;
    position: string;
    email: string;
    phone: string;
    branchId: number;  // Relationship with the branch where the employee works
}
