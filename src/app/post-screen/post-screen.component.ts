import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/post.model";
import { Router, ActivatedRoute } from "@angular/router";
import { PostServiceService } from "../services/post-service.service";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../services/data.service";
import { map } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-post-screen",
  templateUrl: "./post-screen.component.html",
  styleUrls: ["./post-screen.component.css"]
})
export class PostScreenComponent implements OnInit {
  currentUser: Post = { id: "", author: "", text: "", time: new Date() };
  loadedPosts: Post[] = [];
  postsSubscriber: Subscription;
  postID: string[] = [];

  constructor(
    private router: Router,
    private postService: PostServiceService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.postsSubscriber = this.shortcutFunc();
    console.log(this.route.snapshot.data.userID);
    let user = this.route.snapshot.data.userID;

    this.currentUser.id = user[0];
    this.currentUser.author = user[1];
  }

  onCreatePost() {
    this.currentUser.time = new Date();
    console.log(this.currentUser);
    this.postsSubscriber.unsubscribe();
    this.postService.addPost(this.currentUser).subscribe(() => {
      this.shortcutFunc();
    });
    this.currentUser.text = "";
  }

  goBack() {
    this.router.navigate(["/login"]);
  }

  isAuth(userIndex) {
    if (this.loadedPosts[userIndex].author === this.currentUser.author) {
      return true;
    } else {
      return false;
    }
  }

  delete(e) {
    this.postsSubscriber.unsubscribe();
    this.postService.deletePost(this.postID[e]).then(() => {
      this.shortcutFunc();
    });
  }

  shortcutFunc() {
    return this.postService
      .getPosts()
      .pipe(
        map(posts => {
          let allPosts: Post[] = [];
          for (let key in posts) {
            let value = posts[key];
            allPosts.push(value);
            this.postID.push(key);
          }
          return allPosts;
        })
      )
      .subscribe((posts: Post[]) => {
        console.log(posts);
        this.loadedPosts = posts;
      });
  }
}
