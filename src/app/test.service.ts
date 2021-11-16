import { Injectable } from '@angular/core';
import { CustomerModule } from './customer/customer.module';
import { CustomersModule } from './customers/customers.module';

@Injectable({
  providedIn: CustomersModule
})
export class TestService {
  param : number = 0;
  constructor() { 
    console.log("test service");
  }

  addInstance(){
    this.param=this.param+1;
    console.log(this.param);
  }
}
