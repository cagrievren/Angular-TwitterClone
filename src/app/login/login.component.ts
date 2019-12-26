import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkUser: boolean = false;

  constructor(private userService: UsersService) {
  
  }

  ngOnInit() {
  }

  login() {
    this.userService.users;
    this.checkUser = true;
  }

}
