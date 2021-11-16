import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
   list : string[] = [];
  // @Input() myProperty : string;
   myprop : string ="";
  @Input() set my(p:string){
    this.myprop=p.bold();
    this.myprop=p.toUpperCase();
    this.list.push(this.myprop);
    console.log(this.list);
  };
  constructor() { }

  /*setmy(){
    this.list.push(this.my);
  }
*/
  ngOnInit(): void {
    
  }

  /*ngOnChanges(changes:SimpleChange){
    console.log(changes);
    this.myProperty.toUpperCase();
    this.list.push(this.myProperty);
    //this.setmy();
    console.log(this.list);
  }*/

}
