import { Injectable, OnInit } from '@angular/core';
import { LoginInfo } from 'src/login.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  users: LoginInfo[] = [];

  currentUser: LoginInfo;

  constructor() { }

  ngOnInit() {
    this.addSomeUser();
  }
  addSomeUser() {
    this.users.push(new LoginInfo('Çağrı', 'Evren', 'cagrievren@yaani.com', '123123'));
    this.users.push(new LoginInfo('Oğuzhan', 'Atasever', 'oguzhanatasever@yaani.com', '123456'));
    this.users.push(new LoginInfo('Mustafa', 'Evren', 'mustafaevren@yaani.com', '456123'));
    this.users.push(new LoginInfo('Cemalettin', 'Evren', 'cemalettinevren@yaani.com', '789345'));
    this.users.push(new LoginInfo('Berkay', 'Evren', 'berkayevren@yaani.com', '456789'));
  }
}
