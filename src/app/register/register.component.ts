import { Component, OnInit } from '@angular/core';
import { LoginInfo } from 'src/login.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: LoginInfo[] = [];
  userSign = new LoginInfo('', '', '', '');

  constructor() {
  }

  ngOnInit() {

  }


  signIn() {
    console.log('Giriş yapıldı. Kullanıcı = ' + this.userSign.name + " " + this.userSign.surname);
    console.log(this.userSign);
    let yeni = new LoginInfo(this.userSign.name,this.userSign.surname, this.userSign.email, this.userSign.password);
    this.users.push(yeni);
  }

  print() {
    console.log(this.users[0] instanceof LoginInfo);

    console.log(this.users);
  }

}
