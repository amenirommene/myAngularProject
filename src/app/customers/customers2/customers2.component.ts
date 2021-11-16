import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-customers2',
  templateUrl: './customers2.component.html',
  styleUrls: ['./customers2.component.css']
})
export class Customers2Component implements OnInit {

  constructor(private test:TestService) { }

  ngOnInit(): void {
    console.log("customers2Component");
    this.test.addInstance();
  }

}
