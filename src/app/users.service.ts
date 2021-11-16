import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { first } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: any;
  constructor(
    private _http: HttpClient
  ) {}

  getPosts(){
    return this._http.get("http://localhost:3000/posts");
  }
  getUsers(){
   return this._http.get("https://reqres.in/api/users");
  }

  addPost(post:any){
    return this._http.post("http://localhost:3000/posts",post)
  }
  async update(userData:any) {
    const updated = await this._http.put('https://reqres.in/api/users/' + userData.id, userData).toPromise().catch(err => err);
    this.users.next([
      // non filtre les donnée privée et assign une nouvelle valeur
   //   ...this.users.value.filter(u => u.id !== updated.id),
      updated
    ]);
  }
  editUsers(){
    //this.users.
  }

  /*async load() {
    await this._http.get('https://reqres.in/api/users')
      .pipe(first())
      .toPromise()
      .then(response => {
        this.users = response;
      })
      .catch(err => console.log(err))
  }

  async update(userData:any) {
    const updated = await this._http.put('https://reqres.in/api/users/' + userData.id, userData).toPromise().catch(err => err);
    // update service data
    /*this.users = [
      ...this.users.filter(u => u.id !== updated.id),
      updated
    ];*/
 // }

}
