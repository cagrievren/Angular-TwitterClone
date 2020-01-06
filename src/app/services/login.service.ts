import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://angulartwitterclone.firebaseio.com/users.json');
  }
}
