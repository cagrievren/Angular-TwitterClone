import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { signInInfo } from 'src/sign-in';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

 

  constructor(private userService: UsersService) {
  
   }

  ngOnInit() {
  }

}
