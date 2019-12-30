import { Component, OnInit } from '@angular/core';
import { Post } from 'src/post';
import { LoginInfo } from 'src/login.model';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-post-screen',
  templateUrl: './post-screen.component.html',
  styleUrls: ['./post-screen.component.css']
})
export class PostScreenComponent implements OnInit {

  posts: Post[] = [];
  post = new Post('Çağrı Evren', 'cagrievren@yaani.com', '', null);

  checkUser: LoginInfo;

  constructor(private userService: UsersService, private router: Router, private postService: PostServiceService) { }

  ngOnInit() {
    this.checkUser = this.userService.currentUser;
    console.log('new user');
    this.posts = this.postService.posts;
  }

  addPost() {
    let date = new Date();
    this.post.timeStamp = date;
    this.postService.addPost(this.post, this.checkUser);
    this.post.text = '';
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  deletePost(index) {
    if (this.posts[index].author === this.checkUser.email) {
      this.posts.splice(index, 1);
    } else {
      alert ('You have not authorization to do this!')
    }
  }

  isUser(index) {
    if (this.posts[index].author === this.checkUser.email) {
      return true;
    } else {
      return false;
    }
  }
}
