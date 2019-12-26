import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { LoginInfo } from 'src/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  constructor(private userService: UsersService) {
  
   }

  ngOnInit() {
  }

}
