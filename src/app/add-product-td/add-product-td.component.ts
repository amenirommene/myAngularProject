import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.css']
})
export class AddProductTDComponent implements OnInit {
  produit : Produit = new Produit();
  constructor() { }

  ngOnInit(): void {
  }
  add(f:any){
    console.log(f);
  }
}
