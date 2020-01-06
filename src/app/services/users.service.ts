import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  onCreateUser(userData) {
    this.http
      .post("https://angulartwitterclone.firebaseio.com/users.json", userData)
      .subscribe(sendingData => {
        console.log(sendingData);
      });
  }
}
