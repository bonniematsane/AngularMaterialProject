import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProComponent } from './pro/pro.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';



const routes: Routes = [
  {
    path:"",pathMatch:'full',redirectTo:"pro"
  },
  {
    path:"pro",component:ProComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"table",component:TableComponent
  },
  {
    path:"table2",component:TableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
