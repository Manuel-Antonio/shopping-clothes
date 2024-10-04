import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  getEmployees() {}

  getEmployee(employeeId: number) {}

  addEmployee(employee: any) {}

  updateEmployee(employeeId: number, employee: any) {}

  deleteEmployee(employeeId: number) {}
}
