import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
employees=[{
  name:'',
  position:'',
  location:''
}];
item:any;
  constructor(public emp_service:EmployeeService,public router:Router) { }

  ngOnInit(): void {
    this.emp_service.getemployee().subscribe((data=>{
      this.employees=JSON.parse(JSON.stringify(data));
    }))
  }
emp_del(employee:any){
this.emp_service.delemp(employee._id).subscribe((data)=>{
this.employees=this.employees.filter(a => a!==employee);
  console.log("deleted");
})
}
emp_upt(employee:any){
  let empid=localStorage.setItem('empid',employee._id.toString())
this.router.navigate(['/update']);
}
}
