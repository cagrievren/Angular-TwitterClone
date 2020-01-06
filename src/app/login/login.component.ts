import { Component, OnInit } from "@angular/core";
// import { LoginInfo } from "src/login.model";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { RegisterInfo } from "src/user.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  allUsers: RegisterInfo[] = [];

  email: string = "";
  password: string = "";

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  getUsers() {
    this.loginService.getUsers().subscribe(data => {
      for (let key in data) {
        let value = data[key];
        this.allUsers.push(value);

        this.checkUser();
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
    } else {
      alert("This user is not exists");
    }
  }
}
