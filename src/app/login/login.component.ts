import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { RegisterInfo } from "src/user.model";
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  
  allUsers: RegisterInfo[] = [];

  email: string = '';
  password: string = '';
  error: string = null;

  getUserSubscriber: Subscription;

  isLoading = false;

  signinForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.signinForm);
    this.signinForm.reset();
  }

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
    this.isLoading = true;
  }

  checkUser() {
    let userIndex = -1;

    let flag = false;
    for (let i = 0; i < this.allUsers.length; i++) {
      if (
        this.signinForm.value['email'] === this.allUsers[i].email &&
        this.signinForm.value['password'] === this.allUsers[i].password
      ) {
        flag = true;
        userIndex = i;
      }
    }

    if (flag === true) {
      this.allUsers[userIndex];
      this.router.navigate(['/post-screen']);
      this.getUserSubscriber.unsubscribe();
    } else {
      this.error = 'E-mail address or password is wrong! Please try again.';
      //alert('E-mail address or password is wrong! Please try again.');
      this.isLoading = false;
    }
  }

  
}
