import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : any;
  constructor(private _service:UsersService) { }

  ngOnInit(): void {
     this._service.getPosts().subscribe(res=>{this.posts=res, console.log(res)});
  }

}
