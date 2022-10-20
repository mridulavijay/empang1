import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
employee={
  name:"",
  position:"",
  location:"",
  salary:""
}

  constructor(public service:EmployeeService,public route:Router) { }
  
  ngOnInit(): void {
  }
dataemp(){
  this.service.addemp(this.employee).subscribe((data=>{
    alert("Employee added");
    this.route.navigate(['']);
  }))
}
}
