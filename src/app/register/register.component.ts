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

    const name = form.value.name;
    const surname = form.value.surname;
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    this.usersService.signUp(name, surname, email, password).subscribe(resData => {
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
