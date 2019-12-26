import { Injectable } from '@angular/core';
import { signInInfo } from 'src/sign-in';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: signInInfo[] = [];
  
  constructor() { }
}
