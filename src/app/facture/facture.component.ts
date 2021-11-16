import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  id:number;
  active:boolean;
  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe
    (res=>{
      this.id=Number(res.get('idF')); 
      this.active=(res.get('active')=='true');
    console.log(this.active)})};

}
