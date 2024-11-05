import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../app/employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
})
export class EmployeeEditComponent implements OnInit {
  employee!: Employee; 

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id) {
      this.employee = this.employeeService
        .getEmployees()
        .find((emp) => emp.id === id); 
    }
  }

  saveChanges() {
    this.employee.rating = this.employee.performanceRating; 
    this.employeeService.editEmployee(this.employee);
  }

  cancel() {
    console.log('Edit canceled');
  }
}
