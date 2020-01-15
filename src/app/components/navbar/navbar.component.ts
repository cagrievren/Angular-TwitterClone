import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/post.model";
import { Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";
import { LoginService } from '../../services/login.service';
import { element } from 'protractor';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() userInfo: Post;


  allUsers = [];
  searchText = '';
  myUser;

  constructor(private router: Router, private dataService: DataService, private loginService: LoginService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loginService.getUsers().subscribe((data) => {
      for (let key in data) {
        let value = data[key];
        this.allUsers.push(value);
      }
    });

  }
  searchUser() {
    console.log(this.searchText);

    console.log(this.allUsers);

    this.allUsers.forEach((element) => {
      if (element.name.indexOf(this.searchText) > 0) {
        this.myUser = element;
      }


    });
    console.log(this.myUser);

  }
  onDetail() {
    console.log("onDetail");

    this.dataService.setData("user", [this.userInfo]);
    this.router.navigate(["/detail/user"]);
  }
}
