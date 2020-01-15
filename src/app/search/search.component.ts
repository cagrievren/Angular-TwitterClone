import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { RegisterInfo } from 'src/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText;
  allUsers: RegisterInfo[] = [];
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    console.log('serch Olması lazım');
  }

  getUsers() {
    this.loginService.getUsers().subscribe(data => {
      for(let key in data){
        let value = data[key];
        this.allUsers.push(value);
      }
      console.log(this.allUsers);
      
    })
  }

}
