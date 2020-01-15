import { Post } from './../../post.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() userInfo: Post;

  allUsers = [];
  searchText = '';
  myUser;
  myUsers = [];

  searchForm: FormGroup;

  constructor(
    private router: Router,
    private dataService: DataService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.getUsers();

    this.searchForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  getUsers() {
    this.loginService.getUsers().subscribe((data) => {
      for (let key in data) {
        let value = data[key];
        this.allUsers.push(value);
      }
    });

  }
  go(user){
    console.log('USER INFO');
    console.log(this.userInfo);

    let temp = {} as Post;
    temp.id = user.name + ' ' + user.surname;
    temp.author = user.email;
    temp.text = '';
    temp.time = new Date();

    this.dataService.setData('user', [temp]);
    this.router.navigate(['/detail/user']);
  }
  searchUser() {
    console.log(this.allUsers);

    this.allUsers.forEach(element => {
      if (element.surname.indexOf(this.searchForm.value.name) !== -1) {
        this.myUsers.push(element);
      }
    });
    console.log(this.myUsers);

  }
  onDetail() {
    console.log('onDetail');

    this.dataService.setData('user', [this.userInfo]);
    this.router.navigate(['/detail/user']);
  }

  onSubmit() {
    this.searchForm.reset();
  }
}
