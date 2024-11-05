import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../app/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchQuery: string = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
    this.filteredEmployees = [...this.employees];
  }

  search(): void {
    this.filteredEmployees = this.employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        employee.department
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
    );
  }

  sortList(by: 'name' | 'department'): void {
    this.filteredEmployees.sort((a, b) => a[by].localeCompare(b[by]));
  }

  viewDetails(employee: Employee): void {
   
    console.log('Viewing details for:', employee);
  }

  editEmployee(employee: Employee): void {
    this.router.navigate(['/edit', employee.id]); 
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id.toString()); 
    this.loadEmployees(); 
  }

  resetData(): void {
    this.employeeService.resetData();
    this.loadEmployees(); 
  }
}
