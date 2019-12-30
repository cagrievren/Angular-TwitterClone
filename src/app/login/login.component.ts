import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { LoginInfo } from 'src/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser = new LoginInfo('Çağrı', 'Evren', 'cagrievren@yaani.com', '123123');

  //disabledAgreement: boolean = true;

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.userService.currentUser = this.currentUser;
    //console.log(this.userService.currentUser);
    //this.userService.users;
    this.checkUser();
  }

  checkUser() {

    let users: LoginInfo[] = this.userService.users;

    let userIndex = -1;
    
    let flag = false;
    for (let i = 0; i < users.length; i++) {
      if (this.currentUser.email === this.userService.users[i].email && this.currentUser.password === this.userService.users[i].password) {
        flag = true;
        userIndex = i;
      }
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    if (flag === true) {
      this.userService.currentUser = users[userIndex];
      this.router.navigate(['/post-screen']);
    } else {
      alert('This user is not exists!')
    }

  }

  // changeCheck(event){
  //   this.disabledAgreement = !event.checked;
  // }

}
