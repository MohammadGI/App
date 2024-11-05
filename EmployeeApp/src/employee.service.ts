import { Injectable } from '@angular/core';
import { Employee } from './app/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: any[] = []; // Change 'any' to your employee type

  constructor() {
    this.loadEmployees(); // Load employees when the service is created
  }

  loadEmployees() {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const employees = localStorage.getItem('employees');
      this.employees = employees ? JSON.parse(employees) : this.mockEmployees();
    }
  }

  getEmployees() {
    return this.employees; // Return the employee list
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.saveToLocalStorage();
  }

  editEmployee(updatedEmployee: any) {
    const index = this.employees.findIndex(
      (emp) => emp.id === updatedEmployee.id
    );
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
      this.saveToLocalStorage();
    }
  }

  deleteEmployee(id: string) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
    this.saveToLocalStorage();
  }

  resetData() {
    localStorage.removeItem('employees');
    this.loadEmployees();
  }

  private saveToLocalStorage() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('employees', JSON.stringify(this.employees));
    }
  }

  private mockEmployees() {
    return [
      {
        id: '1',
        name: 'John Doe',
        position: 'Developer',
        department: 'IT',
        performanceRating: 4,
        rating: 4,
      },
    ];
  }
}
