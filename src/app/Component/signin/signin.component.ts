import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signForm!:FormGroup;
  constructor(private fb: FormBuilder,private ui:EmployeeService,private route: Router){

  }
  ngOnInit(): void {
    this.formload();
  }
  formload(){
   return this.signForm=this.fb.group({
    username:[''],
    mobile:['']
   })
  }
  onsubmit(){
  this.ui.signin(this.signForm.value).subscribe((res:any)=>{
    const authToken =res.data;
    localStorage.setItem('authToken', authToken);
    if(res.data!=null){
      this.signForm.reset()
      this.route.navigate(['/list']);
    }
  })
  }
}
