import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Service/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit  {
  collectionData: any;
  iframeSrc!: string;
  constructor( private empService:EmployeeService,private route: Router){
    
  }
  ngOnInit(): void {
   this.empList();
  }
  empList(){
    return this.empService.GetEmployeeList().subscribe((res:any)=>{
      this.collectionData=res.data;
   
    })
  }
  OnAddEmployee(){
    this.route.navigate(['/AddEmp']);
  }
  OnDelete(id:any){
  return this.empService.DeleteEmployee(id).subscribe((res:any)=>{
    if(res.data==true){
      this.empList();
    }
  })
  }
  onInfo(data:any){
   if(data!=null){
    localStorage.setItem("info",JSON.stringify(data));
    this.route.navigate(['/Empinfo'])
   }
  }
  OnEdit(data:any){
   
    this.route.navigate(['/AddEmp'], { queryParams: {id: data.empId,}});
  }
  ////Export Excel Functionalities in TSfile
  ongenerateExcel(){
    this.empService.GetExportExcel().subscribe((res:any)=>{
   var binaryData = atob(res.data);
 //  base64String:String=res.data;
 const blob = new Blob([new Uint8Array(binaryData.length).map((_, index) => binaryData.charCodeAt(index))], {
  type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
});

//another options

const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'EmployeeList.xlsx'; // 
      a.click();
      window.URL.revokeObjectURL(url);

    })
  }
}
