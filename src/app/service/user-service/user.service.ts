import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../model/user-model/user";
import {Observable} from "rxjs";

let apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  saveUser(user : User): Observable<User>{
   return  this.httpClient.post<User>(apiURL+"user", user);
  }


  removeUser(id : any): Observable<User>{
    return  this.httpClient.delete<User>(apiURL+"user/"+id);
  }


}
