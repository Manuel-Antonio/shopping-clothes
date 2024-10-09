export interface Employee {
    employeeId: number;
    name: string;
    lastname?: string;
    position?: string;
    email?: string;
    phone?: string;
    image: string;
    branchId: number;  // Relationship with the branch where the employee works
}
