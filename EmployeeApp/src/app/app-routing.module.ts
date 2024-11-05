import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { FormComponent } from '../form/form.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'edit/:id', component: EmployeeEditComponent }, 
  { path: 'add-employee', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
