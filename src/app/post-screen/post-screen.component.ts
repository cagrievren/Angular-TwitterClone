import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/post.model";
// import { LoginInfo } from 'src/login.model';
import { Router, ActivatedRoute } from "@angular/router";
import { PostServiceService } from "../services/post-service.service";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../services/data.service";
import { map } from 'rxjs/operators';

@Component({
  selector: "app-post-screen",
  templateUrl: "./post-screen.component.html",
  styleUrls: ["./post-screen.component.css"]
})
export class PostScreenComponent implements OnInit {
  currentUser: Post = { id: "", author: "", text: "", time: new Date() };
  loadedPosts: Post[] = [];
  // post = new Post('Çağrı Evren', 'cagrievren@yaani.com', '', null);

  // checkUser: LoginInfo;

  constructor(
    private router: Router,
    private postService: PostServiceService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.postService.getPosts().pipe(map((posts) => {
      let allPosts: Post [] = [];
      for (let key in posts) {
        let value = posts[key];
        allPosts.push(value);
      }
      return allPosts;
    })).subscribe((posts) => {
        console.log(posts);
        
    });
    console.log(this.route.snapshot.data.userID);
    let user = this.route.snapshot.data.userID;

    this.currentUser.id = user[0];
    this.currentUser.author = user[1];

    // // this.checkUser = this.userService.currentUser;
    // // console.log('new user');
    // // this.posts = this.postService.posts;
    // this.postService.fetchPosts().subscribe(
    //   posts => {
    //     this.loadedPosts = posts;
    //   }
    // );
  }

  onCreatePost() {
    console.log(this.currentUser);

    //   let postData: Post;
    //   postData.id = 'Çağrı Evren';
    //   postData.author = 'cagrievren@yaani.com';
    //   postData.text = 'First Post';
    //   postData.time = new Date();
    //   let date = new Date();
    //   this.post.timeStamp = date;
    //   this.postService.addPost(this.post, this.checkUser);
    //   this.post.text = '';
    //   this.postService.addPost('Çağrı Evren', 'cagrievren@yaani.com',  'First Post', new Date()
    //    );
  }

  // onFetchPosts() {
  //   this.postService.fetchPosts().subscribe(
  //     posts => {
  //       console.log(posts);

  //       this.loadedPosts = posts;
  //     }
  //   );
  // }

  goBack() {
    this.router.navigate(["/login"]);
  }

  // deletePost(index) {
  //   if (this.posts[index].author === this.checkUser.email) {
  //     this.posts.splice(index, 1);
  //   } else {
  //     alert ('You have not authorization to do this!')
  //   }
  // }

  // isUser(index) {
  //   if (this.posts[index].author === this.checkUser.email) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
