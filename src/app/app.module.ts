import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddEmpComponent } from './Component/add-emp/add-emp.component';
import { EMpviewComponent } from './Component/empview/empview.component';
import { SigninComponent } from './Component/signin/signin.component';
import {ExampleInterceptorInterceptor} from '../../src/app/example-interceptor.interceptor'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmpComponent,
    EMpviewComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
{    provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
