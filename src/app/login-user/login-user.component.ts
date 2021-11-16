import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm : FormGroup;
  cnx : any = [];

  constructor() { }
  dis:boolean=true;
  ngOnInit(): void {
    this.loginForm=new FormGroup({
       email : new FormControl({value: 'test@gmailcom', disabled: true},[Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
       pwd: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z-0-9]{8,}")]),
       competences: new FormArray([ new FormControl('') ])

      });

      
  }
  get competences() {
    return this.loginForm.get('competences') as FormArray;
  }
  addCompetence() {
    this.competences.push(new FormControl(''));
  }
  get password(){
    return this.loginForm.get('pwd');
  }
  get email(){
    return this.loginForm.controls.email;
  }
   
  addConnexion(){
    console.log(this.loginForm.value);
    this.cnx.push(this.loginForm.getRawValue());
    this.loginForm.reset();
    console.log(this.cnx);
  }
  add(){
    console.log(this.loginForm.value());//ne retourne pas les valeurs des input disabled
    console.log(this.loginForm.getRawValue());   //retourne les valeurs des input disabled
     this.cnx.push(this.loginForm.value());
   // this.cnx.push(this.loginForm.getRawValue());
    this.loginForm.reset();
  }
}
