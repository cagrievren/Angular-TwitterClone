import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBS3a2u0ubAyN6WeaKntisVllVdHSlxRwo',
    {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}
