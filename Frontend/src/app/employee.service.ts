import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
server_address='/api';
  constructor(public http:HttpClient) { }
  getemployee(){
    return this.http.get(`${this.server_address}/employeelist`);
  }
  addemp(emp:any){
    return this.http.post<any>(`${this.server_address}/employeelist`,emp);
  }
  delemp(id:any){
    return this.http.delete(`${this.server_address}/employeelist/`+id);
  }
  getemp(id:any){
    return this.http.get(`${this.server_address}/employeelist/`+id);
  }
  updtemp(data:any){
    return this.http.put<any>(`${this.server_address}/employeelist`,data);
  }
}
