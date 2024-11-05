import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../app/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  newEmployee: Employee = {
    id: '', // We will generate this later
    name: '',
    position: '',
    department: '',
    performanceRating: 0,
    rating: 0, // You can adjust this as needed
    email: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  addEmployee() {
 
    this.newEmployee.id = (
      this.employeeService.getEmployees().length + 1
    ).toString(); 

    this.employeeService.addEmployee(this.newEmployee); 
    this.resetForm(); 

  
    this.router.navigate(['/']); 
  }

  resetForm() {
  
    this.newEmployee = {
      id: '',
      name: '',
      position: '',
      department: '',
      performanceRating: 0,
      rating: 0,
      email: '',
    };
  }
}
