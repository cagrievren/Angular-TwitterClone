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

  searchForm: FormGroup;

  constructor(
    private router: Router,
    private dataService: DataService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.getUsers();

    this.searchForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  getUsers() {
    this.loginService.getUsers().subscribe(data => {
      for (let key in data) {
        let value = data[key];
        this.allUsers.push(value);
      }
    });
  }
  git(user){

    console.log('USER INFO');
    console.log(this.userInfo);

    // let gecici = new Post(user.name + ' ' + user.surname, user.email, '', new Date());

    let gecici = {} as Post;
    gecici.id = user.name + ' ' + user.surname;
    gecici.author = user.email;
    gecici.text = '';
    gecici.time = new Date();

    this.dataService.setData('user', [gecici]);
    this.router.navigate(['/detail/user']);
  }
  searchUser() {
    console.log(this.searchText);

    console.log(this.allUsers);

    this.allUsers.forEach(element => {
<<<<<<< HEAD
      if (element.surname.indexOf(this.searchForm.value.name) !== -1) {
        this.myUsers.push(element);
=======
      if (element.name.indexOf(this.searchText) > 0) {
        this.myUser = element;
>>>>>>> parent of 8554c7b... changes
      }
    });
    console.log(this.myUser);
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
