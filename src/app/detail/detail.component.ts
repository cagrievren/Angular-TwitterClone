import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PostServiceService } from "../services/post-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  user;
  loadedPosts = [];
  posts = [];
  constructor(
    private postService: PostServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.route.snapshot.data.userID[0];
    console.log("ASDFASDFASDFASD");

    console.log(this.user);

    let allPosts = [];
    this.loadedPosts = allPosts;
    this.postService
      .getOnlyUser(`${this.user.author}`)
      .on("value", function(snapshot) {
        let posts = snapshot.val();
        for (let key in posts) {
          let value = posts[key];
          allPosts.push(value);
          // this.loadedPosts;
        }
      });
  }

  goBack() {
    this.router.navigate(["/login"]);
  }

  showPosts() {
    console.log(this.loadedPosts);
  }
}
