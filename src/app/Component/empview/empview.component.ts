import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empview',
  templateUrl: './empview.component.html',
  styleUrls: ['./empview.component.css']
})
export class EMpviewComponent implements OnInit {
  data:any;
  bindData:any;
  constructor(private route: Router){
  
  }
  ngOnInit(): void {
    this.data=localStorage.getItem("info");
    this.bindData=JSON.parse(this.data)
    
  }
  onclick(){
    this.route.navigate(['/list']);
  }
}
