import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-facture2',
  templateUrl: './facture2.component.html',
  styleUrls: ['./facture2.component.css']
})
export class Facture2Component implements OnInit {
  id:number;
  active:boolean;
  constructor(private ac:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.ac.queryParamMap.subscribe
    (res=>{
      this.id=Number(res.get('id')); 
      this.active=(res.get('active')=='true');
    console.log(this.active)})};

  
    retour(){
  this.route.navigateByUrl("/maininvoice");
    }
}

