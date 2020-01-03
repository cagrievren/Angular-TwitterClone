import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterInfo } from 'src/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  onCreateUser(userData){
    console.log('servise girdi');    
   
    
     this.http.post('https://angulartwitterclone.firebaseio.com/users.json', userData)
    .subscribe(sendingData => {
      console.log(sendingData);
    });
    
  }
  getUsers(){
    this.http.get('https://angulartwitterclone.firebaseio.com/users.json').subscribe((data) => {
      console.log(data);
    });
  }

}
