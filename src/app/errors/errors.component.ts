import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
@Input() error:any;
message : string="";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.message="";
    console.log(this.error.pattern);
    if (this.error.required){
      this.message="Champ Obligatoire";
    }
    else {
      
      if (this.error.minlength){
        let min = this.error.minlength.requiredLength;
        this.message=this.message+" "+"Il faut avoir minimum "+min+" caractères";
      }
      if (this.error.pattern){
        switch(this.error.pattern.requiredPattern) { 
          case "^[a-zA-Z]*$": { 
            this.message=this.message+" "+"Il faut écrire que des lettres"; 
             break; 
          } 
          case "^[a-zA-Z0-9._-]+@gmail.com$": { 
            this.message=this.message+" "+"Mail se termine par @gmail.com"; 
             break; 
          } 
          default: { 
            this.message="Merci de respecter le pattern"; 
            break; 
         } 
        //this.message=this.message+" "+"Merci de respecter le pattern";
      }
    }
    } 
  }

}
