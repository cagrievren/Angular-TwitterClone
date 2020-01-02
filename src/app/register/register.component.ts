import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading = false;

  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.email;

    this.isLoading = true;

    this.usersService.signUp(email, password).subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
    },
    error => {
      console.log(error);
      this.isLoading = false;
    });

    form.reset();
  }
}
