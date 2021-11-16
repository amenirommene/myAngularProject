import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-my-c',
  templateUrl: './my-c.component.html',
  styleUrls: ['./my-c.component.css']
})
export class MyCComponent implements OnInit {

  constructor(private t:TestService) { }

  ngOnInit(): void {
    console.log("je suis myC");
  }

}
