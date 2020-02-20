import { Component, OnInit } from "@angular/core";
import { SignInService } from "../services/sign-in.service";
import { SignUpInfo } from "src/signup.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchText;
  allUsers: SignUpInfo[] = [];

  constructor(private signinService: SignInService) {}

  ngOnInit() {}

  getUsers() {
    this.signinService.getUsers().subscribe(data => {
      for (let key in data) {
        let value = data[key];
        this.allUsers.push(value);
      }
    });
  }
}
