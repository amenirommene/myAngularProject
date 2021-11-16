import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { Customers2Component } from './customers2/customers2.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'my', component: Customers2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
