import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ProduitComponent } from '../produit/produit.component';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  listProduits : Produit[]=[];
  nb = -1;
  valcode="";
  p:Produit = new Produit();
  constructor() { }

  ngOnInit(): void {
    this.listProduits=[
      {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
      {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
      {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
      {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
      {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02},
    ]
  }
  modifyTVA(i:number){
    this.listProduits[i].tauxTVA = 0.02;
    this.nb=i;

  }
  addProduct(){
    this.listProduits.push(this.p);
    this.p=new Produit();
  }
  
}
