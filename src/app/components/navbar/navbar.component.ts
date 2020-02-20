import { Post } from "./../../post.model";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";
import { SignInService } from "../../services/sign-in.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() userInfo: Post;

  allUsers = [];
  searchText = "";
  myUser;
  myUsers = [];

  searchForm: FormGroup;

  constructor(
    private router: Router,
    private dataService: DataService,
    private signinService: SignInService
  ) {}

  ngOnInit() {
    this.getUsers();

    this.searchForm = new FormGroup({
      name: new FormControl("", [Validators.required])
    });
  }

  getUsers() {
    this.signinService.getUsers().subscribe(data => {
      for (let key in data) {
        let value = data[key];
        this.allUsers.push(value);
      }
    });
  }

  go(user) {
    let temp = {} as Post;
    temp.id = user.name + " " + user.surname;
    temp.author = user.email;
    temp.text = "";
    temp.time = new Date();

    this.dataService.setData("user", [temp]);
    this.router.navigate(["/detail/user"]);
  }

  searchUser() {
    this.allUsers.forEach(element => {
      if (element.surname.indexOf(this.searchForm.value.name) !== -1) {
        this.myUsers.push(element);
      }
    });
  }

  onDetail() {
    this.dataService.setData("user", [this.userInfo]);
    this.router.navigate(["/detail/user"]);
  }

  onSubmit() {
    this.searchForm.reset();
  }
}
