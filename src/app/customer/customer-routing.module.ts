import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCComponent } from './my-c/my-c.component';

const routes: Routes = [
  {path:"myC", component:MyCComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
