import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
employee={
  name:'',
  location:'',
  salary:'',
  position:''
}
  constructor(public empservice:EmployeeService,public router:Router) { }

  ngOnInit(): void {
    let id=localStorage.getItem('empid');
    this.empservice.getemp(id).subscribe((data)=>{ 
      this.employee=JSON.parse(JSON.stringify(data))}
   )
  }
updatedetails(){
  this.empservice.updtemp(this.employee).subscribe((data)=>{alert("Employee updated");
this.router.navigate([''])})
}
}
