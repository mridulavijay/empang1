import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:'',component:EmployeelistComponent},{
  path:'form',component:EmployeeformComponent
},{path:'update',component:UpdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
