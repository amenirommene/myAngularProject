import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit {
   postForm : FormGroup;
  constructor(private _service:UsersService) { }
  addPost(){
      this._service.addPost(this.postForm.value).subscribe();
  }
  ngOnInit(): void {
    this.postForm = new FormGroup({
     id:new FormControl(),
     title:new FormControl(),
     author:new FormControl()
    })
  }

}
