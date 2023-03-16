import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeePaymentsFormComponent } from './components/employee-payments-form/employee-payments-form.component';
import { EmployeePaymentsTableComponent } from './components/employee-payments-table/employee-payments-table.component';

const routes: Routes = [
  {path: '', component: EmployeePaymentsTableComponent},
  {path: 'table', component: EmployeePaymentsTableComponent},
  {path: 'form/:id', component: EmployeePaymentsFormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
