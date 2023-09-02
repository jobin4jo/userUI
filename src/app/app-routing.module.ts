import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { AddEmpComponent } from './Component/add-emp/add-emp.component';
import { EMpviewComponent } from './Component/empview/empview.component';
import { SigninComponent } from './Component/signin/signin.component';

const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'list',component:EmployeeListComponent},
  {path:'AddEmp',component:AddEmpComponent},
  {path:'Empinfo',component:EMpviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
