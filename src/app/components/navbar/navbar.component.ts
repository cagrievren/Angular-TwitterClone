import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/post.model";
import { Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() userInfo: Post;
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {}

  onDetail() {
    console.log("onDetail");

    this.dataService.setData("user", [this.userInfo]);
    this.router.navigate(["/detail/user"]);
  }
}
