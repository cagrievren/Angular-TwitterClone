import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable({
  providedIn: "root"
})
export class SignInService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(
      "https://angulartwitterclone.firebaseio.com/users.json"
    );
  }

  // signUp(email: string, password: string) {
  //   return this.http.post<AuthResponseData>(
  //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBS3a2u0ubAyN6WeaKntisVllVdHSlxRwo',
  //     {
  //       email: email,
  //       password: password,
  //       returnSecureToken: true
  //     }
  //   );
  // }
}
