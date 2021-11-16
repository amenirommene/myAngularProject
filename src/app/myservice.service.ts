import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {
   nb:number = 0;
  constructor() { 
    console.log("je suis une nouvelle instance");
  }
  addNb(){
    this.nb=this.nb+1;
    console.log("nb:"+ this.nb);
  }
}
