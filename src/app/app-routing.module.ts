import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './facture/facture.component';
import { Facture2Component } from './facture2/facture2.component';
import { HomeComponent } from './home/home.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { MainUserComponent } from './main-user/main-user.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginUserComponent},
  //url=http://localhost:4200/mainuser/Category/Customer 
  //si pathMatch: prefix => alors redirection to home
  //si pathMatch: full=> ne pas appliquer la redirection
  //donc si pathMatch = prefix : dés que on trouve le path un prefixe d'une route
  //alors appliquer la redirection 
  //{path:"mainuser", redirectTo:"/home", pathMatch:"prefix"},
  {path:"mainuser", component:MainUserComponent, children:[
    {path:"Category/:category", component:ListUserComponent}
  ]},
  
  

  
 
  // {path:"", component:TestComponent},
 // {path:"test", redirectTo:"mainuser/Category", pathMatch:"prefix"},
  {path:"mainproduct", component:MainProductComponent},
  {path:"mainprovider", component:MainProviderComponent},
  {path:"maininvoice", component:MainInvoiceComponent},
  {path:"invoice/:idF/:active", component:FactureComponent},
  {path:"invoice", component:Facture2Component},
  {path:"list/:id/:name", component:ListUserComponent},
  {path:"profiles", component:ListUserComponent},
  {path: "factures", component:ListFacturesComponent},
  {path: "factures/:id", component:FactureComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path: "**", component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
