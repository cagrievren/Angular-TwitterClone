import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterInfo } from 'src/login.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user = new RegisterInfo('', '', '', '')

  constructor(private http: HttpClient) { }

  signUp(){
    return this.http.post('https://angulartwitterclone.firebaseio.com/users.json',
    {
      name: name,
      surname: surname,
      email: email,
      password: password
    });
  }
  
}
