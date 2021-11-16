import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  idFournisseur = 105;
  code = 'A104B89';
  libelle = 'MyTeck';
  hide: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  hideDiv(){
    this.hide=true;
    console.log(this.hide);
  }

}
