import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EmpApi= environment.EmployeeAPI;
  constructor(private http:HttpClient) { }

  GetEmployeeList(){
    return this.http.get(this.EmpApi+'Employee/List');
  }
  createEmployee(data:any){
    return this.http.post(this.EmpApi+'Employee/Insert',data)
  }
  updateEmployee(data:any){
    return this.http.put(this.EmpApi+'Employee/Update',data)
  }
  DeleteEmployee(id:any){
    return  this.http.delete(this.EmpApi+'Employee/DeleteById?Id='+id)
  }
  employeeDetailById(id:any){
    return this.http.get(this.EmpApi+'Employee/GetById?Id='+id)
  }
  signin(data:any){
   return this.http.post(this.EmpApi+'User/Login',data)

  }
  GetExportExcel(){
    return this.http.get(this.EmpApi+'Employee/ExportExcel');
  }

}
