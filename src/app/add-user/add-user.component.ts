import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  categorie="Customer";
  list:User[]=[];
  user:User=new User();

  constructor() { }

  add(){
    this.user.idCustomer=this.list.length + 1;
    this.user.accountCategory=this.categorie;
    this.list.push(this.user);
    this.user=new User();
    
  }

  ngOnInit(): void {
  }

}
