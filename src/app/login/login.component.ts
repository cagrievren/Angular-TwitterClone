import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { RegisterInfo } from "src/user.model";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  
  allUsers: RegisterInfo[] = [];

  email: string = "";
  password: string = "";

  getUserSubscriber: Subscription;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  getUsers() {
    this.getUserSubscriber = this.loginService.getUsers().subscribe(data => {
      if (data === null) {
        alert('E-mail is not exists! Please sign up.');
      } else {
        for (let key in data) {
          let value = data[key];
          this.allUsers.push(value);
          this.checkUser();
        }
      }
    });
  }

  signIn() {
    this.getUsers();
  }

  checkUser() {
    let userIndex = -1;

    let flag = false;
    for (let i = 0; i < this.allUsers.length; i++) {
      if (
        this.email === this.allUsers[i].email &&
        this.password === this.allUsers[i].password
      ) {
        flag = true;
        userIndex = i;
      }
    }

    if (flag === true) {
      this.allUsers[userIndex];
      this.router.navigate(["/post-screen"]);
      this.getUserSubscriber.unsubscribe();
    } else {
      alert("E-mail address or password is wrong! Please try again.");
    }
  }
}
