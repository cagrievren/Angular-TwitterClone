import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { RegisterInfo } from "src/user.model";
import { HttpClient } from "@angular/common/http";
import { LoginService } from "../services/login.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  
  userData: RegisterInfo = {} as RegisterInfo;
  allUsers: RegisterInfo[] = [];
  email: string = '';
  getUserSubscriber: Subscription;
  error: string = null;

  constructor(
    private http: HttpClient,
    private usersService: UsersService,
    private loginService: LoginService
  ) {}

  ngOnInit() {}

  signUp() {
    this.checkDatabase();
  }

  checkDatabase() {
    this.getUserSubscriber = this.loginService.getUsers().subscribe(data => {
      if (data === null) {
        this.usersService.onCreateUser(this.userData);
      } else {
        for (let key in data) {
          let value = data[key];
          this.allUsers.push(value);
        }
        this.checkDatabaseEmail();
      }
    });
  }

  checkDatabaseEmail() {
    let flag = true;

    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.userData.email === this.allUsers[i].email) {
        flag = false;
      }
    }

    if (flag === false) {
      this.error = 'This e-mail is already registered!';
    } else {
      this.usersService.onCreateUser(this.userData);
      this.getUserSubscriber.unsubscribe();
    }
  }
}
