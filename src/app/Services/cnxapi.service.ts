import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CnxapiService {

  private url :string = environment.urlapi
  currentUser!:User

  constructor(private _client:HttpClient) { }

  connect() :Observable<User>{
    const info={
      email: "olisterik@gmail.com", passw:"Olivier21!"}
    return this._client.post<User>(this.url +"Auth/auth",info) //adresse correcte ?
  }

  
}
export interface User{
  id:number
  email:string;
  token:string;
  isAdmin: boolean;
}
