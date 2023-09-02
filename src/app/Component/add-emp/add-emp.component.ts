import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit  {
  userId !:string;
  UserForm!:FormGroup;
  isUpdate :boolean= false;
  constructor( private fb: FormBuilder,private serv:EmployeeService,private route: Router,private routes: ActivatedRoute){

  }
  ngOnInit(): void {
    this.formLoad();
this.routes.queryParams.subscribe((params:any)=>{
  this.userId = params.id

});


if(this.userId){
  this.isUpdate = true
  this.getUserbyId(this.userId)

}
  }
  
  onSubmit(){
const data = {
  empId:0,
  name: this.UserForm.value.Name,
  phoneNumber: this.UserForm.value.PhoneNumber,
  email: this.UserForm.value.Email,
  department: this.UserForm.value.Department,
  designation: this.UserForm.value.Designation,
};


this.serv.createEmployee(data).subscribe((res:any)=>{
  console.log(res);
  if(res.data==true){
    this.route.navigate(['/list']);
  }
})
  }
  formLoad(){
    return this.UserForm=this.fb.group({
      Name:[''],
      PhoneNumber:[''],
      Email:[''],
      Department:[''],
      Designation:['']
})
  }
  onBack(){
    this.route.navigate(['/list']);
  }
  getUserbyId(id:string){
    debugger
    this.serv.employeeDetailById(Number(id)).subscribe((res:any)=>{
      if(res){
        res.data
        this.UserForm.patchValue({
          Name:res.data.name,
          PhoneNumber:res.data.phoneNumber,
          Email:res.data.email,
          Department:res.data.department,
          Designation:res.data.designation
        })
      }
 
   
    })

  }
  update(){
    const userData = {
      empId:this.userId,
      name: this.UserForm.value.Name,
      phoneNumber: this.UserForm.value.PhoneNumber,
      email: this.UserForm.value.Email,
      department: this.UserForm.value.Department,
      designation: this.UserForm.value.Designation,
    };
    this.serv.updateEmployee(userData).subscribe((res:any)=>{
      if(res.data){
alert("employee update suceesfully");
this.route.navigate(['/list']);
      }
   

    })

  }
}
