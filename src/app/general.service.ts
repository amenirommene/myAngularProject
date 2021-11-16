import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  nbInstances : number = 0;
  param:number=0;
  constructor() {
    this.nbInstances = this.nbInstances + 1;
    console.log("nouvelle instance de generalService :" + this.nbInstances);
   }
   Increment(){
    this.param=this.param+1;
    console.log(this.param);

}

}
