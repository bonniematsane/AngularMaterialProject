import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProComponent } from './pro/pro.component';

const routes: Routes = [
  {
    path:"",pathMatch:'full',redirectTo:"pro"
  },
  {
    path:"pro",component:ProComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
