import { Component, OnInit } from "@angular/core";
// import { LoginInfo } from "src/login.model";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  
  // currentUser = new LoginInfo(
  //   "Çağrı",
  //   "Evren",
  //   "cagrievren@yaani.com",
  //   "123123"
  // );

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  // login() {
  //   this.userService.currentUser = this.currentUser;
  //   this.checkUser();
  // }

  // checkUser() {
  //   let users: LoginInfo[] = this.userService.users;

  //   let userIndex = -1;

  //   let flag = false;
  //   for (let i = 0; i < users.length; i++) {
  //     if (
  //       this.currentUser.email === this.userService.users[i].email &&
  //       this.currentUser.password === this.userService.users[i].password
  //     ) {
  //       flag = true;
  //       userIndex = i;
  //     }
  //   }

  //   if (flag === true) {
  //     this.userService.currentUser = users[userIndex];
  //     this.router.navigate(["/post-screen"]);
  //   } else {
  //     alert("This user is not exists!");
  //   }
  // }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.loginService.signUp(email, password).subscribe(resData => {
      console.log(resData);   
    },
    error => {
      console.log(error);     
    }
    
    );

    form.reset();
  }
}
