import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  getemployee(){
    return this.http.get('http://localhost:3000/employeelist');
  }
  addemp(emp:any){
    return this.http.post<any>('http://localhost:3000/employeelist',emp);
  }
  delemp(id:any){
    return this.http.delete('http://localhost:3000/employeelist/'+id);
  }
}
