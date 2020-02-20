import { Component, OnInit } from "@angular/core";
import { SignUpService } from "../services/signup.service";
import { SignUpInfo } from "src/signup.model";
import { HttpClient } from "@angular/common/http";
import { LoginService } from "../services/sign-in.service";
import { Subscription } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  userData: SignUpInfo = {} as SignUpInfo;
  allUsers: SignUpInfo[] = [];

  email: string = "";
  error: string = null;

  getUserSubscriber: Subscription;

  signupForm: FormGroup;

  constructor(
    private http: HttpClient,
    private signupService: SignUpService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      // name: new FormControl(null, Validators.required),
      // surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.signupForm.reset();
  }

  signUp() {
    // this.checkDatabase();
  }

  // checkDatabase() {
  //   this.getUserSubscriber = this.loginService.getUsers().subscribe(data => {
  //     if (data === null) {
  //       this.usersService.onCreateUser(this.userData);
  //     } else {
  //       for (let key in data) {
  //         let value = data[key];
  //         this.allUsers.push(value);
  //       }
  //       this.checkDatabaseEmail();
  //     }
  //   });
  // }

  // checkDatabaseEmail() {
  //   let flag = true;

  //   this.userData.name = this.signupForm.value.name;
  //   this.userData.surname = this.signupForm.value.surname;
  //   this.userData.email = this.signupForm.value.email.toLowerCase();
  //   this.userData.password = this.signupForm.value.password;

  //   for (let i = 0; i < this.allUsers.length; i++) {
  //     if (this.signupForm.value["email"] === this.allUsers[i].email) {
  //       flag = false;
  //     }
  //   }

  //   if (flag === false) {
  //     this.error = "This e-mail is already registered!";
  //   } else {
  //     this.usersService.onCreateUser(this.userData);
  //     alert("Successfully registered! Now, you can sign in.");
  //     this.getUserSubscriber.unsubscribe();
  //   }
  // }
}
