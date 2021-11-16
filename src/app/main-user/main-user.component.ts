import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../general.service';
import { SpecificService } from '../specific.service';
import { TestService } from '../test.service';
import { UsersService } from '../users.service';
import { VariablesGlobales } from '../variablesgolabes';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css'],
  providers:[SpecificService]
})
export class MainUserComponent implements OnInit {
  users : any;
  form = new FormGroup({
    id: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required)
  });
  constructor(private myservice:UsersService, private specif:SpecificService, private vr : VariablesGlobales) { }
  async save(){
    if (!this.form.valid)
      return console.log('error form validation');
    await this.myservice.update(this.form.value);
       
  }
  ngOnInit(): void {
   // console.log(this.vr.parametre);
   // this.vr.parametre="toto+user";
    //this.myservice.Increment();
   // this.specif.Increment();
   this.myservice.getUsers().subscribe(res=>console.log(res));
   //console.log(this.myservice.users);
  }

  

}
