import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private test:TestService) { }

  ngOnInit(): void {
    console.log("customersComponent");
    this.test.addInstance();
  }

}
