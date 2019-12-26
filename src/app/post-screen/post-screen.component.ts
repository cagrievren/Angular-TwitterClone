import { Component, OnInit } from '@angular/core';
import { Post } from 'src/post';

@Component({
  selector: 'app-post-screen',
  templateUrl: './post-screen.component.html',
  styleUrls: ['./post-screen.component.css']
})
export class PostScreenComponent implements OnInit {
  
  posts: Post[] = []
  post = new Post('Çağrı Evren', 'cagrievren@yaani.com', '', null);

  constructor() { }

  ngOnInit() {
  }

  addPost() {
    let newPost = Object.assign({}, this.post);
    this.posts.push(newPost);
    console.log(this.posts);   
  }
}
