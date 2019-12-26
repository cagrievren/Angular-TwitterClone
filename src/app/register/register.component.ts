import { Component, OnInit } from '@angular/core';
import { signInInfo } from 'src/sign-in';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: signInInfo[] = [];
  userSign = new signInInfo('', '', '', '');
  
  constructor() {
  }

  ngOnInit() {

  }

 
  signIn() {
    console.log('Giriş yapıldı. Kullanıcı = ' + this.userSign.name + " " + this.userSign.surname);
    console.log(this.userSign);  
    let yeni = new signInInfo(this.userSign.name,this.userSign.surname, this.userSign.email, this.userSign.password);
    this.users.push(yeni);
  }

  print() {
    console.log(this.users[0] instanceof signInInfo);
    
    console.log(this.users);
  }

}
