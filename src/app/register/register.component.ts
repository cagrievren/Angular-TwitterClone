import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { RegisterInfo } from 'src/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading = false;
  userData: RegisterInfo = {} as RegisterInfo;

  constructor(private http: HttpClient, private usersService: UsersService) {}

  ngOnInit() {}

  signUp() {
    
    console.log(this.userData);
    this.usersService.onCreateUser(this.userData);
    
    console.log('TSye girdi');   
  }

  getUsers() {
    this.usersService.getUsers();
  }
}
