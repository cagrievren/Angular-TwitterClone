import { Injectable, OnInit } from '@angular/core';
import { signInInfo } from 'src/sign-in';
@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  users: signInInfo[] = [];

  constructor() { }

  ngOnInit() {
    this.addSomeUser();
  }
  addSomeUser() {
    this.users.push(new signInInfo('Oğuzhan','Atasever', 'oguzhanatasever@yaani.com', '12341234'));
    this.users.push(new signInInfo('Oğuzhan','Atasever', 'oguzhanatasever@yaani.com', '12341234'));
    this.users.push(new signInInfo('Oğuzhan','Atasever', 'oguzhanatasever@yaani.com', '12341234'));
    this.users.push(new signInInfo('Oğuzhan','Atasever', 'oguzhanatasever@yaani.com', '12341234'));
    this.users.push(new signInInfo('Oğuzhan','Atasever', 'oguzhanatasever@yaani.com', '12341234'));
    this.users.push(new signInInfo('Oğuzhan','Atasever', 'oguzhanatasever@yaani.com', '12341234'));
    this.users.push(new signInInfo('Oğuzhan','Atasever', 'oguzhanatasever@yaani.com', '12341234'));

  }
}
