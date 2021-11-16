import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { MyserviceService } from '../myservice.service';
import { TestService } from '../test.service';
import { VariablesGlobales } from '../variablesgolabes';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css'],
  providers:[MyserviceService]
})
export class MainProductComponent implements OnInit {

  constructor(private mys:MyserviceService, private test:GeneralService, private vr : VariablesGlobales) { }

  ngOnInit(): void {
   // console.log(this.vr.parametre);
   // this.vr.parametre="toto+product";
    this.test.Increment();
   // this.mys.addNb();
  }

}
