import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { LoginInfo } from 'src/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //checkUser: boolean = false;
  currentUser = new LoginInfo('Çağrı', 'Evren', 'cagrievren@yaani.com', '123123');

  constructor(private userService: UsersService) {
  
  }

  ngOnInit() {
  }

  login() {
    this.userService.currentUser = this.currentUser;
    console.log(this.userService.currentUser);
    
    this.userService.users;
    //this.checkUser = true;
  }

}
