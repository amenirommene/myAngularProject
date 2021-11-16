import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';

@Component({
  selector: 'app-list-fournisseurs',
  templateUrl: './list-fournisseurs.component.html',
  styleUrls: ['./list-fournisseurs.component.css']
})
export class ListFournisseursComponent implements OnInit {

  list : Fournisseur[]=[];
  constructor() { }

  ngOnInit(): void {
    this.list=[
      {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
      {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
      {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
      {idFournisseur:400,code:"40ABC452",libelle:"asus"}
    ]
  }

  getColor(code:string){
    if (code.substring(0,2)=='2A')
      return 'bold';
    else
      return 'normal';
    

  }

  delete(i:number){
    this.list.splice(i,1);
  }

}
