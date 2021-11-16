import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-main-provider',
  templateUrl: './main-provider.component.html',
  styleUrls: ['./main-provider.component.css'],
  providers:[GeneralService]
})
export class MainProviderComponent implements OnInit {

  constructor(private test:GeneralService) { }

  ngOnInit(): void {
    this.test.Increment();
  }

}
