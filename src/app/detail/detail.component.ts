import { Component, OnInit } from "@angular/core";
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
  loader = false;
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
    this.postService
      .getOnlyUser(`${this.user.author}`)
      .on("value", (snapshot) => {
        let posts = snapshot.val();
        for (let key in posts) {
          let value = posts[key];
          allPosts.push(value);
          // this.loadedPosts;
        }
        this.loadedPosts = allPosts;
      });
    setTimeout(() => {
      this.loader = true;
    }, 1500);
  }

  goBack() {
    this.router.navigate(["/login"]);
  }

  showPosts() {
    console.log(this.loadedPosts);
  }
}
