import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-add-form-rf',
  templateUrl: './add-form-rf.component.html',
  styleUrls: ['./add-form-rf.component.css']
})
export class AddFormRFComponent implements OnInit {

  myForm:FormGroup;
  p:Produit=new Produit();
  list : Produit[]=[];
  constructor() { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      groupe1:new FormGroup({
      idProduit:new FormControl(),
      code:new FormControl(),
      libelle:new FormControl(),
      prixUnitaire:new FormControl()
    }),
    groupe2:new FormGroup({
      idDetailsProduit:new FormControl(),
      dateCreation:new FormControl(),
      dateDerniereModification:new FormControl(),
      categorieProduit:new FormControl()
    })
    });
  }
    addProduct(){
      //this.list.push(this.myForm.getRawValue());
    //  this.p.idProduit=this.myForm.get('groupe1')?.get('idProduit')?.value
      console.log(this.myForm.value);
      console.log(this.myForm.get('groupe1')?.value);
    //  console.log(this.p.idProduit);
    }
}
